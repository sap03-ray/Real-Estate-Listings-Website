import React from 'react'

import Slider from 'react-slick'
import ava01 from '../../data/image/ava-1.jpg'
import ava02 from '../../data/image/ava-2.jpg'
import ava03 from '../../data/image/ava-3.jpg'
import ava04 from '../../data/image/ava-4.jpg'
import ava05 from '../../data/image/ava-5.jpg'
// import ava02 from '../../data/image/avatar.jpg'

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow:3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    
    return <Slider {...settings}>
        <div className='testimonial py-4 px-3'>
            <p>Buying our first home was a dream come true, and Eleganza Estates made it all possible. From the moment we met our agent, we knew we were in good hands. She was knowledgeable, patient, and always available to answer our questions. The entire process was smooth and stress-free, and we couldn't be happier with our new home. Highly recommend!
            </p>
            <div className='d-flex align-items-center gap-4 mt-3 '>
                <img src={ava01} alt='avatar1' className='w-25 h-25 rounded-2' />
                <div >
                    <h5 className='mb-0 mt-3 '>John Watson</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>Eleganza Estates provided exceptional customer service throughout our home-buying journey. Our agent went above and beyond to ensure we found the perfect home for our family. He was incredibly responsive and always had our best interests at heart. The team made the entire process seamless and enjoyable. Thank you for helping us find our forever home!
            </p>
            <div className='d-flex align-items-center gap-4 mt-3 '>
                <img src={ava02} alt='avatar2' className='w-25 h-25 rounded-2' />
                <div >
                    <h5 className='mb-0 mt-3 '>Rani Agarwal</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>We had a great experience with Eleganza Estates. The process was smooth and efficient, from the initial consultation to closing. Our agent was proactive in keeping us informed and made sure we understood every step. The only reason I'm giving 4 stars instead of 5 is because there was a slight delay in the final paperwork, but overall, it was a very positive experience.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3 '>
                <img src={ava03} alt='avatar3' className='w-25 h-25 rounded-2' />
                <div >
                    <h5 className='mb-0 mt-3 '>Robert Smith</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>Working with Eleganza Estates was a pleasure. Our agent was extremely professional and knowledgeable about the local market. She provided valuable insights that helped us make informed decisions. The team's expertise made a significant difference in our home-buying experience. We are thrilled with our new home and grateful for their guidance.
            </p>
            <div className='d-flex align-items-center gap-4 mt-3 '>
                <img src={ava04} alt='avatar4' className='w-25 h-25 rounded-2' />
                <div >
                    <h5 className='mb-0 mt-3 '>Manoj Kumar</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>As first-time homebuyers, we were quite nervous about the whole process. However, Eleganza Estates made everything so easy and understandable. Our agent was incredibly patient and explained every detail, which helped us feel confident in our decisions. We are now proud homeowners, thanks to their excellent service. Five stars all the way!
            </p>
            <div className='d-flex align-items-center gap-4 mt-3 '>
                <img src={ava05} alt='avatar5' className='w-25 h-25 rounded-2' />
                <div >
                    <h5 className='mb-0 mt-3 '>Max Pattinson</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
}

export default Testimonial