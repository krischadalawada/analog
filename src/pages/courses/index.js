import { useEffect } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Footer from '../../../components/Common-A/Footer';
import CourseArea from '../../../components/Courses/CourseArea';
import Header from '../../../components/Home-A/Header';
import HeroCourses from '../../../components/Courses-A/HeroCourses';
import ContactUs from '../../../components/Contact/ContactUs';
import CourseDetails from '../../../components/Courses-A/CourseDetails';


const Courses = () => {

   return (
      <>
       <Head>
         <title>Courses</title>
       </Head>

         <Header />
         <HeroCourses />
         <CourseDetails />
         <ContactUs />
         <Footer />
      </>
   );
};

export default Courses;