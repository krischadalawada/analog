import Head from 'next/head';
import Footer from '../../../components/Common-A/Footer';
import Header from '../../../components/Home-A/Header';
import ComingSoon from '../../../components/Common-A/ComingSoon';

const Blogs = () => {
   return (
      <>
         <Head>
            <title>Blogs</title>
         </Head>

         <Header />
         <ComingSoon />
         <Footer />
      </>
   );
};

export default Blogs;