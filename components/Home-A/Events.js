import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import Link from 'next/link';
SwiperCore.use([Pagination]);

const EventsHome = () => {
   // testimonialData
   const testimonialData = [
      {
         id: 1,
         img: 'assets/images/home/Event-1.png',
         location: '@ Indira Park, ANALOG IAS ACADEMY',
         title: 'Free workshop for UPSC candidates CSE-2022'
      },
      {
         id: 2,
         img: 'assets/images/home/Event-2.png',
         location: '@ Indira Park, ANALOG IAS ACADEMY',
         title: 'Free workshop for UPSC candidates CSE-2022'
      },
      {
         id: 3,
         img: 'assets/images/home/Event-1.png',
         location: '@ Indira Park, ANALOG IAS ACADEMY',
         title: 'Free workshop for UPSC candidates CSE-2022'
      },
      {
         id: 4,
         img: 'assets/images/home/Event-2.png',
         location: '@ Indira Park, ANALOG IAS ACADEMY',
         title: 'Free workshop for UPSC candidates CSE-2022'
      },
   ]
   return (
      <>
         <section className="testimonial__area fix">
            <div className="container-lg bg-home-events pt-30 pb-60">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper-2 mb-40 text-center">
                        <h3 className="section__title-50" style={{ color: '#fff' }}>Events at Analog</h3>
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
                           loop
                           breakpoints={{
                              550: {
                                 slidesPerView: 1,
                              },
                              768: {
                                 slidesPerView: 1,
                              },
                              992: {
                                 slidesPerView: 2,
                              },
                           }}
                        >

                           {
                              testimonialData.map(testimonial => {
                                 return <SwiperSlide key={testimonial.id}>
                                    <div className="testimonial__event transition-3 text-left">
                                       <div className='row'>
                                          <div className='col-5'>
                                             <img src={testimonial.img} alt="" />
                                          </div>
                                          <div className='col-7' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                             <div className="testimonial__text">
                                                <h4>{testimonial.title}</h4>
                                                <p>{testimonial.location}</p>
                                             </div>
                                             <Link href="/">
                                                <a className="tp-btn-primary" style={{ marginRight: '5%', width: '80%' }}>Learn more <i className="fa-regular fa-arrow-right fa-ri">
                                                </i></a>
                                             </Link>
                                          </div>
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

export default EventsHome;