import * as React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Layout>
    <Content style={{ margin: "2rem 16px" }}>
      <div
        className='site-layout-background'
        style={{ padding: 24, minHeight: "84vh", borderRadius: "7px" }}
      >
        {children}
      </div>
    </Content>
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      Cosuno © Coding Challenge
    </Footer>
  </Layout>
);

export default Wrapper;
