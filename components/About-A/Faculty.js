import Link from 'next/link';
import { FacultyData } from '../../data/FacultyData';

const Faculty = () => {

   return (
      <>
         <section className="slider__area pt-60 pb-60 include-bg d-flex align-items-center">
            <div className="container">
               <div className='col-xl-12 col-md-12 col-12 m-auto'>
                  <h3 className='f-50 black text-center'>ANALOG Faculty</h3>
                  <div className="row align-items-center">
                     {
                        FacultyData.map((item, index) => 
                           <div key={index} className='col-xl-6 col-md-6 col-12 m-auto'>
                              <div className="row align-items-center instructor-area mb-60">
                                 <div className="col-xxl-4 col-lg-4 col-sm-6">
                                    <div className="slider__thumb-2 p-relative">
                                       <span className="slider__thumb-home">
                                          <img className="toppers" style={{ width: '100%' }} src={item.image} alt="" />
                                       </span>
                                    </div>
                                 </div>
                                 <div className="col-xxl-8 col-lg-8 col-sm-6">
                                    <div className="pt-60">
                                       <h3 className="instructor-area-title text-left">{item.title}</h3>
                                       <p className='mt-20 instructor-area-sub'>{item.desc}</p>
                                       <p className='mt-20 mb-40 instructor-area-sub'><b>Subjects:</b> {item.subjects}</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )
                     }
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Faculty;