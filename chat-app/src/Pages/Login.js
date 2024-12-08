import { Button, Checkbox, Form, Input, message, Typography } from 'antd';
import React, {useState} from 'react';
import { Carousel } from 'antd';
import { db, auth } from '../firebase/firebase-config';
import {addDoc, collection} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import imgSrc from "../asset/images/login.jpg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from 'firebase/auth';
import FormItem from 'antd/es/form/FormItem';
import Link from 'antd/es/typography/Link';
import { useAuth } from '../firebase/server-side';

const Login = () => {

    // console.log(db);
  
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

            const userCredentials = await signInWithEmailAndPassword(auth, values.email, values.password);
            setError(null);            
            console.log("Login Success");
            navigate("/chat");
            
        } catch (error) {
            console.log(error.message);
            // Handle specific Firebase errors
            if(error.code === 'auth/invalid-credential'){
                setError("Wrong email or password")
            }else if(error.code === 'auth/user-not-found'){
                setError("No user found with this email address")
            }else if(error.code === 'auth/invalid-email'){
                setError("Please enter a valid email address")
            }else{
                setError("An error occurred. Please try again.")
            }
        }
        
        
    }

    const [email, setEmail] = useState("")

    const handleResetPassword = async() => {
        try{
            await sendPasswordResetEmail(auth, email)
            message.success("Password reset email sent! Please check your inbox.")
        }catch (error){
            message.error(error.message)
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
                <Input className='p-3' placeholder="Email Address" value={email} onChange={(event)=>setEmail(event.target.value)}/>
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
                    {error && <div className="text-red-500 text-sm py-2">{error}</div>}
                    <Checkbox className='custom-checkbox'>Remember me</Checkbox>
                    <Link onClick={handleResetPassword} className='text-sm mt-2 justify-end'>Forgot Password?</Link>
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