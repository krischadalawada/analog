import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialsList } from '../../data/TestimonialsData';
import Slider from "react-slick";
import useWindowSize from "../Common-A/Window";
import { CgChevronRight } from 'react-icons/cg';

const Testimonials = () => {

   const [seeMore, setSeeMore] = useState(false)

   const onSeeMore = () => {
      setSeeMore(!seeMore)
   }

   function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      const { width, height } = useWindowSize();
      return (
         <div className="next" onClick={onClick}>
            <CgChevronRight color="#fff" size={height / 30} />
         </div>
      );
   }

   function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      const { width, height } = useWindowSize();
      return (
         <div className="prev" onClick={onClick}>
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
               slidesToShow: 2,
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
         <section className="testimonial__area pt-80 pb-60 fix">
            <div className="container-lg">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper-2 mb-40 text-center">
                        <h3 className="section__title-2">Testimonials</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     <div className='testimonial__slider'>
                        <Slider className='testimonial__container' {...settings}>
                           {
                              TestimonialsList.map(testimonial =>
                                 <div key={testimonial.id} className="testimonial__item_cont">
                                    <div className="testimonial__item transition-3 text-left">
                                       <div className="testimonial__avatar">
                                          <img className='toppers' src={testimonial.img} alt="" />
                                       </div>
                                       <div className="testimonial__avatar-info mb-5">
                                          <h3>{testimonial.name} | {testimonial.year} AIR {testimonial.rank}</h3>
                                          <p>{testimonial.desc.length > 500 && !seeMore ? testimonial.desc.substring(0, 420) + "..." : testimonial.desc}<a className='pointer' onClick={() => onSeeMore()}><p style={{ color: '#333996', textDecorationLine: 'underline' }}>{testimonial.desc.length > 500 && !seeMore ? "see more" : testimonial.desc.length > 500 && seeMore ? "see less" : ""}</p></a></p>
                                       </div>
                                    </div>
                                 </div>
                              )
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

export default Testimonials;