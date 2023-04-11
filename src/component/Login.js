import { Button, Form, Input } from 'antd';

import { useState } from 'react';


const App = (props) => {

    const [data, setData] = useState({
        email: '',
        password: ''
    });


    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleChange = (e, name) => {
        setData(Object.assign({ ...data }, { [name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        const { email, password } = data
        if (email === "admin@gmail.com" && password === "12345678") {

            localStorage.setItem('token', "admin@gmail.com");
            return props.history.push("/dashboard")
        } else {
            console.log("Wrong password or username");
        }
        e.preventDefault();
    }

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"

        >
            <Form.Item
                label="email"
                name="email"
                value={data.email}
                onChange={(e) => handleChange(e, "email")}
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                valuePropName="password"
                value={data.password}
                onChange={(e) => handleChange(e, "password")}
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>


            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )

};
export default App;































































































// import React, { useState } from "react";

// export const Login = (props) => {
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }
//     const onLogin = () => {
    // props.login({ email, password });
//         props.history.push("/Dashboard")
//     }

//     return (
//         <div className="auth-form-container">
//             <h2>Login</h2>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label htmlFor="email">email</label>
//                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//                 <label htmlFor="password">password</label>
//                 <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//                 <button type="submit" onClick={onLogin}>Log In</button>
//             </form>

//         </div>
//     )
// }

// export default Login;