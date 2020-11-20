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
                <Col lg={4} sm={6}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div>
                      <h3 class="video-wrapper__text-title">Sicily</h3>
                      <div class="video-wrapper">
                        <p>
                            Year 13 trip with Institut International de Lancy. Most cherished vacation with friends and I hope this video reflects that.
                        </p>
                        
                      </div>
                  
                     
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={18}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="video-wrapper__image">
                    <Youtube
                      videoSrcURL="https://www.youtube.com/embed/ZIrk8L2jOaU"
                      videoTitle="Official Music Video on YouTube"
                    />
                        
                    
                       
                      
                    </div>
                  </Fade>
                </Col>
              </Row>
              <Row>
              <Col lg={8} sm={18}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="video-wrapper__image">
                    <Youtube
                      videoSrcURL="https://www.youtube.com/embed/kQjfrPqIqY0"
                      videoTitle="Official Music Video on YouTube"
                    />
                        
                        
                       
                      
                    </div>
                  </Fade>
                </Col>
                <Col lg={4} sm={6}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div>
                      <h3 class="video-wrapper__text-title">New York</h3>
                      <div class="video-wrapper">
                        <p>
                            Summer of 2019. Trip with the fam
                        </p>
                        
                      </div>
                  
                     
                    </div>
                  </Fade>
                </Col>
                
              </Row>
            
        </div>
      </Container>
  
      );
};

export default Videos;
