
import React, { useState } from 'react';
import Head from 'next/head';
import Footer from '../../../components/Common-A/Footer';
import Header from '../../../components/Home-A/Header';
import ContactUs from '../../../components/Contact/ContactUs';
import HeroDownloads from '../../../components/Downloads-A/HeroDownloads';
import DownloadTabs from '../../../components/Downloads-A/DownloadTabs';
import DownloadsGrid from '../../../components/Downloads-A/DownloadsGrid';
import Link from 'next/link';

const Downloads = () => {

   const [selectedTab, setTab] = useState('VIEW ALL')

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
         <Head>
            <title>Downloads</title>
         </Head>

         <Header />
         <HeroDownloads title="DOWNLOADS" />
         <>
            <section className="features__area pb-60">
               <div className="container-lg">
                  <div className="features__inner p-relative z-index-1 white-bg">
                     <div className="row download-menu">
                        {
                           featuresData.map(feature => {
                              return <div onClick={() => setTab(feature.title)} key={feature.id} className={feature.id === 1 ? "col-md-3 col-12" : feature.id === 3 ? "col-md-3 col-12" : "col-md-2 col-12"}>
                                 <div className="features__item white-bg" style={{ height: '100%' }}>
                                    <div className="" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                       <h3 className="features__title">
                                          <a>{feature.title}</a>
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
         <DownloadsGrid filter={selectedTab} />
         <ContactUs />
         <Footer />
      </>
   );
};

export default Downloads;