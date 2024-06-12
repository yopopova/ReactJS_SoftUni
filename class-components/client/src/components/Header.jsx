import { Component } from "react";
import { Navigate } from 'react-router-dom';

import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";

import TodoContext from "../context/TodoContext";
import withNavigate from "../HOC/withNavigate";


class Header extends Component {
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
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Navigation Four - Link
          </a>
        ),
      },
    ];

    // this.props.navigate('/404');

    return (
      <TodoContext.Consumer>
        {({ name }) => {
          <>
            <Menu mode="horizontal" items={items} />

            <h3>{name}</h3>
          </>;
        }}
      </TodoContext.Consumer>
    );
  }
}

export default withNavigate(Header);