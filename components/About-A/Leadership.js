import Link from 'next/link';

const Leadership = () => {

   return (
      <>
         <section className="slider__area pt-60 pb-60 include-bg d-flex align-items-center">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-7 col-lg-7 col-sm-6">
                     <div className="slider__content-about" style={{ padding: '10%' }}>
                        <p className='mb-40 black'>ANALOG is guided by the able leadership of Mr. Srikanth Vinnakota, the director of the institute.
                           Mr. Srikanth holds an M.Tech in Mechanical Engineering and was qualified for Civil Services interview thrice with Mathematics and Psychology as optionals subjects.
                           As he says, the institute is on a mission to bring out the dormant talents and skills in the students and the vision is to achieve the mission by providing right guidance that benefits the students.
                           He believes that there is a great potential in everyone and the only thing they need is ‘wings’.
                           ANALOG is where they get those wings of wisdom. That is how the institute walks with aspirants on the road to achievement.</p>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-lg-5 col-sm-6">
                     <div className="p-relative mt-40">
                        <span className="slider__thumb-home">
                           <img style={{ width: '100%' }} src="assets/images/about/Srikanth@2x.png" alt="" />
                        </span>
                        <div className='slider__thumb-about'>
                           <div>
                              <h3>Mr. Srikanth Vinnakota</h3>
                              <p>Director.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Leadership;