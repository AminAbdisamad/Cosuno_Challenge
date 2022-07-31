import type { NextPage } from "next";
import * as React from "react";
import { Input, PageHeader } from "antd";
import Wrapper from "../components/Wrapper";
import { Companies } from "../components/Companies";

const Home: NextPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const onChangeFilter = (e: any) => {
    const searchInput = e.target.value;
    setSearchTerm(searchInput);
  };

  return (
    <Wrapper>
      <>
        <PageHeader
          style={{
            background: "white",
            borderTopRightRadius: "7px",
            borderTopLeftRadius: "7px",
          }}
          title='Construction Companies'
          extra={[
            <Input
              allowClear
              key='3'
              placeholder='Filter by company name'
              onChange={onChangeFilter}
              value={searchTerm}
              size='large'
            />,
          ]}
        ></PageHeader>
      </>
      <Companies searchTerm={searchTerm} />
    </Wrapper>
  );
};

export default Home;
