import Link from 'next/link';
import { VideosData } from '../../data/VideosData';
import { BsPlayCircle } from 'react-icons/bs';
import ReactPlayer from "react-player/lazy";

const VideoGrid = () => {

   return (
      <>
         <section className="slider__area pt-60 pb-60 include-bg d-flex align-items-center">
            <div className="container-lg">
               <div className='col-xl-12 col-md-12 col-12 m-auto'>
                  <div className="row align-items-center">
                     {
                        VideosData.map((item, index) =>
                           <div key={index} className='col-xl-6 col-md-6 col-12 m-auto'>
                              <div className="slider__thumb-2 mb-60">
                                 <span className="slider__thumb-home player p-relative">
                                    <ReactPlayer
                                       className='react-player'
                                       url={item.url}
                                       width='100%'
                                       height='100%'
                                       controls={true}
                                    />
                                    {/* <i className='play-btn pointer'>
                                       <BsPlayCircle color='#011627' width={20} size={120} />
                                    </i> */}
                                 </span>
                                 <div className='video-title'>
                                    <h3 className='text-center'>{item.title}</h3>
                                 </div>
                              </div>
                           </div>
                        )
                     }
                  </div>
                  <div className="row">
                     <div className="col-xxl-12">
                        <div className="section__title-wrapper mt-30 mb-50 text-center">
                           <Link href="https://www.youtube.com/@analogiasacademy2081/videos">
                              <a className="tp-btn-secondary" rel='noopener noreferrer' target="_blank" style={{ marginRight: '5%' }}>Load More <i className="fa-regular fa-arrow-right fa-ri">
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

export default VideoGrid;