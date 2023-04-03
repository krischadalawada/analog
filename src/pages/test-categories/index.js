import Head from 'next/head';
import Footer from '../../../components/Common-A/Footer';
import Header from '../../../components/Home-A/Header';
import ComingSoon from '../../../components/Common-A/ComingSoon';

const TestCategories = () => {
   return (
      <>
         <Head>
            <title>Test Categories - Analog IAS Academy</title>
         </Head>

         <Header />
         <ComingSoon />
         <Footer />
      </>
   );
};

export default TestCategories;