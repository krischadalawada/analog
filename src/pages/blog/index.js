import Head from 'next/head';
import Footer from '../../../components/Common-A/Footer';
import Header from '../../../components/Home-A/Header';
import ComingSoon from '../../../components/Common-A/ComingSoon';
import HeroBlog from '../../../components/Blog-A/HeroBlog';
import BlogArea from '../../../components/Blog-A/BlogArea';

const Blogs = () => {
   return (
      <>
         <Head>
            <title>Blogs</title>
         </Head>

         <Header />
         <HeroBlog />
         <BlogArea />
         <Footer />
      </>
   );
};

export default Blogs;