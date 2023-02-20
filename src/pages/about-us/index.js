import Head from 'next/head';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Footer from '../../../components/Common-A/Footer';
import AboutArea from '../../../components/Home/AboutArea';
import Header from '../../../components/Home-A/Header';
import HomeCourses from '../../../components/Home/HomeCourses';
import BrandArea from '../../../components/HomeTwo/BrandArea';
import TeamArea from '../../../components/HomeTwo/TeamArea';
import Testimonials from '../../../components/HomeTwo/Testimonials';
import HeroAbout from '../../../components/About-A/HeroAbout';
import Leadership from '../../../components/About-A/Leadership';
import Faculty from '../../../components/About-A/Faculty';
import ContactUs from '../../../components/Contact/ContactUs';
import VideoGrid from '../../../components/About-A/VideoGrid';

const About = () => {
   return (
      <>
      <Head>
        <title>About</title>
      </Head>

         <Header/>
         <HeroAbout />
         <Leadership />
         <hr />
         <Faculty />
         <hr />
         <VideoGrid />
         <ContactUs />
         <Footer/>
      </>
   );
};

export default About;