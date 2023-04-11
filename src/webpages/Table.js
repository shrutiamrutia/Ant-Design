import { Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { Button, Modal, message } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from 'react-router-dom';
import { fetchAllUsers, editAllProduct, deleteAllProduct, fetchAllUsersByCategory } from "../redux/product";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Input, Form } from 'antd';
import axios from 'axios';
import Search from 'antd/es/transfer/search';
import AddProduct from '../component/AddProduct';



const App = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const [messageApi, contextHolder] = message.useMessage();
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [stock, setStock] = useState(0);
    const [menuItem, setMenuItem] = useState([]);
    const [search, setSearch] = useState("");




    const handleChange = (event) => {
        if (event.target.name === "title") {
            const updatedModalData = Object.assign(modalData, { title: event.target.value })
            setModalData({ ...updatedModalData })
        }
        if (event.target.name === "price") {
            const updatedModalData = Object.assign(modalData, { price: event.target.value })
            setModalData({ ...updatedModalData })
        }
        if (event.target.name === "rating") {
            const updatedModalData = Object.assign(modalData, { rating: event.target.value })
            setModalData({ ...updatedModalData })
        }
        if (event.target.name === "stock") {
            const updatedModalData = Object.assign(modalData, { stock: event.target.value })
            setModalData({ ...updatedModalData })
            // setStock(event.target.value)
        }
    };

    const { list } = useSelector((state) => state.product);




    const dispatch = useDispatch();
    const showModal = (record) => {
        let newObj = Object.assign({}, record)
        setIsModalOpen(true);
        setModalData(newObj)
        setTitle(record.title)
        setPrice(record.price)
        setRating(record.rating)
        setStock(record.stock)
    };
    const handleOk = () => {
        messageApi.open({
            type: 'success',
            content: 'This is a success message',
        });
        setIsModalOpen(false);
        const body = {
            title: modalData.title,
            price: modalData.price,
            rating: modalData.rating,
            stock: modalData.stock
        }
        dispatch(editAllProduct(body));
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const viewProduct = (id) => {
        props.history.push(`/viewProduct/${id}`)
    }

    const items = [
        {
            label: 'smartphones',
            key: '1',
        },
        {
            label: 'laptops',
            key: '2',
        },
        {
            label: 'fragrances',
            key: '3',
        },
        {
            label: 'skincare',
            key: '4',
        },
        {
            label: 'groceries',
            key: '5',
        },
        {
            label: 'home-decoration',
            key: '6',
        },
        {
            label: 'furniture',
            key: '7',
        },
        {
            label: 'tops',
            key: '8',
        },
        {
            label: 'womens-dresses',
            key: '9',
        },
        {
            label: 'womens-shoes',
            key: '10',
        },
        {
            label: 'mens-shirts',
            key: '11',
        },
        {
            label: 'mens-shoes',
            key: '12',
        },
        {
            label: 'mens-watches',
            key: '13',
        },
        {
            label: 'womens-watches',
            key: '14',
        },
        {
            label: 'womens-bags',
            key: '15',
        },
        {
            label: 'womens-jewellery',
            key: '16',
        },
        {
            label: 'sunglasses',
            key: '17',
        },
        {
            label: 'automotive',
            key: '18',
        },
        {
            label: 'motorcycle',
            key: '19',
        },
        {
            label: 'lighting',
            key: '20',
        },
    ];

    const handleMenuClick = (e) => {
        message.info('Click on menu item.');
        const selectedCategory = items.find(item => item.key === e.key)
        dispatch(fetchAllUsersByCategory(selectedCategory.label));
    };


    // const menuItemList = menuItem.length && menuItem.map((item, index) => {
    //     return { label: item, key: index + 1 + "" }
    // })

    // console.log('menuItemList: ', menuItemList);


    const menuProps = {
        items,
        onClick: handleMenuClick,
    };


    const columns = [
        {
            title: 'No.',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'thumbnail',
            dataIndex: 'thumbnail',
            align: "center",
            key: 'thumbnail',
            render: (text, record) => {
                return <img src={record.thumbnail} alt="" style={{ width: "20px", textAlign: "center" }} />
            }
        },
        {
            title: 'title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'price',
            dataIndex: 'price',
            key: 'price',
            align: "center",
        },
        {
            title: 'discountPercentage',
            dataIndex: 'discountPercentage',
            key: 'discountPercentage',
            align: "center",
        },
        {
            title: 'rating',
            dataIndex: 'rating',
            key: 'rating',
            align: "center",
        },
        {
            title: 'stock',
            dataIndex: 'stock',
            key: 'stock',
            align: "center",
        },
        {
            title: 'brand',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: 'category',
            dataIndex: 'category',
            key: 'category',
            render: (text, record) => {
                switch (record.category) {
                    case 'smartphones':
                        return <Tag color="magenta">{record.category}</Tag>
                    case 'laptops':
                        return <Tag color="orange">{record.category}</Tag>
                    case 'fragrances':
                        return <Tag color="cyan">{record.category}</Tag>
                    case 'skincare':
                        return <Tag color="lime">{record.category}</Tag>
                    case 'groceries':
                        return <Tag color="green">{record.category}</Tag>
                    case 'home-decoration':
                        return <Tag color="purple">{record.category}</Tag>
                    case 'furniture':
                        return <Tag color="purple">{record.category}</Tag>
                    case 'tops':
                        return <Tag color="purple">{record.category}</Tag>
                    case 'womens-dresses':
                        return <Tag color="purple">{record.category}</Tag>
                    case 'womens-shoes':
                        return <Tag color="purple">{record.category}</Tag>
                    case 'mens-shirts':
                        return <Tag color="purple">{record.category}</Tag>
                    case 'mens-shoes':
                        return <Tag color="purple">{record.category}</Tag>
                    case 'mens-watches':
                        return <Tag color="purple">{record.category}</Tag>
                    case 'womens-watches':
                        return <Tag color="purple">{record.category}</Tag>
                    case 'womens-bags':
                        return <Tag color="purple">{record.category}</Tag>
                    case 'womens-jewellery':
                        return <Tag color="magenta">{record.category}</Tag>
                    case 'sunglasses':
                        return <Tag color="magenta">{record.category}</Tag>
                    case 'automotive':
                        return <Tag color="magenta">{record.category}</Tag>
                    case 'motorcycle':
                        return <Tag color="magenta">{record.category}</Tag>
                    case 'lighting':
                        return <Tag color="magenta">{record.category}</Tag>
                    default:
                        return null
                }
            },
        },

        {
            title: 'images',
            align: "center",
            dataIndex: 'images',
            key: 'images',
            render: (text, record) => {
                return <img src={record.images[0]} alt="" style={{ width: "20px", textAlign: "center" }} />
            }
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',

            render: (text, record) => {
                return (
                    <>
                        <Button type="primary" onClick={() => showModal(record)}  >
                            Edit
                        </Button>
                    </>
                )
            }
        },
        {
            id: 'Operation',
            title: 'Operation',
            dataIndex: 'Operation',
            key: 'Operation',
            render: (text, record) => {
                return <Button type="primary" onClick={() => dispatch(deleteAllProduct(record.id))
                } >
                    Delete
                </Button>
            }
        },
        {
            id: 'View',
            title: 'View',
            dataIndex: 'View',
            key: 'View',
            render: (text, record) => {
                return <Button type="primary" onClick={() => viewProduct(record.id)} >
                    View
                </Button>
            }
        },
    ];

    const handleChangeValue = (e) => {
        setSearch(e.target.value);

    }

    useEffect(() => {
        dispatch(fetchAllUsers());
        axios
            .get('https://dummyjson.com/products/categories')
            .then((response) => {
                setMenuItem(response.data)
            })
            .catch((error) => console.log(error));
    }, [])

    // const data = modalData.filter(product => product.title === "iPhone 9")

    let updateProductList = list;
    if (list.length > 0 && search) {
        updateProductList = list.filter(product => {
            return product.title.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase())
        })
        // console.log('filter data: ', updateProductList);
    }

    return (
        <>
            {contextHolder}

            <Space wrap style={{
                fontSize: '24px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'right',
                bottom: '10px'
            }}>
                <Search
                    type="text"
                    placeholder="Search data..."
                    value={search}
                    onChange={handleChangeValue}
                />
                <Dropdown menu={menuProps}>
                    <Button>
                        <Space>
                            Category
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
                <AddProduct />
            </Space>
            <Modal title="Edit Data" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form.Item label="Title">
                    <Input
                        placeholder="input placeholder"
                        value={modalData.title}
                        type="text"
                        onChange={handleChange}
                        name="title" />
                </Form.Item>
                <Form.Item label="price">
                    <Input
                        value={modalData.price}
                        type="number"
                        name="price"
                        placeholder="price"
                        onChange={handleChange} />
                </Form.Item>
                <Form.Item label="rating">
                    <Input
                        value={modalData.rating}
                        type="number"
                        name="rating"
                        placeholder="rating"
                        onChange={handleChange} />
                </Form.Item>
                <Form.Item label="stock">
                    <Input
                        value={modalData.stock}
                        type="number"
                        name="stock"
                        placeholder="stock"
                        onChange={handleChange} />
                </Form.Item>
            </Modal>
            <Table columns={columns} dataSource={updateProductList} /></>
    );
};
export default withRouter(App);