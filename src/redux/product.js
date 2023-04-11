import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const counterSlice = createSlice({
    name: "product",
    initialState: {
        list: [],
        updatedModalData: []
    },
    reducers: {
        setUserList: (state, action) => {
            state.list = action.payload;
        },
        deleteList: (state, action) => {
            const itemId = action.payload
            state.list = state.list.filter((item) => item.id !== itemId);

        },
        editList: (state, action) => {
            const updatedCustomers = current(state).list.map((product) => {
                if (product.id === action.payload.id) {
                    return Object.assign({}, action.payload)
                }
                return product;
            })
            state.list = updatedCustomers
        },
        addList: (state, action) => {

            const updatedAddList = [...current(state).list]
            console.log('updatedAddList: 1111', updatedAddList);
            const newProduct = action.payload

            updatedAddList.unshift(newProduct)
            console.log('updatedAddList: 2222 ', updatedAddList);
            state.list = updatedAddList

        },
        cardList: (state, action) => {
            state.list = action.payload;
        }

    }
});


export const { setUserList, deleteList, editList, addList, cardList } = counterSlice.actions;
console.log('addList: ', addList);



export const fetchAllUsers = () => (dispatch) => {
    axios
        .get("https://dummyjson.com/products")
        .then((response) => {
            console.log('response: ', response);
            dispatch(setUserList(response.data.products));
        })
        .catch((error) => console.log(error));
};

export const editAllProduct = (body) => (dispatch) => {
    axios
        .put("https://dummyjson.com/products/1", body)
        .then((response) => {
            dispatch(editList(response.data))
        })
        .catch((error) => console.log(error));
};

export const deleteAllProduct = (id) => (dispatch) => {
    axios
        .delete(`https://dummyjson.com/products/${id}`)
        .then((response) => {
            dispatch(deleteList(response.data.id))
        })
        .catch((error) => console.log(error));
};
export const fetchAllUsersByCategory = (category) => (dispatch) => {

    axios
        .get(`https://dummyjson.com/products/category/${category}`,)
        .then((response) => {

            dispatch(setUserList(response.data.products));
        })
        .catch((error) => console.log(error));
};

export const addProduct = (body) => (dispatch) => {
    axios
        .post("https://dummyjson.com/products/add", body)
        .then((response) => {
            console.log('response: ', response);
            dispatch(addList(response.data))
        })
        .catch((error) => console.log(error));
};
export const fetchCard = (body) => (dispatch) => {
    axios
        .post("https://dummyjson.com/products/add", body)
        .then((response) => {
            console.log('response: ', response);
            dispatch(cardList(response.data))
        })
        .catch((error) => console.log(error));
};


export default counterSlice.reducer;


// product add function
