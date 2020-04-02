import React, {useState} from 'react';
import {Card} from 'antd';
import {Layout, Menu, Breadcrumb, List, Button} from 'antd';
import {data} from '../../data/data';
import CodeView from "../../components/problem-details/CodeView";

const {Header, Content, Sider} = Layout;

const ProblemDetails = () => {
    const [complexity, setComplexity] = useState('');
    const [application, setApplication] = useState('');
    const [code, setCode] = useState('');

    return (
        <Layout>
            <Header className="header">
                <div className="logo"/>
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
                                <Button
                                    onClick={() => {
                                        setComplexity(item.complexity);
                                        setApplication(item.type);
                                        setCode(item.date);
                                    }}
                                >
                                    {item.name}
                                </Button>

                            </List.Item>
                        )}
                    />
                </Sider>
                <Layout style={{padding: '0 24px 24px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
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
                        <CodeView value={code}/>

                        <Card title="Complexity" bordered={false}>
                            {complexity}
                        </Card>

                        <Card title="Application" bordered={false}>
                            {application}
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default ProblemDetails;
