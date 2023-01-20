import Link from 'next/link';
import { TopperList } from '../../data/ToppersData';

const ToppersGrid = () => {

   const Toppers = TopperList.slice(0,4)

   return (
      <>
         <section className="research__area research__border pt-120 pb-60 p-relative z-index-1">
            <div className="container-lg">
               {/* <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-50 text-center">
                        <h2 className="section__title section__title-50">Toppers Choose the top IAS Coaching in Hyderabad</h2>
                     </div>
                  </div>
               </div> */}
               <div className="row">
                  {
                     TopperList.map(item => {
                        return <div key={item.title} className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-6">
                           <div className={`research__item text-left mb-30 transition-3`}>
                              <div className="research__thumb mb-35">
                                 <img className='toppers' src={item.img.length > 0 ? (item.path + item.img) : "assets/images/no-image.png"} alt="" />
                              </div>
                              <div className="research__content">
                                 <h3 className="research__title-topper">{item.title}</h3>
                                 <p className="t-rank">AIR {item.rank}</p>
                                 <div className="row">
                                    <div className="col-5">
                                       <p className="t-year">Year {item.year}</p>
                                    </div>
                                    <div className="col-7">
                                       <p className="t-ht">HT No. {item.ht_no}</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     })
                  }
               </div>
            </div>
         </section>
      </>
   );
};

export default ToppersGrid;