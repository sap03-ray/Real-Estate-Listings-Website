import './booking.css';
import React,{useState,useContext} from 'react'
import { Form,FormGroup,ListGroup,ListGroupItem,Button} from 'react-bootstrap';

import {  useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import { BASE_URL } from '../../utils/config';
const Booking = ({tour,avgRating}) => {
    const {price,reviews,title}=tour;
    const navigate=useNavigate();

    const {user}=useContext(AuthContext)

    const [booking,setBooking]=useState({
        userId:user && user._id,
        userEmail:user && user.email,
        tourName:title,
        fullName:'',
        phone:'',
        guestSize:'',
        bookAt:''

    });
    const handleChanger=(e)=>{
        setBooking(prev =>({...prev,[e.target.id]:e.target.value}))
        
    };
    const servesfee=10;
    const totalAmount=Number(price)*Number(booking.guestSize)+Number(servesfee)
    const handleClick=async e=>{
       e.preventDefault ();
        console.log(booking)


       try {
            if(!user || user===undefined || user===null){
                return alert("please sign in");
            }
            const res=await fetch(`${BASE_URL}/booking`,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify(booking)
            })
            const result=await res.json()
            if(!res.ok){
                return alert(result.message)
            }
            navigate('/paystack')
       } catch (err) {
            alert(err.message)
       }
    }

  return <div className='booking'>
    <div className='booking__top d-flex align-items-center justify-content-between'>
    <h3>${price} <span>/person</span></h3>
    <span className='tour__rating d-flex align-items-center '>
                        <i class="ri-star-fill" ></i>
                         { avgRating=== 0 ? null : avgRating} ({reviews?.length})
     </span>
    </div>
    <div className='booking__form'>
         <h5>Information</h5>
         <Form className='booking__info-form' onSubmit={handleClick}>
             <FormGroup>
                 <input type='text' placeholder='fullName' id='fullName' onChange={handleChanger} required/>
                
             </FormGroup>
             <FormGroup>
                 <input type='number' placeholder='phone' id='phone' onChange={handleChanger} required/>

             </FormGroup>
             <FormGroup className='d-flex align-items-center gap-3'>
                 <input type='date' placeholder='' id='bookAt' onChange={handleChanger} required/>                 
                 <input type='number' placeholder='guest' id='guestSize'  onChange={handleChanger} required/>

             </FormGroup>

         </Form>
     </div>
     {/* botton */}
     <div className='booking__bottom'>
             <ListGroup>
                 <ListGroupItem className='border-0 px-0'>
                         <h5 className='d-flex align-items-center gap-1'>${price}<i class='ri-close-line'></i> 1 person</h5>
                         <span>${price}</span>
                 </ListGroupItem>
                 <ListGroupItem className='border-0 px-0'>
                         <h5>services charge</h5>
                         <span>{servesfee}$</span>
                 </ListGroupItem>
                 <ListGroupItem className='border-0 px-0 total'>
                         <h5>Total</h5>
                         <span>{totalAmount}$</span>               
                </ListGroupItem>
             </ListGroup>
             <Button className='btn primary__btn w-100 mt-4'type='submit' onClick={handleClick}>Book Now</Button>
         </div>
  </div>
}

export default Booking