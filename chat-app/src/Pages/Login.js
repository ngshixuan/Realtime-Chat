import { Button, Checkbox, Form, Input } from 'antd';
import React, {useState} from 'react';
import { Carousel } from 'antd';
import { db, auth } from '../firebase/firebase-config';
import {addDoc, collection} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import imgSrc from "../asset/images/login.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

    console.log(db);
  
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleRegisterClick = () => {
        navigate("/register");
    }

    const signIn = async (values) => {
        try {
            if(!values.email || !values.password){
                setError("Please enter both email and password");
                return;
            }

            await signInWithEmailAndPassword(auth, values.email, values.password);
            setError(null);
            console.log("Login Success");
            
        } catch (error) {
            console.log(error.message);
        }
        
        
    }

    return(
        <div className='loginForm grid grid-cols-7'>
            <div className='login-details col-span-3'>
                <div className='pb-14'>
                    <h1 className='vanBold title text-3xl pb-2'>Chat App</h1>
                    <p className='text-gray-400'>Welcome Back, Please login <br/> to your account</p>
                </div>
                <Form
                    name="login"
                    initialValues={{
                    remember: true,
                    }}
                    style={{
                    maxWidth: 360,
                    }}
                    onFinish={signIn}
                    >
                <Form.Item
                name="email"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Email!',
                    },
                ]}
                className='pb-4'
                >
                <Input className='p-3' placeholder="Email Address" />
                </Form.Item>
                <Form.Item
                name="password"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Password!',
                    },
                ]}
                >
                    <Input className='p-3' type="password" placeholder="Password" />
                </Form.Item>
                
                <Form.Item className='py-6'>
                    <Checkbox className='custom-checkbox'>Remember me</Checkbox>
                    {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                </Form.Item>

                <Form.Item>
                <Button flex type="primary" className='mr-4 login-btn' htmlType="submit">
                    Login
                </Button>
                <Button onClick={handleRegisterClick} flex type="primary" className='signUp-btn'>
                    Sign up
                </Button>
                </Form.Item>
                <div className='pt-14 mt-10'>
                    <p className='text-gray-400'>By signing up you agree to Chat App's <br/> 
                    <strong>Terms and Condition</strong> & <strong>Privacy Policy</strong></p>
                </div>
                </Form>
            </div>
            <div className='col-span-4'>
                <img className='object-cover' src={imgSrc} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Login;