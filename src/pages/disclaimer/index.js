import Head from 'next/head';
import Footer from '../../../components/Common-A/Footer';
import Header from '../../../components/Home-A/Header';
import ComingSoon from '../../../components/Common-A/ComingSoon';

const Disclaimer = () => {
   return (
      <>
         <Head>
            <title>Disclaimer - Analog IAS Academy</title>
         </Head>

         <Header />
         <ComingSoon />
         <Footer />
      </>
   );
};

export default Disclaimer;