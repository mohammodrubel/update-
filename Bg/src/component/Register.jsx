import React, { useContext } from "react";
import {  Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Register = () => {
  const { newUser,user} = useContext(AuthContext)
  const {  register, handleSubmit, formState: { error },} = useForm();

  //email, password, username, useUrl,mobile,Address
  const onSubmit =data =>{
   
    newUser(data.email,data.password,data.username,data.useUrl,data.mobile,data.address)
    
  }
  //console.log(user)
  return (
    <Container>

      <Row>
        <Col md={7} className="mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}  className='p-4 border border-1'>
            <input placeholder="Enter Your Name" type="text" className='p-2 form-control mt-3' {...register("username")} />

            <input type="text" placeholder="Enter Your Mobile Number" className='p-2 form-control mt-3' {...register("mobile")} />

            <input type="text" placeholder="Enter your PhotoURL" className='p-2 form-control mt-3' {...register("useUrl")} />

            <input placeholder='Enter Your Email' type='email' className='p-2 form-control mt-3' {...register("email")} />
             <input placeholder='Enter Your Address' type='text' className='p-2 form-control mt-3' {...register("address")} /> 

            <input type="password" placeholder='password'  className='p-2 form-control mt-3' {...register("password",{pattern: {value: /^(?=.*[A-Z]).+$/,message: 'Last name must only contain letters (A-Z).'}})} />  
            <input type="password" placeholder='Confirm password'  className='p-2 form-control mt-3'   />

           <div className="mx-auto text-center"> 
           <button type="submit">Registration</button>
           </div>
           <p className='mt-3 text-center'>If you have any Account please <Link to='/login'>Login</Link></p>
        </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
