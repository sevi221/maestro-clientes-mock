import React, { Component } from "react";
import { Menu, Icon, Button } from "antd";
import "./Hierarchy.scss";
const { SubMenu } = Menu;

class Hierarchy extends Component {
  state = {
    collapsed: true,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className="hierarchy" style={{ width: 220 }}>
        <Button
          type="primary"
          onClick={this.toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          <Icon type="apartment" />
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="trophy" />
                <span>Cliente Principal: Sociedad Maderera Española</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Icon type="team" />
              <span>
                <a href="/fichacliente">Cliente ejemplo</a>
              </span>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="user" />
                <span>Cliente comercial</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Icon type="team" />
              <span>
                <a href="/fichacliente">Cliente ejemplo</a>
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="team" />
              <span>
                <a href="/fichacliente">Cliente ejemplo</a>
              </span>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="user" />
                <span>Cliente contratante</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Icon type="team" />
              <span>
                <a href="/fichacliente">Cliente ejemplo</a>
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="team" />
              <span>
                <a href="/fichacliente">Cliente ejemplo</a>
              </span>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="user" />
                <span>Cliente facturable</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Icon type="team" />
              <span>
                <a href="/fichacliente">Cliente ejemplo</a>
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="team" />
              <span>
                <a href="/fichacliente">Cliente ejemplo</a>
              </span>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="user" className="Detallable" />
                <span>Cliente detallable 1</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Icon type="team" />
              <span>
                <a href="/fichacliente">Cliente ejemplo</a>
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="team" />
              <span>
                <a href="/fichacliente">Cliente ejemplo</a>
              </span>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub6"
            title={
              <span>
                <Icon type="user" />
                <span>Cliente detallable 2</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Icon type="team" />
              <span>
                <a href="/fichacliente">Cliente ejemplo</a>
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="team" />
              <span>
                <a href="/fichacliente">Cliente ejemplo</a>
              </span>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
export default Hierarchy;
