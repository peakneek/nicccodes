import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import VideoImg from '../Image/VideoImg';
import Youtube from '../Youtube.js'


const Videos = () => {
  const {videos} = useContext(PortfolioContext);
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

   
      <Container>
        <div id="videos" >
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <Title title="videos" />
            </Fade>
              <Row>
                <Col>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div>
                      <h3 class="video-wrapper__info-text--important">Sicily</h3>
                  
                     
                    </div>
                  </Fade>
                  </Col>
                  </Row>
                <Row>
                <Col>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div class="video-wrapper__image">
                    <p>
                      <Youtube
                      videoSrcURL="https://www.youtube.com/embed/ZIrk8L2jOaU"
                      videoTitle="Official Music Video on YouTube"
                    />
                    </p>
                    </div>
                    
                      
                    
                  </Fade>
                  </Col>
                  </Row>
                  <Row>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                  <div class="video-wrapper">
                        <p>
                            Year 13 trip with Institut International de Lancy. Most cherished vacation with friends and I hope this video reflects that.
                        </p>
                        
                      </div>
                      </Fade>
                  </Row>
      
                  <Row>
                  <Col>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div>
                      <h3 class="video-wrapper__info-text--important">New York</h3>
                      
                     
                    </div>
                  </Fade>
               
                  </Col>
              </Row>
            
              <Row>
              <Col>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div class="video-wrapper__image">
                    <Youtube
                      videoSrcURL="https://www.youtube.com/embed/kQjfrPqIqY0"
                      videoTitle="Official Music Video on YouTube"
                    />
                       
                       
                      
                    </div>
                     
                  
                  
                  </Fade>
                  </Col>
                </Row>
            <Row>
            <Col>
                <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                <div class="video-wrapper">
                        <p>
                            Family holiday in New York after graduating IB, and my older brother James graduating from University.
                        </p>
               </div>
                      </Fade>
                      </Col>
                </Row>
               
                
                
                
                
                
                
                <Row>
                <Col>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div>
                      <h3 class="video-wrapper__info-text--important">Vietnam</h3>
                  
                     
                    </div>
                  </Fade>
                  </Col>
                  </Row>
                <Row>
                <Col>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div class="video-wrapper__image">
                    <p>
                      <Youtube
                      videoSrcURL="https://www.youtube.com/embed/MWOWMb_0c7k"
                      videoTitle="Official Music Video on YouTube"
                    />
                    </p>
                    </div>
                    
                      
                    
                  </Fade>
                  </Col>
                  </Row>
                  <Row>
                    <Col>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                  <div class="video-wrapper">
                        <p>
                        một chuyến đi vui vẻ
                        </p>
                        
                      </div>
                      </Fade>
                      </Col>
                  </Row>
                  









                   
                <Row>
                <Col>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div>
                      <h3 class="video-wrapper__info-text--important">Jiu Jitsu Randoris - Fight 2</h3>
                  
                     
                    </div>
                  </Fade>
                  </Col>
                  </Row>
                <Row>
                <Col>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div class="video-wrapper__image">
                    <p>
                      <Youtube
                      videoSrcURL="https://www.youtube.com/embed/y1xf8maSE-E"
                      videoTitle="Official Music Video on YouTube"
                    />
                    </p>
                    </div>
                    
                      
                    
                  </Fade>
                  </Col>
                  </Row>
                  <Row>
                    <Col>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                  <div class="video-wrapper">
                        <p>
                          Semi-final Randoris ground fighting representing the University of Bath Jiu Jitsu Club
                        </p>
                        
                      </div>
                      </Fade>
                      </Col>
                  </Row>






                  <Row>
                <Col>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div>
                      <h3 class="video-wrapper__info-text--important">Jiu Jitsu Randoris - Fight 1</h3>
                  
                     
                    </div>
                  </Fade>
                  </Col>
                  </Row>
                <Row>
                <Col>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div class="video-wrapper__image">
                    <p>
                      <Youtube
                      videoSrcURL="https://www.youtube.com/embed/bPLvP_Mzc9g"
                      videoTitle="Official Music Video on YouTube"
                    />
                    </p>
                    </div>
                    
                      
                    
                  </Fade>
                  </Col>
                  </Row>
                  <Row>
                    <Col>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                  <div class="video-wrapper">
                        <p>
                          Quarter-final Randoris ground fighting representing the University of Bath Jiu Jitsu Club
                        </p>
                        
                      </div>
                      </Fade>
                      </Col>
                  </Row>
              
              
        </div>
      </Container>
  
      );
};

export default Videos;
