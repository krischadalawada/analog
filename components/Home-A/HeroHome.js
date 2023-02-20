import Link from 'next/link';
import useWindowSize from '../Common-A/Window';

const HeroHome = () => {

   const { width, height } = useWindowSize()

   return (
      <>
         <section className="slider__area slider__height-2 include-bg d-flex align-items-center bg-home" style={{ caretColor: 'transparent' }}>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-6 col-lg-6">
                     <div className="slider__content-2 mt-30">
                        <h3 className="slider__title-2">Be UPSC Exam-Ready in less than a Year. <br />New Batches for IAS 2024 starting from 11th March 2023”</h3>
                        <Link href="/contact-us">
                           <a className="tp-btn-primary" style={{ marginRight: '5%' }}>Register now! <i className="fa-regular fa-arrow-right fa-ri">
                           </i></a>
                        </Link>
                        <Link href="/courses">
                           <a className="tp-btn-primary" style={{ marginTop: width < 400 ? '3%' : 0 }}>New Batches <i className="fa-regular fa-arrow-right fa-ri">
                           </i></a>
                        </Link>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-lg-6">
                     <div className="slider__thumb-2 p-relative">
                        <span className="slider__thumb-mask">
                           <img style={{ width: '100%'}} src="assets/images/home/HomeBannerPic_1@2x.png" alt="" />
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HeroHome;