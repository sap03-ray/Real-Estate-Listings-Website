import React,{useEffect,useRef,useContext} from 'react'
import {Container,Row,Button} from 'reactstrap'
import {NavLink,Link,useNavigate} from 'react-router-dom';
import logo_real from '../../data/image/logo_real.png'
import './header.css';

import { AuthContext } from './../../context/AuthContext';



const nav_link=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tour',
    display:'Properties'
  },

]
const Header = () => {

  const headerref=useRef(null);
  const menuref=useRef(null);
  const navigate=useNavigate();
  const {user,dispatch}=useContext(AuthContext)


  const logout =()=>{
    dispatch({type:'LOGOUT'});
    navigate('/')
  };

  const stickyheaderfunction=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
        headerref.current.classList.add('sticky__header')
      }else{
        headerref.current.classList.remove('sticky__header')

      }
    })
  }
  useEffect(()=>{
    stickyheaderfunction()
    return window.removeEventListener('scroll',stickyheaderfunction)

  },[])

  const toggleMenu=()=>menuref.current.classList.toggle('show__menu')
  return( 
  <header className='header' ref={headerref}>
    <Container>
      <Row>
        <div className='nav__wrapper d-flex align-items-center justify-content-between'>
          {/* /logo */}
          <div className='logo'>
            <img src={logo_real} alt='...' className='logoreal'></img>
          </div>
          {/* /logo end */}

          {/* /menu start */}
          <div className='navigation ' ref={menuref} onClick={toggleMenu}>
            <ul className='menu d-flex align-items-center gap-5'>
            {
              nav_link.map((item,index)=>(
                <li className='nav__item' key={index}>
                  <NavLink to={item.path} className={navClass=>navClass.isActive ? 'active__link':""}>{item.display}</NavLink>
                </li>
              ))
            }

            </ul>
          </div>
          {/* /menu end*/}
          <div className='nav__right d-flex align-items-center gap-4'>
            <div className='nav__btns d-flex align-items-center gap-4'>

            {
               user?( <>
                <h5 className='mb-0 ml-3'>{user.username}</h5>
                <Button className='btn btn-success' onClick={logout}>LOGOUT</Button>

              </>):(<> 
              <Button className='btn secondary__btn'>
                  <Link to='/login'>Login</Link> 
                  </Button>
                  <Button className='btn demo primary__btn'>
                  <Link to='/register'>Register</Link> 
                  </Button>
              </>)
            } 
                  
                  
            </div>
            <span className='mobile__menu' onClick={toggleMenu}>
            
            <i class="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
  );
}

export default Header