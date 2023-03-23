import { useEffect } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Footer from '../../../components/Common-A/Footer';
import CourseArea from '../../../components/Courses/CourseArea';
import Header from '../../../components/Home-A/Header';
import HeroDownloads from '../../../components/Downloads-A/HeroDownloads';
import ContactUs from '../../../components/Contact/ContactUs';
import TestDetails from '../../../components/TestSeries-A/TestDetails';


const TestSeries = () => {

   return (
      <>
       <Head>
         <title>Test Series</title>
       </Head>

         <Header />
         <HeroDownloads title="TEST SERIES" />
         <TestDetails />
         <ContactUs />
         <Footer />
      </>
   );
};

export default TestSeries;