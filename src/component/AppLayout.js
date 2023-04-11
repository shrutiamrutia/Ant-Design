import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import React from 'react';
import { Divider, Space, Typography } from 'antd';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';

const { Header, Sider } = Layout;

const menuItemList = [{ name: "Home", path: "/home" }, { name: "MyBooks", path: "/mybooks" }, { name: "Favorites", path: "/favorites" }]
const items2 = menuItemList.map((menuItem, index) => {
    const key = String(index + 1);
    return {
        key: `icon${key}`,
        icon: <UserOutlined />,
        label: <div><Link to={`${menuItem.path}`}>{menuItem.name}</Link></div>,

    };
});

const AppLayout = (props) => {

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            props.history.push('/login')
        }
    }, []);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>

            <Header className="header">
                <div className="logo" >
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} />
                    <Space split={<Divider type="vertical" />}
                        style={{
                            fontSize: '24px',
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'right'
                        }}>
                        <Typography.Link>Home</Typography.Link>
                        <Typography.Link>MyBooks</Typography.Link>
                        <Typography.Link>Favorites</Typography.Link>
                    </Space>
                </div>
            </Header>

            <Layout>
                <Sider
                    width={200}
                    style={{
                        background: colorBgContainer,
                    }}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                    </Breadcrumb>
                    {props.children}
                </Layout>
            </Layout>
        </Layout>
    );
};
export default AppLayout;