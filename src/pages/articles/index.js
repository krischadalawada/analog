import Head from 'next/head';
import Footer from '../../../components/Common-A/Footer';
import Header from '../../../components/Home-A/Header';
import ComingSoon from '../../../components/Common-A/ComingSoon';

const Articles = () => {
   return (
      <>
         <Head>
            <title>Articles</title>
         </Head>

         <Header />
         <ComingSoon />
         <Footer />
      </>
   );
};

export default Articles;