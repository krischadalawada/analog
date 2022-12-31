import Link from 'next/link';

const HeroHome = () => {
   return (
      <>
         <section className="slider__area slider__height-2 include-bg d-flex align-items-center bg-home">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-6 col-lg-6">
                     <div className="slider__content-2 mt-30">
                        <h3 className="slider__title-2">Be UPSC <br />exam-ready in <br />less than a year</h3>
                        <Link href="/">
                           <a className="tp-btn-primary" style={{ marginRight: '5%' }}>Register now! <i className="fa-regular fa-arrow-right fa-ri">
                           </i></a>
                        </Link>
                        <Link href="/">
                           <a className="tp-btn-primary">New Batches <i className="fa-regular fa-arrow-right fa-ri">
                           </i></a>
                        </Link>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-lg-6">
                     <div className="slider__thumb-2 p-relative">
                        <div className="slider__shape">
                           <div className="slider__shape-5 row">
                              <a className='upsc pointer'>UPSC Results</a>
                              <a className='tseries pointer'>Test Series</a>
                           </div>
                        </div>
                        <span className="slider__thumb-mask">
                           <img style={{ width: '100%'}} src="assets/images/home/HomeBannerPic_1@2x.png" alt="" />
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HeroHome;