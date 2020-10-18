import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import { Link } from 'react-scroll';
import Tilt from 'react-tilt';


const About = () => {
  const { about } = useContext(PortfolioContext);
  const { life, karate, foot, jiu, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
      <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
            <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}> 
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={life} />
              </div>
              </Tilt>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {
                    'I was born in England, and have lived in France and Switzerland for prolonged periods of time'}
                </p>
                <p className="about-wrapper__info-text">
                  {
                    'I went to Primary school in Prevessins, France, Secondary School in England, and was awarded my IB diploma in Geneva, Switzerland.'}
                </p>
                <p className="about-wrapper__info-text">
                  { ''}
                </p>
            </div>
          </Fade>
          </Col>
          </Row>
          <Row>
          <Col md={6} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}> 
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={karate} />
              </div>
          </Tilt>
               
            </Fade>
          </Col>
           <Col md={6} sm={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              
            <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {
                    'I am a Physics student at University of Bath'}
                </p>
                <p className="about-wrapper__info-text">
                  {
                    'I am the Captain of the Natural Sciences Football team and the Welfare and Inclusivity Officer of the UBKC (University of Bath Karate Club)'}
                </p>
                <p className="about-wrapper__info-text">
                  { 'I have an interest in coding and can code in languages such as Python, Javascript, HTML and CSS'}
                </p>
            </div>
               
            </Fade>
          </Col>
          </Row>
          <Row>
                <Col md={6} sm={12}>
                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}> 
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={foot} />
              </div>
          </Tilt>
               
            </Fade>  
                </Col>
                <Col md={6} sm={12}>
                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}> 
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={jiu} />
              </div>
          </Tilt>
               
            </Fade>
                </Col>

          </Row>
 
      </Container>
    </section>
  );
};

export default About;
