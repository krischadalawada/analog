import Link from 'next/link';

const HeroAbout = () => {

   return (
      <>
         <section className="slider__area pt-160 include-bg d-flex align-items-center bg-about">
            <div className="container">
               <div className="row align-items-center mb-40">
                  <div className="col-xxl-5 col-lg-5 col-sm-6">
                     <div className="slider__thumb-2 p-relative">
                        <span className="slider__thumb-home">
                           <img style={{ width: '100%' }} src="assets/images/about/AboutBannerPic@2x.png" alt="Analog IAS Academy About-us banner" />
                        </span>
                     </div>
                  </div>
                  <div className="col-xxl-7 col-lg-7 col-sm-6">
                     <div className="slider__content-about" style={{ padding: '10%' }}>
                        <p className='mt-40 mb-40'>Competitive exams do not need you to be intelligent or genius, but a hard worker who performs consistently. 
                        To help you stay consistent with your preparation and guide you to perform well in the examination, 
                        ANALOG offers comprehensive courses for various competitive exams that get you equipped with the right knowledge and skill to crack the tests.</p>
                        <ul>
                           <li>11 Courses</li>
                           <li>25+ Faculty Members</li>
                           <li>15000+ Students Benefited</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HeroAbout;