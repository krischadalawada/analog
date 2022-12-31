import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
SwiperCore.use([ Pagination]);

const Testimonials = () => {
   // testimonialData
   const testimonialData = [
      {
         id: 1,
         img: 'assets/images/home/testi-2.png',
         name: 'B. Snehapriya',
         year: '2016',
         rank: '907',
         desc: 'I was a student of the 2015 batch. I got AIR 907, expected service is IAS, I owe to you a lot as I could make it in my first attempt while doing my intern itself. After attending economy classes which you taught us I decided to pursue course in economics in international universities after I get into service. The openness and attitude which you indirectly impose on us is greatly helping us in taking UPSC challenge and failure as stepping stone to success. Always grateful to you sir.'
      },
      {
         id: 2,
         img: 'assets/images/home/testi-1.png',
         name: 'Madhavi Sodisetty',
         year: '2016',
         rank: '104',
         desc: 'I am Madhavi Sodisetty. I have secured AIR 104 in UPSC Civil Services Examination 2016. Being a student of Humanities, I have exposure to almost all subjects. Geography is the only subject that was totally alien to me and physical geography being a technical subject appeared quite formidable. The subject was made easy by Priyesh Sir and I am really glad to inform you all that I have secured better marks in General Studies Paper 1 than other GS papers. I thank Priyesh Sir from the bottom of my heart for all his support! I also wish all the very best to the aspirants who are going to appear for the preliminary examination on 18th of June. Believe that you can do it and you will do it!'
      },
      {
         id: 3,
         img: 'assets/images/home/testi-2.png',
         name: 'B. Snehapriya',
         year: '2016',
         rank: '907',
         desc: 'I was a student of the 2015 batch. I got AIR 907, expected service is IAS, I owe to you a lot as I could make it in my first attempt while doing my intern itself. After attending economy classes which you taught us I decided to pursue course in economics in international universities after I get into service. The openness and attitude which you indirectly impose on us is greatly helping us in taking UPSC challenge and failure as stepping stone to success. Always grateful to you sir.'
      },
      {
         id: 4,
         img: 'assets/images/home/testi-1.png',
         name: 'Madhavi Sodisetty',
         year: '2016',
         rank: '104',
         desc: 'I am Madhavi Sodisetty. I have secured AIR 104 in UPSC Civil Services Examination 2016. Being a student of Humanities, I have exposure to almost all subjects. Geography is the only subject that was totally alien to me and physical geography being a technical subject appeared quite formidable. The subject was made easy by Priyesh Sir and I am really glad to inform you all that I have secured better marks in General Studies Paper 1 than other GS papers. I thank Priyesh Sir from the bottom of my heart for all his support! I also wish all the very best to the aspirants who are going to appear for the preliminary examination on 18th of June. Believe that you can do it and you will do it!'
      },
   ]
   return (
      <>
         <section className="testimonial__area pt-80 pb-30 fix">
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
                                    <div className="testimonial__item transition-3 text-left white-bg">
                                       <div className="testimonial__avatar">
                                          <img src={testimonial.img} alt="" />
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