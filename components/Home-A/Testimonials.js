import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { TestimonialsList } from '../../data/TestimonialsData';
import { TestimonialsList } from '../../data/TestimonialsData';
SwiperCore.use([ Pagination]);

const Testimonials = () => {


   return (
      <>
         <section className="testimonial__area pt-80 fix">
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
                     <div className="testimonial__slider">

                        <Swiper
                           spaceBetween={30}
                           slidesPerView={1}
                           className='testimonial__slider'
                           autoplay={{ delay: 3000 }}
                           autoHeight={true}
                           breakpoints={{
                              550: {
                                 slidesPerView: 1,
                              },
                              768: {
                                 slidesPerView: 2,
                              },
                              992: {
                                 slidesPerView: 2,
                              },
                           }}
                        >
                           {
                              TestimonialsList.map(testimonial => {
                                 return <SwiperSlide key={testimonial.id}>
                                    <div className="testimonial__item transition-3 text-left white-bg">
                                       <div className="testimonial__avatar">
                                          <img className='toppers' src={testimonial.img} alt="" />
                                       </div>
                                       <div className="testimonial__avatar-info mb-5">
                                          <h3>{testimonial.name} | {testimonial.year} AIR {testimonial.rank}</h3>
                                          <p>{testimonial.desc}</p>
                                       </div>
                                    </div>
                                 </SwiperSlide>
                              })
                           }
                        </Swiper>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Testimonials;