import Head from 'next/head';
import Footer from '../../../components/Common-A/Footer';
import Header from '../../../components/Home-A/Header';
import ContactUs from '../../../components/Contact/ContactUs';
import HeroDownloads from '../../../components/Downloads-A/HeroDownloads';
import DownloadTabs from '../../../components/Downloads-A/DownloadTabs';
import DownloadsGrid from '../../../components/Downloads-A/DownloadsGrid';

const Downloads = () => {
   return (
      <>
      <Head>
        <title>Downloads</title>
      </Head>

         <Header/>
         <HeroDownloads title="DOWNLOADS" />
         <DownloadTabs />
         <DownloadsGrid />
         <ContactUs />
         <Footer/>
      </>
   );
};

export default Downloads;