import React, {useState} from 'react';
import {Card} from 'antd';
import { Layout, Menu, Breadcrumb,List } from 'antd';
import {data} from '../../data/data';
import CodeView from "../../components/problem-details/CodeView";
const { Header, Content, Sider } = Layout;

const ProblemDetails = () => {


    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <List
                        bordered
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                {item.name}
                            </List.Item>
                        )}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <CodeView/>

                        <Card title="Complexity" bordered={false}>
                            Complexity content
                        </Card>

                        <Card title="Application" bordered={false}>
                            Application content
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default ProblemDetails;
