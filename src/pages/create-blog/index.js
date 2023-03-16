import Head from 'next/head';
import Footer from '../../../components/Common-A/Footer';
import Header from '../../../components/Home-A/Header';
import ComingSoon from '../../../components/Common-A/ComingSoon';
import HeroCreate from '../../../components/Blog-A/HeroCreate';
import BlogArea from '../../../components/Blog-A/BlogArea';
import TipTapEditor from '../../../components/Blog-A/TipTapEditor';

const Blogs = () => {
   return (
      <>
         <Head>
            <title>Create Blog</title>
         </Head>

         <Header />
         <HeroCreate />
         <TipTapEditor />
         <Footer />
      </>
   );
};

export default Blogs;