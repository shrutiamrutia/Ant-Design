import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/product";

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');



    const dispatch = useDispatch();

    const changeTitle = (event) => {
        setTitle(event.target.value);

    };

    const changePrice = (event) => {
        setPrice(event.target.value);
    };
    const changeRating = (event) => {
        setRating(event.target.value);
    };

    const changeStock = (event) => {
        setStock(event.target.value);
    };


    const changeDescription = (event) => {
        setDescription(event.target.value);
    };
    const changeCategory = (event) => {
        setCategory(event.target.value);
    };

    const changeBrand = (event) => {
        setBrand(event.target.value);
    };

    const changeDiscountPercentage = (event) => {
        setDiscountPercentage(event.target.value);
    };


    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        // body 

        const body = {

            "title": title,
            "description": "An apple mobile which is nothing like apple",
            "price": price,
            "discountPercentage": 12.96,
            "rating": rating,
            "stock": stock,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]
        }
        dispatch(addProduct(body));
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add
            </Button>
            <Modal title="Add Data" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form.Item label="Title">
                    <Input
                        placeholder="title"
                        type="text"
                        name="title"
                        onChange={changeTitle}
                        value={title} />
                </Form.Item>
                <Form.Item label="description">
                    <Input
                        placeholder="description"
                        type="text"
                        name="description"
                        onChange={changeDescription}
                        value={description} />
                </Form.Item>
                <Form.Item label="Price">
                    <Input
                        type="number"
                        name="price"
                        placeholder="price"
                        onChange={changePrice}
                        value={price}
                    />
                </Form.Item>
                <Form.Item label="discountPercentage">
                    <Input
                        placeholder="discountPercentage"
                        type="text"
                        name="discountPercentage"
                        onChange={changeDiscountPercentage}
                        value={discountPercentage} />
                </Form.Item>
                <Form.Item label="Rating">
                    <Input
                        type="number"
                        name="rating"
                        placeholder="rating"
                        onChange={changeRating}
                        value={rating}
                    />
                </Form.Item>
                <Form.Item label="Stock">
                    <Input
                        type="number"
                        name="stock"
                        placeholder="stock"
                        onChange={changeStock}
                        value={stock}
                    />
                </Form.Item>
                <Form.Item label="brand">
                    <Input
                        placeholder="brand"
                        type="text"
                        name="brand"
                        onChange={changeBrand}
                        value={brand} />
                </Form.Item>
                <Form.Item label="category">
                    <Input
                        placeholder="category"
                        type="text"
                        name="category"
                        onChange={changeCategory}
                        value={category} />
                </Form.Item>

            </Modal>
        </>
    );
};

export default App;