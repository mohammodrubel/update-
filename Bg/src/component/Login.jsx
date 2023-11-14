import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';

const Login = () => {
const {  register, handleSubmit, formState: { error },} = useForm();
const {login,user} =useContext(AuthContext)

const onSubmit = (data)=>{
console.log(data)
login(data.email,data.password)
.then(result=>{
    const user = result.user;
    console.log(user)
})
}
    return (
        <Container>
            <Row>
                <Col md={7} className='mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)}  className='p-4 border border-1'>
                    <input placeholder="Enter Your Email" type="email" className='p-2 form-control mt-3' {...register("email")} />
                    <input placeholder='Enter Your password' type='password' className='p-2 form-control mt-3' {...register("password")} />
                    <div className="mx-auto text-center"> 
           <button type="submit">Login</button>
           </div>
           <p className='mt-3 text-center'>If you Don't have any Account please <Link to='/reg'>Register</Link></p>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;