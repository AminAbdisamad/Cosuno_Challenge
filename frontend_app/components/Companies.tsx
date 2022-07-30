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
  console.log({ data, error, loading });

  if (loading) return <h2>Loading..</h2>;
  if (error) return <h1>Error</h1>;

  const dataSource = data?.companies.map((company) => {
    return {
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
        return (
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            src={logo}
          />
        );
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

  //   const filtered = (value: any) => {
  //     return {
  //       text: value,
  //       value: value,
  //     };
  //   };

  //   const filterRegions = uniqueDistricts.map((district) => filtered(district));

  return (
    <div style={{ background: "white", padding: "1rem", borderRadius: "7px" }}>
      <Table dataSource={dataSource} columns={columns} />
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
