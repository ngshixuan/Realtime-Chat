import { Button, Form, Input, message } from 'antd';
import imgSrc from "../asset/images/login.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { db, auth } from "../firebase/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const signUp = async (values) => {

        try {
            if(values.confirmPassword !== values.password){
                setError("Password do not match");        
                return;
            }

            const userCredentials = await createUserWithEmailAndPassword(auth, values.email, values.password);
            console.log(userCredentials.user);
            
            setError(null);
            navigate("/");
        } catch (error) {
            setError(error.message)
        }
        
    }

    return(
        <div className='loginForm grid grid-cols-7'>
            <div className='login-details col-span-3'>
                <div className='pb-14'>
                    <h1 className='title text-3xl pb-2'>Get Started</h1>
                    <p className='text-gray-400'>Create your account now</p>
                </div>
                <Form onFinish={signUp}>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                            required: true,
                            message: 'Please enter your Email!',
                            },
                        ]}
                        className='pb-4'
                    >
                    <Input className='p-3' placeholder="Email Address" />
                    </Form.Item>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Username!'
                            },
                        ]}
                        className='pb-4'
                    >
                    <Input className='p-3' placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your Password!',
                            },
                        ]}
                        className='pb-4'
                    >
                    <Input className='p-3' type="password" placeholder="Password" />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your Password!',
                            },
                        ]}
                    >
                    <Input className='p-3' type="password" placeholder="Confirm Password" />
                    {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                    </Form.Item>
                    <Form.Item>
                    <Button className='login-btn mt-6' type='primary' flex htmlType='submit' onClick={signUp}>
                        Create Account
                    </Button>
                    </Form.Item>
                    <div className='pt-14'>
                        <span className='text-gray-400 pr-1'>Have an account?</span>
                        <Link to="/">Login</Link>
                    </div>
                </Form>
            </div>
            <div className='col-span-4'>
                <img className='object-cover' src={imgSrc} alt="" srcset="" />
            </div>
        </div>
    )
}

export default Register;