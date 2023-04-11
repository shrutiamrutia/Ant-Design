import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product";



export default configureStore({
    reducer: {
        product: productReducer,

    }
});






























// const [addData, setAddData] = useState({});

//     const handleAddData = (event) => {
//         if (event.target.name === "title") {
//             const updatedAddData = Object.assign(addData, { title: event.target.value })
//             setAddData({ ...updatedAddData })
//         }
//         if (event.target.name === "price") {
//             const updatedAddData = Object.assign(addData, { price: event.target.value })
//             setAddData({ ...updatedAddData })
//         }
//         if (event.target.name === "rating") {
//             const updatedAddData = Object.assign(addData, { rating: event.target.value })
//             setAddData({ ...updatedAddData })
//         }
//         if (event.target.name === "stock") {
//             const updatedAddData = Object.assign(addData, { stock: event.target.value })
//             setAddData({ ...updatedAddData })
//         }
//     };
//     <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//                 <Form.Item label="Title">
//                     <Input
//                         placeholder="input placeholder"
//                         type="text"
//                         name="title"
//                         onChange={handleAddData}
//                         value={addData.title} />
//                 </Form.Item>
//                 <Form.Item label="Price">
//                     <Input
//                         // value={modalData.price}
//                         type="number"
//                         name="price"
//                         placeholder="price"
//                         onChange={handleAddData}
//                         value={addData.price}
//                     />
//                 </Form.Item>
//                 <Form.Item label="Rating">
//                     <Input
//                         // value={modalData.rating}
//                         type="number"
//                         name="rating"
//                         placeholder="rating"
//                         onChange={handleAddData}
//                         value={addData.rating}
//                     />
//                 </Form.Item>
//                 <Form.Item label="Stock">
//                     <Input
//                         // value={modalData.stock}
//                         type="number"
//                         name="stock"
//                         placeholder="stock"
//                         onChange={handleAddData}
//                         value={addData.stock}
//                     />
//                 </Form.Item>
//             </Modal>