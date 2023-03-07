import Link from 'next/link';
import { DownloadsData } from '../../data/DownloadsData';
import { FiDownload } from 'react-icons/fi';
import useWindowSize from '../Common-A/Window';

const DownloadsGrid = () => {

   const { width, height } = useWindowSize()

   return (
      <>
         <section className="slider__area pt-60 pb-60 include-bg d-flex align-items-center">
            <div className="container-lg">
               <div className='col-xl-12 col-md-12 col-12 m-auto'>
                  <div className="row align-items-center">
                     {
                        DownloadsData.map((item, index) =>
                           <div key={index} className='col-xl-4 col-md-4 col-6 m-auto'>
                              <div className="slider__thumb-2 mb-60">
                                 <span className="slider__thumb-home p-relative">
                                    <img style={{ width: '100%' }} src={item.thumbnail} alt="" />
                                    <Link href={item.url}>
                                       <i className='download-btn pointer'>
                                          <FiDownload color='#fff' size={height / 30} />
                                       </i>
                                    </Link>
                                 </span>
                                 <div className='download-title'>
                                    <h3 className='text-center'>{item.category}</h3>
                                 </div>
                              </div>
                           </div>
                        )
                     }
                  </div>
                  <div className="row">
                     <div className="col-xxl-12">
                        <div className="section__title-wrapper mt-30 mb-50 text-center">
                           <Link href="/">
                              <a className="tp-btn-secondary" style={{ marginRight: '5%' }}>Load More <i className="fa-regular fa-arrow-right fa-ri">
                              </i></a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default DownloadsGrid;