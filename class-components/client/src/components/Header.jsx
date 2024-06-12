import { Component } from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";

export default class Header extends Component {
    render() {
        const items = [
            {
              label: "Navigation One",
              key: "mail",
              icon: <MailOutlined />,
            },
            {
              label: "Navigation Two",
              key: "app",
              icon: <AppstoreOutlined />,
              disabled: true,
            },
            {
              key: "alipay",
              label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  Navigation Four - Link
                </a>
              ),
            },
          ];

        return(
            <>
                <Menu mode="horizontal" items={items} />
            </>
        );
    }
}