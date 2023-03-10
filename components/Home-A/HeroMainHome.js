import Link from 'next/link';
import useWindowSize from '../Common-A/Window';

const HeroMain = () => {

   const { width, height } = useWindowSize()

   return (
      <>
         <section className="slider__area d-flex align-items-center">
            <div className="container-lg">
               <div className="row align-items-center">
                  <div className="col-xxl-5 col-lg-5 col-sm-6">
                     <div className="slider__thumb-2 p-relative">
                        <span className="slider__thumb-home">
                           <img style={{ width: '100%' }} src="assets/images/home/HomePagePic2@2x.png" alt="" />
                        </span>
                     </div>
                  </div>
                  <div className="col-xxl-7 col-lg-7 col-sm-6">
                     <div className="slider__content-home" style={{ padding: '10%'}}>
                        <h3 className="slider__title-home">Transforming IAS coaching in Hyderabad</h3>
                        <p className='mt-20 mb-40'>Analog Education Society was established to make quality education, skill development and training available to everyone. 
                           The first initiative was ANALOG IAS INSTITUTE that offers coaching for Civil Service Examination (CSE) aspirants conducted by UPSC. 
                           Since its inception in 2002, ANALOG has earned the reputation of the best IAS coaching centre in Hyderabad by helping several students crack the exam with top ranks. 
                           In a way, the institute has been serving the nation by producing able civil servants.</p>
                        <Link href="/about-us">
                           <a className="tp-btn-primary-b" style={{ marginRight: '5%', marginBottom: width < 460 ? '3%' : 0 }}>Learn More <i className="fa-regular fa-arrow-right fa-ri">
                           </i></a>
                        </Link>
                        <Link href="/contact-us">
                           <a className="tp-btn-secondary">Contact Us <i className="fa-regular fa-arrow-right fa-ri">
                           </i></a>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HeroMain;