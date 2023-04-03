import Link from 'next/link';

const HeroCourses = () => {

   return (
      <>
         <section className="slider__area pt-160 include-bg d-flex align-items-center bg-courses">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-5 col-lg-5 col-sm-6">
                     <div className="slider__thumb-2 p-relative">
                        <span className="slider__thumb-home">
                           <img style={{ width: '100%' }} src="assets/images/courses/CoursesBanner_pic@2x.png" alt="Analog IAS Academy course banner" />
                        </span>
                     </div>
                  </div>
                  <div className="col-xxl-7 col-lg-7 col-sm-6">
                     <div className="slider__content-courses" style={{ padding: '10%' }}>
                        <h3 className="slider__title-courses">CIVIL SERVICES</h3>
                        <p className='mt-40 mb-40'>The Civil Services Examination (CSE) is one of the toughest competitive examinations in India,
                           conducted by the Union Public Service Commission (UPSC). It is conducted in two phases namely - UPSC Prelims and UPSC Mains.
                           The Preliminary examination consists of two objective-type papers (General Studies and Aptitude Test - CSAT).
                           The Mains examination consists of 9 papers of conventional (descriptive) type.
                           The last phase of the examination includes a Personality Test (Interview).
                           Once you enroll at ANALOG IAS, we stand by you all along your preparation and UPSC journey from the start to finish.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HeroCourses;