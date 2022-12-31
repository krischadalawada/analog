import Link from 'next/link';

const Toppers = () => {
   // toppers data
   const toppersData = [
      {
         id: 1,
         img: 'assets/images/toppers/topper-1.png',
         title: 'Ishita Rathi',
         rank: '008',
         year: '2016',
         ht_no: '3535556'
      },
      {
         id: 2,
         img: 'assets/images/toppers/topper-2.png',
         title: 'Yasharth Shekhar',
         rank: '012',
         year: '2016',
         ht_no: '3535556'
      },
      {
         id: 3,
         img: 'assets/images/toppers/topper-3.png',
         title: 'C. Yashwanth Reddy',
         rank: '015',
         year: '2016',
         ht_no: '3535556'
      },
      {
         id: 4,
         img: 'assets/images/toppers/topper-4.png',
         title: 'Pusapati Sahitya',
         rank: '024',
         year: '2016',
         ht_no: '3535556'
      },
   ]
   return (
      <>
         <section className="research__area research__border pt-60 pb-30 p-relative z-index-1">
            <div className="container-lg">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mb-50 text-center">
                        <h2 className="section__title section__title-50">Toppers Choose the top IAS Coaching in Hyderabad</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     toppersData.map(item => {
                        return <div key={item.id} className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                           <div className={`research__item text-left mb-30 transition-3`}>
                              <div className="research__thumb mb-35">
                                 <img src={item.img} alt="" />
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
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper mt-30 mb-50 text-center">
                        <Link href="/">
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