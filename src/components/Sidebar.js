import React from "react";
import { Layout, Menu, Typography } from "antd";
import RouteContent from "./RouteContent";
import { Link } from "react-router-dom";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AppstoreOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;
class Sidebar extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <Link to="/">
              <Title level={4} style={{ color: "white" }}>
                {this.state.collapsed === true ? (
                  "MJ"
                ) : (
                  <small>
                    Toko <b>Maju Jaya</b>
                  </small>
                )}
              </Title>
            </Link>
          </div>
          <Menu theme="dark" mode="inline">
            <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <SubMenu key="produk" icon={<AppstoreOutlined />} title="Produk">
              <Link to="/produk/daftar_produk">
                <Menu.Item key="daftar-produk">Daftar Produk</Menu.Item>
              </Link>
            </SubMenu>
            <SubMenu
              key="pembelian"
              icon={<AppstoreOutlined />}
              title="Pembelian"
            >
              <Menu.Item key="sub-pembelian">Pembelian</Menu.Item>
            </SubMenu>
            <SubMenu
              key="Penjualan"
              icon={<AppstoreOutlined />}
              title="Pembelian"
            >
              <Menu.Item key="sub-penjualan">Penjualan</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              paddingLeft: 10,
              background: "#001529",
              color: "white",
              textAlign: "left",
            }}
          >
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <RouteContent />
        </Layout>
      </Layout>
    );
  }
}

export default Sidebar;
