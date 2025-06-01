
import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'react-bootstrap'


import weatherImg from '../data/image/weather.png'
import guideImg from '../data/image/guide.png'
import customizationImg from '../data/image/customization.png'

const servicesData=[
    {
        imgUrl:'https://cdn-icons-png.flaticon.com/512/48/48830.png' ,
        title: "Comprehensive Property ",
        desc:"A wide range of properties for sale or rent, including detailed descriptions, photos, and videos.",

    },
    {
        imgUrl:'https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/customer-service-icon.png',
        title: "Customer Support",
        desc:"Dedicated customer support to help users with any issues or questions they may have.",

    },
    {
        imgUrl:'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/filter-512.png',
        title: "Personalized Services",
        desc:"Services that cater to individual needs, such as personalized property recommendations and expert advice.",

    },
]

const ServiceList = () => {
  return <>
    {
        servicesData.map((item,index)=> 
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
        <ServiceCard item={item}/>
        </Col>)
    }
  </>
}

export default ServiceList