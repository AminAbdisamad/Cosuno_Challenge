import * as React from "react";
import { useQuery, gql } from "@apollo/client";
import { Table, Avatar, PageHeader, Button, Input } from "antd";
import { Company } from "./types";

const GET_ALL_COMPANIES_QUERY = gql`
  query Companies($searchTerm: String) {
    companies(searchTerm: $searchTerm) {
      name
      city
      category
      logo
    }
  }
`;

export const Companies: React.FC<{ searchTerm: string }> = ({ searchTerm }) => {
  const { data, loading, error } = useQuery<{ companies: Company[] }>(
    GET_ALL_COMPANIES_QUERY,
    {
      variables: {
        searchTerm: searchTerm,
      },
    }
  );

  if (loading) return <h2>Loading..</h2>;
  if (error) return <h1>Error</h1>;

  const dataSource = data?.companies.map((company, i) => {
    return {
      id: i,
      key: company.id,
      name: company.name,
      city: company.city,
      category: company.category,
      logo: company.logo,
    };
  });

  const filteredCategories = Array.from(
    new Set(data?.companies.map((c) => c.category))
  ).map((value) => {
    return {
      text: value,
      value: value,
    };
  });

  const columns = [
    {
      title: "Logo",
      dataIndex: "logo",
      key: "logo",
      render: (logo: any) => {
        return <Avatar src={logo} size={50} />;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: filteredCategories,
      onFilter: (value: any, record: any) => record.category.startsWith(value),
    },
  ];

  console.log(filteredCategories);

  return (
    <div style={{ background: "white", padding: "1rem", borderRadius: "7px" }}>
      <Table dataSource={dataSource} columns={columns} rowKey='id' />
    </div>
  );
};

// <ContentSection>
// <PageHeader
//   className='site-page-header'
//   onBack={() => window.history.back()}
//   title='Contacts'
//   extra={[<Button key='2'>Cancel</Button>]}
// ></PageHeader>
// <Divider />
// {/* Search / Filter Table */}
// {/* @ts-ignore */}
// <Table columns={columns} dataSource={contacts} tableLayout='auto' />
// </ContentSection>
