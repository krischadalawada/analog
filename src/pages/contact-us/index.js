import Head from 'next/head';
import BreadCrumb from '../../../components/common/BreadCrumb';
import Footer from '../../../components/Common-A/Footer';
import ContactArea from '../../../components/Contact/ContactArea';
import ContactFooter from '../../../components/Contact/ContactFooter';
import ContactInfoArea from '../../../components/Contact/ContactInfoArea';
import ContactUs from '../../../components/Contact/ContactUs';
import Header from '../../../components/Home-A/Header';

const Contact = () => {
   return (
      <>
         <Head>
            <title>Contact Us- Analog IAS Academy  - Top IAS coaching Center in Hyderabad.</title>
            <meta name="description" content="ANALOG IAS ACADEMY - We provide the Top UPSC Coaching in Hyderabad with Low Fees Structure for Civil Services Exam Preparation. Join Our Best UPSC/IAS Online Course offering IAS, UPSC, and CSE Coaching and mains exam coaching classes Center for students in Hyderabad." />
         </Head>

         <Header />
         <>
            <section className="slider__area pt-200 pb-160 include-bg d-flex align-items-center bg-contact">
               <div className="container">
                  <h3 className='f-70 text-center white mt-40'>Contact Us</h3>
               </div>
            </section>
         </>
         <ContactUs />
         <Footer />
      </>
   );
};

export default Contact;