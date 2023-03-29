import Link from 'next/link';
import useWindowSize from '../Common-A/Window';

const Awards = () => {

   const { width, height } = useWindowSize()

   return (
      <>
         <section className="slider__area include-bg d-flex align-items-center bg-awards" style={{ caretColor: 'transparent' }}>
            <div className="row align-items-center">
               <div className="col-xxl-6 col-lg-6">
                  <div className="slider__content-2" style={{ textAlign: 'left', padding: '10%' }}>
                     <h3 className="slider__title-2">India's Leading Brand Award, 2023 (Rising Star)</h3>
                     <h3 className="slider__title-3"><b>Asian Brand & Leadershp Conclave</b>, Dubai</h3>
                     <h3 className="slider__title-sub">For excellence in training sector & helping to enrich the education sector in India.</h3>
                  </div>
               </div>
               <div className="col-xxl-6 col-lg-6">
                  <div style={{ borderWidth: 30, borderStyle: 'solid', borderColor: '#000' }}>
                     <img style={{ width: '100%' }} src="assets/images/home/Award-Analog.jpg" alt="" />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Awards;
