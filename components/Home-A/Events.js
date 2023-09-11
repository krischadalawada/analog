import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useWindowSize from "../Common-A/Window";
import { CgChevronRight } from 'react-icons/cg';
import Link from 'next/link';
import { Link as ScrollLink } from "react-scroll";

const EventsHome = () => {

   const eventsData = [
      {
         id: 1,
         img: '/assets/images/home/NewEvent.jpg',
         location: '@ Ashok Nagar, ANALOG IAS ACADEMY',
         url: 'https://analogeducation.in/webinar/index.html',
         title: [
            {
               line: 'Free Webinar on IAS/IPS Strategy'
            },
            {
               line: ''
            },
            {
               line: 'Next on 28.08.2023'
            }
            
              
            
         ],
         register: 'Register Now'
      },
      {
         id: 2,
         img: '/assets/images/home/AikyamLogo.svg',
         location: '@ Indira Park, ANALOG IAS ACADEMY',
         url: 'https://analogeducation.in/blog/ANALOG-IAS-Academy-Rejuvenates-the-Spirit-of-Sports-in-Competitive-Coaching',
         title: [
            {
               line: 'AIKYAM'
            },
            {
               line: 'Sports Meet'
            },
            {
               line: ''
            }
             
            
         ],
         register: 'Read Blog'
      },
   ]

   function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      const { width, height } = useWindowSize();
      return (
         <div className="next2" onClick={onClick}>
            <CgChevronRight color="#fff" size={height / 30} />
         </div>
      );
   }

   function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      const { width, height } = useWindowSize();
      return (
         <div className="prev2" onClick={onClick}>
            <CgChevronRight color="#fff" size={height / 30} />
         </div>
      );
   }

   const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1
            }
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               adaptiveHeight: true
            }
         }
      ]
   };

   return (
      <>
         <section className="testimonial__area fix">
            <div className="container-lg bg-home-events pt-30 pb-60">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper-2 mb-40 text-center">
                        <h3 className="section__title-50" style={{ color: '#fff' }}>Events at ANALOG IAS</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="testimonial__slider">

                        <Slider className='' {...settings}>
                           {
                              eventsData.map(event => {
                                 return <div key={event.id} className="testimonial__event transition-3 text-left">
                                    <div className='row'>
                                       <div className='col-xl-5'>
                                          <img src={event.img} alt="" />
                                       </div>
                                       <div className='col-xl-7' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                          <div className="testimonial__text">
                                             {
                                                event.title.map((item, index) =>
                                                   <h4>{item.line}</h4>
                                                )
                                             }
                                             <p></p>
                                          </div>
                                          
                                          <Link href={event.url} target="_blank" rel="noopener noreferrer">
                                             <a className="tp-btn-primary pointer" style={{ marginRight: '5%', width: '80%' }}>{event.register} <i className="fa-regular fa-arrow-right fa-ri">
                                             </i></a>
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                              })
                           }

                        </Slider>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default EventsHome;