import { UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Carousel } from 'antd';

const Register = () => {

    return(
        <div className='loginForm grid grid-cols-7 vanRegular'>
            <div className='login-details col-span-3'>
                <div className='pb-14'>
                    <h1 className='vanBold title text-3xl'>Chat App</h1>
                    <p className='text-gray-400'>Welcome Back, Please login <br/> to your account</p>
                </div>
                <Form>
                    <Form.Item
                    name="email"
                    rules={[
                        {
                        required: true,
                        message: 'Please enter your Email!',
                        },
                    ]}
                    >
                    <Input prefix={<UserOutlined />} placeholder="Email Address" />
                    </Form.Item>
                    <Form.Item>
                    <Button type='primary' flex htmlType='submit'>
                        Create Account
                    </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className='col-span-4'>
                <Carousel>
                    <div></div>
                </Carousel>
            </div>
        </div>
    )
}

export default Register;