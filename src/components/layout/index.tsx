import * as React from "react";
import { Layout } from "antd";

import Footer from "./footer";
import Header from "./header";

const { Content } = Layout;

const MyLayout: React.SFC = ({ children }) => (
  <Layout>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Layout>
);

export default MyLayout;
