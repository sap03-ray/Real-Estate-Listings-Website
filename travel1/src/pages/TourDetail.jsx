import React,{useEffect, useRef,useState,useContext} from "react";
import '../style/tourdetail.css'
import { Container,Row,Col,Form,ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";

import avatar from '../data/image/avatar.jpg'
import calculateAvgRating from '../utils/calculateAvgRating';
import Booking from "../component/Booking/Booking";
import NewsLetter from '../shared/NewsLetter';
import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

import { AuthContext } from "./../context/AuthContext";
const TourDetail = () => {

  const {id}=useParams();
  const reviewMSgRef=useRef('')
  const [tourRating,setTourRating]=useState(null)

  const {user}=useContext(AuthContext)


  //fetch data
  const {data:tour,loading,error}=useFetch(`${BASE_URL}/tour/${id}`)

  const {photo,title,desc,price,address,reviews,city,distance,maxGroupSize,}=tour;

  const {totalRating,avgRating}=calculateAvgRating(reviews)
  // formate date
  const options={day:'numeric',month:'long',year:'numeric'}

  const submitHandler =async e=>{
    e.preventDefault();
    const reviewText=reviewMSgRef.current.value;
    
    try {
      if(!user || user === undefined || user === null){
        alert("please sign in");
      }
      const reviewObj={
        username:user?.username,
        reviewText,
        rating:tourRating,
      }
      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
      })

      const result=await res.json()
      if(!res.ok){
        return alert(result.message)
      }
      alert(result.message)


    } catch (err) {
      alert(err.message)
      
    }
    
  }

  useEffect(()=>{
    window.scrollTo(0,0);
  },[tour])

  return <>
  <section>
    <Container>
    {loading && <h4 className="text-center pt-5">Loading . . . . . </h4>}
    {error && <h4 className="text-center pt-5">{error}</h4>}
      {
        !loading && !error &&<Row>
        <Col lg='8'>
        <div className='tour__content'>
          <img src={photo} alt='...'/>
          <div className='tour__info'>
          <h2>{title}</h2>
          <div className='d-flex align-items-center gap-5'>
          <span className='tour__rating d-flex align-items-center gap-1'>
                        <i class="ri-star-fill" style={{'color':"#06C4C1"}}></i>
                        { avgRating=== 0 ? null : avgRating}
                        {totalRating ===0 ? 
                        ("not rated") 
                        :( <span>({reviews?.length})</span>)}
                        
                </span>
                <span>
                     <i class="ri-map-pin-2-fill"></i>{address} 
                   </span>

          </div>
          <div className='tour__extra-details'>
          <span><i class="ri-map-pin-fill"></i>  {city} </span>
                  <span><i class="ri-money-dollar-circle-line"></i>${price} / person</span>
                  <span><i class="ri-map-pin-time-line"></i>{distance}km</span>

                  <span><i class="ri-group-line"></i>{maxGroupSize}people</span>
          </div>
          <h5>Description</h5>
                <p>{desc}</p>
          </div>
          <div className='tour__reviews mt-4'>
          <h4>Reviews ({reviews?.length} reviews)</h4>
          <Form onSubmit={submitHandler}>
          <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
          <span onClick={()=>setTourRating(1)}>
              1 <i className="ri-star-s-fill "></i>
          </span>
          <span onClick={()=>setTourRating(2)}>
              2 <i className="ri-star-s-fill"></i>
          </span>
          <span onClick={()=>setTourRating(3)}>
              3 <i className="ri-star-s-fill"></i>
          </span>
          <span onClick={()=>setTourRating(4)}>
              4 <i className="ri-star-s-fill"></i>
          </span>
          <span onClick={()=>setTourRating(5)}>
              5 <i className="ri-star-s-fill"></i>                  
          </span>
          </div>
          <div className='review__input'>
          <input type='text' ref={reviewMSgRef} placeholder='share your thougths' required/>
          <button className='btn primary__btn text-white' type='submit'>Submit</button>
          </div>
          </Form>

          {/* difficult */}
          <ListGroup className='user__reviews'>
                  {
                    reviews?.map(review=>(
                      <div className="review__item">
                        <img src={avatar} alt="avatar"/>
                        <div className='w-100'>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div>
                            <h5>{review.username}</h5>
                            <p>{new Date(review.createdAt).toLocaleDateString("en-US",options)}</p>
                          </div>
                          <span className='d-flex align-items-center'>
                          {review.rating}<i className="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))
                  }
          </ListGroup>
          </div>

        </div>
             
        </Col>
              <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />
              </Col>    
      </Row>
      }
    </Container>
  </section>
  <NewsLetter/>

  </>
}

export default TourDetail