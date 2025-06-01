import React,{useRef} from 'react'
import './searchbar.css'
import { Col,Form,FormGroup } from 'react-bootstrap';

import {BASE_URL} from './../utils/config'
import { useNavigate } from 'react-router-dom';


const Searchbar = () => {
    const locationRef=useRef('')
    const distanceRef=useRef(0)
    const maxGroupSizeRef=useRef(0)
    const navigate=useNavigate();
    const searchHandler=async()=>{
        const location=locationRef.current.value;
        const distance=distanceRef.current.value;
        const maxGroupSize=maxGroupSizeRef.current.value;

        if(location==='' || distance==='' || maxGroupSize===''){
            return alert('All field must be filled');
        }


        const res =await fetch(`${BASE_URL}/tour/search/getTourBySearch?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`);

        if(!res.ok) alert('something went wrong')
        const result=await res.json()
        navigate(`/tour/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,{state:result.data});
    
        
    }
  return<Col lg="12">
    <div className='search__bar bg-light'>
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-map-pin-line"></i></span>
                <div>
                    <h6>Location</h6>
                    <input type='text' placeholder='where is your destination' ref={locationRef}/>
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-map-pin-time-line"></i></span>
                <div>
                    <h6>distance</h6>
                    <input type='number' placeholder='distance km/hrs' ref={distanceRef}/>
                </div>
            </FormGroup>
            <FormGroup className='d-flex gap-3 form__group form__group-last'>
                <span><i class="ri-group-line"></i></span>
                <div>
                    <h6>Max people</h6>
                    <input type='number' placeholder='0' ref={maxGroupSizeRef}/>
                </div>
            </FormGroup>
            <span className='search__icon' type="submit" onClick={searchHandler}>
            <i class="ri-search-line"></i>
            </span>
        </Form>
    </div>

  </Col>
}


export default Searchbar