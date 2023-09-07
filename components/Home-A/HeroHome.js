import Link from 'next/link';
import useWindowSize from '../Common-A/Window';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroHome = () => {

   const { width, height } = useWindowSize()

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

   return (
      <>
         <section className="bg-home" style={{ caretColor: 'transparent' }}>
            <div className="align-items-center" style={{paddingTop:'13vh'}}>
            <div className="banner-slider " >
                     <Slider {...settings}>
                     <div>
                       <a href="https://analogeducation.in/contact-us"> <img style={{ width: '100%'}} src="assets/images/home/slide_4.png" alt="Banner 2" /></a>
                        
                     </div>
                     <div>
                        <img style={{ width: '100%'}} src="assets/images/home/Slide_1.jpg" alt="Banner 1" />
                        
                     </div>
                     <div>
                        <img style={{ width: '100%'}} src="assets/images/home/Slide_2.jpg" alt="Banner 2" />
                        
                     </div>
                     
                    
                     
                     </Slider>
                  </div>
            </div>
            <div className="slider__content-2 mt-30 pb-30 container">
                        <h3 className="slider__title-2">Be UPSC Exam-Ready<br /> in less than a Year.</h3>
                        <h3 className="slider__title-sub">New Batches for IAS 2024 <br />starting from 4th Sep 2023</h3>
                        <Link href="/contact-us">
                           <a className="tp-btn-primary" style={{ marginRight: '5%' }}>Register now! <i className="fa-regular fa-arrow-right fa-ri">
                           </i></a>
                        </Link>
                        <Link href="/courses">
                           <a className="tp-btn-primary" style={{ marginTop: width < 400 ? '3%' : 0 }}>New Batches <i className="fa-regular fa-arrow-right fa-ri">
                           </i></a>
                        </Link>
               </div>
         </section>
      </>
   );
};

export default HeroHome;
