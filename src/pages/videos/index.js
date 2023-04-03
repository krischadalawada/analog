import Head from 'next/head';
import Footer from '../../../components/Common-A/Footer';
import Header from '../../../components/Home-A/Header';
import HeroDownloads from '../../../components/Downloads-A/HeroDownloads';
import ContactUs from '../../../components/Contact/ContactUs';
import VideoGrid from '../../../components/About-A/VideoGrid';

const Videos = () => {
   return (
      <>
      <Head>
        <title>Videos - Analog IAS Academy</title>
      </Head>

         <Header/>
         <HeroDownloads title="Videos" />
         <VideoGrid />
         <ContactUs />
         <Footer/>
      </>
   );
};

export default Videos;