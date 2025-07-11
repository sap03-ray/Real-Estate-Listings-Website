import React,{useState,useContext} from 'react'
import { Container,Row,Col,Form,FormGroup,Button } from 'react-bootstrap'

import { Link ,useNavigate} from 'react-router-dom'
import loginImg from '../data/image/loginIMG.jpg'
import userIcon from '../data/image/user.png'
import '../style/login.css'
import {AuthContext} from './../context/AuthContext'
import {BASE_URL} from './../utils/config'



const Login = () => {
  const [credential,setCredential]=useState({
    email:undefined,
    password:undefined,
    role:"admin"
  
  });

  const {dispatch}=useContext(AuthContext)
  const navigate=useNavigate()

  const handleClick= async (e)=>{
    e.preventDefault();

    dispatch({type:'LOGIN_START'})
    try {
      const res= await fetch(`${BASE_URL}/auth/login`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(credential)
      })
      const result=await res.json()
      if(!res.ok) alert(result.message)
      console.log(result.data)
      

      dispatch({type:'LOGIN_SUCCESS',payload:result.data})
      navigate('/')

      
    } catch (error) {
      dispatch({type:'LOGIN_FAILURE',payload:error.message})
      
    }
  }


  const handleChange=e=>{
    setCredential(prev =>({...prev,[e.target.id]:e.target.value}))

};


  return<section>
    <Container>
      <Row>
        <Col lg='8' className='m-auto'>
            <div className='login__container d-flex justify-content-between'>
              <div className='login__img'>
                <img src={loginImg} alt="..."/>
              </div>
              <div className='login__form'>
                  <div className='user'>
                    <img src={'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png'} alt="..."/>

                  </div>
                  <h2>Login</h2>


                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input type='email' placeholder='email' required id='email' onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                      <input type='password' placeholder='Password' required id='password' onChange={handleChange}/>

                    </FormGroup>
                    <Button className='btn secondary__btn auth__btn' type='submit'>Login</Button>

                  </Form>
                  <p>Dont have an account ?<Link to='/register'>Create</Link></p>

              </div>
            </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Login