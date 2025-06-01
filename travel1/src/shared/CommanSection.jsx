import React from 'react'
import './commonsection.css'
import { Container,Row,Col } from 'reactstrap'
const CommanSection = ({title}) => {
  return (
   <section className='commonsection'>
    <Container>
        <Row>
            <Col lg='12'>
                <h1>{title}</h1>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default CommanSection