import React,{useState,useContext} from 'react'
import { Container,Row,Col,Form,FormGroup,Button } from 'react-bootstrap'

import { Link, useNavigate } from 'react-router-dom'
import regImg from '../data/image/loginIMG.jpg'
// import userIcon from '../data/image/user.png'
import {AuthContext} from './../context/AuthContext'

import { BASE_URL } from './../utils/config'


import '../style/register.css'

const Register = () => {


  const [credential,setCredential]=useState({
    username:undefined,
    email:undefined,
    password:undefined,

  
  });

  const {dispatch}=useContext(AuthContext)
  const navigate=useNavigate()

  const handleClick= async (e)=>{
    e.preventDefault();

    try{
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(credential)
      })
      const result = await res.json()

      if(!res.ok) alert(result.message)
      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')

    }catch(err){
      alert(err.message)

    }
  }


  const handleChange=(e)=>{
    setCredential(prev =>({...prev,[e.target.id]:e.target.value}))

};
  return <section>
  <Container>
    <Row>
      <Col lg='8' className='m-auto'>
          <div className='login__container d-flex justify-content-between'>
            <div className='login__img'>
              <img src={regImg} alt="..."/>
            </div>
            <div className='login__form'>
                <div className='user'>
                  <img src={'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png'} alt="..."/>

                </div>
                <h2>Register</h2>


                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type='text' placeholder='username' required id='username' onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type='email' placeholder='email' required id='email' onChange={handleChange}/>
                  </FormGroup>
                  <FormGroup>
                    <input type='password' placeholder='Password' required id='password' onChange={handleChange}/>

                  </FormGroup>
                  <Button className='btn secondary__btn auth__btn' type='submit'>Register</Button>

                </Form>
                <p>Already have an account ?<Link to='/login'>Login</Link></p>

            </div>
          </div>
      </Col>
    </Row>
  </Container>
</section>
}

export default Register