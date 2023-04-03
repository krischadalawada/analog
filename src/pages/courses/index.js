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
         <title>Course -  Analog IAS Academy - Best IAS Coaching Centres in Hyderabad.</title>
         <meta name="description" content="ANALOG IAS ACADEMY - We provide the Best UPSC Coaching in Hyderabad with Low Fees Structure for Civil Services Exam Preparation. Join Our Best UPSC/IAS Online Course offering IAS , UPSC and CSE Coaching  and mains exam coaching classes Center  for students in Hyderabad." />
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