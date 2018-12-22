import * as React from "react";
import { Layout } from "antd";

class Footer extends React.Component<any> {
  public render() {
    return (
      <Layout.Footer
        style={{
          backgroundColor: "#FFFF",
          // lineHeight: "50px",
          height: "50px",
          textAlign: "right",
          paddingRight: "20px",
        }}
      >
        GHAM ProReporter V0.0.1
      </Layout.Footer>
    );
  }
}

export default Footer;
