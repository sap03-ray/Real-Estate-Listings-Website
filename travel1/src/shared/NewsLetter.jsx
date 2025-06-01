import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'react-bootstrap'
import maleTourist from '../data/image/male-tourist.png'


const NewsLetter = () => {
    return <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='newsletter__content'>
                        <h2>subscribe to enjoy travelling</h2>

                        <div className='newsletter__input'>
                            <input type='email' placeholder='enter your email' />
                            <button className='btn newsletter__btn'>Subscribe</button>

                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Ut enim ad minim veniam, quis nostrud exercita.
                         </p>
                    </div>
                </Col>
                <Col lg='6'> 
                    <div className='newsletter__img'>
                        <img src={maleTourist} alt='...'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default NewsLetter