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
        <title>About Us -  Analog IAS Academy - Best UPSC Coaching Centre in Hyderabad For IAS Coaching In Hyderabad.</title>
        <meta name="description" content="ANALOG IAS ACADEMY - Welcome to the Best AS, UPSC, and CSE Coaching in Hyderabad with Low Fees Structure for Civil Services Exam Preparation. Join Our Best UPSC/IAS Online Course offering IAS, UPSC, and CSE Coaching and mains exam coaching classes Center for students in Hyderabad." />
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