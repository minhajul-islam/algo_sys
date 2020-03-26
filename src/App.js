import React from 'react';
import { Button } from 'antd';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import ProblemList from "./page/programming/ProblemList";
const { Header, Content, Footer } = Layout;


const App = () => (
    <div className="App">
        <Layout className="layout">
            <Header>
                <div className="logo" >
                    <img height={62}  width={120} alt="example" src="https://miro.medium.com/max/3300/1*nUZTZdDBKuci35Ss42bhbQ.jpeg" />
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">programming</Menu.Item>
                    <Menu.Item key="3">Contact us</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding:'50px' }}>
                <div className="site-layout-content">
                  <ProblemList/>
                </div>
            </Content>
            <Footer style={{color:'#00e',textAlign:'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </div>
);


export default App;
