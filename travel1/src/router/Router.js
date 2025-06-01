import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from './../pages/Home';
import Login from './../pages/Login';
import Register from './../pages/Register';
import Searchlist from './../pages/Searchlist';
import Tour from './../pages/Tour';
import TourDetail from './../pages/TourDetail';
import Thankyou from '../pages/Thankyou';
import About from '../pages/About';
import PayStack from '../pages/PayStack';
import Main from '../component/admin/Main';

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tour' element={<Tour/>}/>
        <Route path='/tour/:id' element={<TourDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tour/search' element={<Searchlist/>}/>
        <Route path='/thankyou' element={<Thankyou/>}/>
        <Route path='/paystack' element={<PayStack/>}/>
        <Route path='/main' element={<Main/>}/>
        

    </Routes>
  )
}

export default Router
