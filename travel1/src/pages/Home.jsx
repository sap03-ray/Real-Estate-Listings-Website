import React from "react";
import "../style/home.css";
import { Typewriter } from 'react-simple-typewriter'
import { Container, Row, Col } from "react-bootstrap";
// import heroImg from "../data/image/hero-img01.jpg";
// import heroImg02 from "../data/image/hero-img02.jpg";
import agent from "../data/image/AGENT.png";
// import heroVideo from "../data/image/hero-video.mp4";
import worldImg from "../data/image/world.png";

import Subtitle from "../shared/Subtitle";
import Searchbar from "../shared/Searchbar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../component/Featured-tours/FeaturedTourList";
import Masonygallery from "../imageGallery/Masonygallery";
import Testimonial from "../component/Testimonial/Testimonial";
import NewsLetter from "../shared/NewsLetter";
import { color } from "highcharts";

const Home = () => {
  // Typejs is used to give animation in text

  return (
    <>
      {/* /hero section start */}
      <section>

        <div className="container-fluid hero">
          <Row >
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={"know before yoy go"} />
                  <img src={worldImg} alt="world" />
                </div>
                <h1 style={{ margin: "50px" }}>
                <h1 className="text-light" style={{ paddingTop: '3rem', margin: 'auto 0', fontWeight: 'normal' }}>
                Unlock the door {' '}
        <span style={{ color: '#06C4C1', fontWeight: 'extra-bold'}}>
          <Typewriter
            words={['To', 'Your', 'New', 'Begining' , 'With' , 'Our' ,'expert', 'real' ,'estate','services..!']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
      </h1>
                    
                  <span style={{ fontWeight: "bold", color: "#06C4C1" }}></span>
                  {/* <span className='highlight'>memories</span> */}
                </h1>
                <p style={{color:"white"}}>
                At ELEGANZA ESTATES, we are dedicated to transforming your real estate aspirations into reality. With a team of seasoned professionals, we provide comprehensive services tailored to meet the unique needs of each client. From finding your dream home to securing lucrative investment properties, our expertise ensures a seamless and stress-free experience. We pride ourselves on our integrity, market knowledge, and commitment to excellence, ensuring that you receive the highest level of service and support. Trust us to guide you through every step of the real estate journey, turning your property dreams into lasting achievements.

                </p>
              </div>
            </Col>
           
            <Searchbar />
          </Row>
        </div>
      </section>

      {/* hero section end */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">We provide...</h5>
              <h2 className="services__title">
                We are committed to providing...
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ===============feature properties sectionstart =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle Subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our features Properties</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* ===============feature tour section end =========== */}
      {/* ================experience section start==========       */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle Subtitle={"Experience"} />
                <h2>
                  Where Luxury Meets Legacy: <br />
                  Discover Your Timeless Home{" "}
                </h2>
                <p>
                  Experience unparalleled luxury in our exquisite properties,
                  meticulously curated to embody sophistication, comfort, and
                  timeless elegance. <br />
                  Discover a world where every detail speaks of opulemce and
                  where your dream home awaits.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Properties Sold</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Client</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years of Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={agent} alt="experience" height="400px" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ================experience section end==========       */}
      {/* ================gallary section start============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Explore our Gallery to Envision your Future Home
              </h2>
            </Col>
            <Col lg="12">
              <Masonygallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ================gallary section end============ */}
      {/* ----------------------tetimonial section start-------------------- */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={"Customer Reviews"} />
              <h2 className="testimonial__title">Reviews and Ratings</h2>
            </Col>
            <Col lg="12">
              <Testimonial />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ----------------------tetimonial section end-------------------- */}
      <NewsLetter />
    </>
  );
};

export default Home;
