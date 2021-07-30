import React, { useEffect } from "react";
import axios from "axios";
import { Layout, Menu, Breadcrumb } from 'antd';
import "../../../App.css";
import { Link, Route, withRouter } from 'react-router-dom';
import LoginPage from "../LoginPage/LoginPage";

function HomePage(props) {
  useEffect(() => {
    axios.get("/").then((response) => console.log(response.data));
  }, []);

  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  const onClickHandler = () => {
    props.history.push('/');
  }

  return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" //defaultSelectedKeys={["1"]} // defaultSelectedKeys = 버튼 선택 된 상태 key = 1 이면 1번 버튼 선택 되어 있음
          >
            <Menu.Item key="1" onClick={onClickHandler}>Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Project</Menu.Item>
            <Menu.Item key="4">Contact</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={300} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" title="Project">
                <Menu.Item key="1">다크웹 크롤링 및 분류</Menu.Item>
                <Menu.Item key="2">스피어 피싱 모의훈련 서비스</Menu.Item>
                <Menu.Item key="3">라즈베리파이를 통한 침입탐지시스템</Menu.Item>
                <Menu.Item key="4">Toy Project</Menu.Item>
                <Menu.Item key="5">쇼핑몰 사이트</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
            </Content>
          </Layout>
        </Layout>
      </Layout>
  );
}

export default withRouter(HomePage);
