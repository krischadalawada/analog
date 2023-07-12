import Head from 'next/head';
import Header from '../../components/Home-A/Header';
import Footer from '../../components/Common-A/Footer';
import HeroHome from '../../components/Home-A/HeroHome';
import Exams from '../../components/Home-A/Exams';
import HeroMain from '../../components/Home-A/HeroMainHome';
import Toppers from '../../components/Home-A/Toppers';
import JoinAnalog from '../../components/Home-A/JoinAnalog';
import EventsHome from '../../components/Home-A/Events';
import Testimonials from '../../components/Home-A/Testimonials';
import ContactUs from '../../components/Contact/ContactUs';
import Awards from '../../components/Home-A/Awards';
import ImagePopup from '../../components/popup/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Best IAS Coaching in Hyderabad | UPSC Coaching | ANALOG IAS ACADEMY In Hyderabad</title>
        <meta name="description" content="Analog IAS Academy in Hyderabad is the Best IAS Coaching Center in Hyderabad. Join UPSC Coaching Institute Today. We Are Leading Civils Coaching Centres in Hyderabad, Helping Several Students Crack The Exam With Top Ranks." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <div style={{ backgroundColor: '#E4F2F8' }}>
       <ImagePopup/>
        <HeroHome />
        <Awards />
        <Exams />
        <HeroMain />
      </div>
      <Toppers />
      <JoinAnalog />
      <EventsHome />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  )
}
