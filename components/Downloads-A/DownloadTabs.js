import Link from 'next/link';

const DownloadTabs = () => {
   const featuresData = [
      {
         id: 1,
         title: 'TARGET 2022 DAILY TEST SERIES',
      },
      {
         id: 2,
         title: 'SAMIKSHA',
      },
      {
         id: 3,
         title: 'NEWS TODAY',
      },
      {
         id: 4,
         title: 'UPSC',
      },
      {
         id: 5,
         title: 'VIEW ALL',
      },
   ]
   return (
      <>
         <section className="features__area pb-60">
            <div className="container-lg">
               <div className="features__inner p-relative z-index-1 white-bg">
                  <div className="row download-menu">
                     {
                        featuresData.map(feature => {
                           return <div key={feature.id} className={ feature.id === 1 ? "col-md-3 col-12" : feature.id === 3 ? "col-md-3 col-12" : "col-md-2 col-12" }>
                              <div className="features__item white-bg" style={{ height: '100%'}}>
                                 <div className="" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <h3 className="features__title">
                                       <Link href="#">
                                          <a>{feature.title}</a>
                                       </Link>
                                    </h3>
                                 </div>
                              </div>
                           </div>
                        })
                     }

                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default DownloadTabs;