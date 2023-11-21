import Link from 'next/link';
import { TopperList } from '../../data/ToppersData';

const Toppers = () => {

   const Toppers = TopperList.slice(0, 4)

   return (
      <>
         <section className="research__area research__border pt-60 pb-30 p-relative z-index-1">
            <div className="container-lg">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-50 text-center">
                        <h2 className="section__title section__title-50">Toppers Choose the top IAS Coaching</h2>
                        <p>Achieve your IAS dream with our comprehensive General Studies course, personalized mentorship, focused test series & current affairs and interview guidance from the best panel. Our students who have enrolled in one or multiple program(s)...</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     Toppers.map(item => {
                        return <div key={item.title} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                           <div className={`research__item text-left mb-30 transition-3`}>
                              <div className="research__thumb mb-35">
                                 <img className='toppers' src={item.img.length > 0 ? (item.path + item.img) : "assets/images/no-image.png"} alt="" />
                              </div>
                              <div className="research__content">
                                 <h3 className="research__title-topper">{item.title}</h3>
                                 <div className="row">
                                    <div className="col-6">
                                       <p className="t-rank">AIR {item.rank}</p>
                                    </div>
                                    <div className="col-6">
                                       <p className="t-year">Year {item.year}</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     })
                  }
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mt-30 mb-50 text-center">
                        <Link href="/civil-results">
                           <a className="tp-btn-primary-b" style={{ marginRight: '5%' }}>View More <i className="fa-regular fa-arrow-right fa-ri">
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

export default Toppers;