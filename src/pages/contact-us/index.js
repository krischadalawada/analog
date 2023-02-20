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
            <title>Contact</title>
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