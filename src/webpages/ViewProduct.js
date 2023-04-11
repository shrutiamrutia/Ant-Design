import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { Divider, Typography } from 'antd';


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

const Product = (props) => {
    const [productDetails, setProductDetails] = useState([])
    const [loading, setLoading] = useState(true)

    // console.log('productDetails: ', productDetails);

    let productID = props.match.params.id
    useEffect(() => {
        setLoading(true)
        axios
            .get(`https://dummyjson.com/products/${productID}`)
            .then((response) => {
                setProductDetails(response.data)
                setLoading(false)
            })
            .catch((error) => console.log(error));

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
                            fontSize: '34px',
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
                    <Space size={200}>
                        <Card>
                            <p>{loading ? (
                                "Loading.............."
                            ) : (
                                <div>
                                    <h3>
                                        {
                                            Object.entries(productDetails).map(([key, val]) =>
                                                <div className="inline" key={key}>{key}: {val}</div>
                                            )
                                        }
                                    </h3>
                                    {
                                        productDetails.images.map(urlImg => {
                                            return (
                                                <img src={urlImg} alt={"images"} style={{ width: "200px", margin: "8px" }}></img>
                                            )
                                        })
                                    }
                                </div>
                            )}</p>
                        </Card>
                    </Space>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Product;
