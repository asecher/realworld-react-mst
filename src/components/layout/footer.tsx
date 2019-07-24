import * as React from "react";
import { Layout } from "antd";

const Footer: React.SFC = () => (
  <Layout.Footer className="footer">
    <div>
      <a className="footer-link" href="/">
        Conduit
      </a>{" "}
      <span>
        An interactive learning project from{" "}
        <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed
        under MIT.
      </span>
    </div>
  </Layout.Footer>
);

export default Footer;
