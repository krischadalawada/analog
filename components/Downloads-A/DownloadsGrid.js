import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { DownloadsData } from '../../data/DownloadsData';
import { FiDownload } from 'react-icons/fi';
import useWindowSize from '../Common-A/Window';

const DownloadsGrid = (props) => {

   const { width, height } = useWindowSize()
   const [categories, setCategories] = useState()

   useEffect(() => {

      if (props.filter && props.filter === 'VIEW ALL') {
         var DownloadList = DownloadsData.slice(0, 9)
      } else if (props.filter && props.filter === 'TARGET 2023 DAILY TEST SERIES') {
         var DownloadList = DownloadsData.filter(x => x.category === 'Target')
      } else if (props.filter && props.filter === 'SAMIKSHA') {
         var DownloadList = DownloadsData.filter(x => x.category === 'Samiksha')
      } else if (props.filter && props.filter === 'NEWS TODAY') {
         var DownloadList = DownloadsData.filter(x => x.category === 'News')
      } else if (props.filter && props.filter === 'UPSC') {
         var DownloadList = DownloadsData.filter(x => x.category === 'UPSC')
      }
      setCategories(DownloadList)

   }, [DownloadsData, props.filter])


   const onLoadMore = () => {
      setCategories(DownloadsData)
   }

   return (
      <>
         <section className="slider__area pt-60 pb-60 include-bg d-flex align-items-center">
            <div className="container-lg">
               <div className='col-xl-12 col-md-12 col-12 m-auto'>
                  <div className="row align-items-center">
                     {
                        categories && categories.length > 0 && categories.map((item, index) =>
                           <div key={index} className='col-xl-4 col-md-4 col-sm-6 col-12 m-auto'>
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
                                    <h3 className='text-center'>{item.title}</h3>
                                 </div>
                              </div>
                           </div>
                        )
                     }
                  </div>
                  {
                     categories && categories.length > 0 && props.filter && props.filter === 'VIEW ALL' && DownloadsData.length !== categories.length ?
                        <div className="row">
                           <div className="col-xxl-12">
                              <div className="section__title-wrapper mt-30 mb-50 text-center">
                                 <a onClick={() => onLoadMore()} className="tp-btn-secondary pointer" style={{ marginRight: '5%' }}>Load More <i className="fa-regular fa-arrow-right fa-ri">
                                 </i></a>
                              </div>
                           </div>
                        </div>
                        :
                        <></>
                  }
               </div>
            </div>
         </section>
      </>
   );
};

export default DownloadsGrid;