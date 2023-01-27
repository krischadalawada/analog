import Link from 'next/link';

const Exams = () => {
   const featuresData = [
      {
         id: 1,
         icon_img: 'assets/images/home/CS.png',
         title: 'CIVIL SERVICES',
      },
      {
         id: 2,
         icon_img: 'assets/images/home/APPSC.png',
         title: 'APPSC',
      },
      {
         id: 3,
         icon_img: 'assets/images/home/TSPSC.png',
         title: 'TSPSC',
      },
      // {
      //    id: 4,
      //    icon_img: 'assets/images/home/KPSC.png',
      //    title: 'KPSC-KAS',
      // },
   ]
   return (
      <>
         <section className="features__area pb-60">
            <div className="container">
               <div className="features__inner p-relative z-index-1 white-bg">
                  <div className="row">
                     {
                        featuresData.map(feature => {
                           return <div key={feature.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                              <div className="features__item white-bg">
                                 <div className="" style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <img className='logos' src={feature.icon_img} />
                                    <h3 className="features__title">
                                       <Link href="/about">
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

export default Exams;