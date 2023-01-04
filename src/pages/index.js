import Head from 'next/head';
import Header from '../../components/Home-A/Header';
import Footer from '../../components/common/Footer';
import HeroHome from '../../components/Home-A/HeroHome';
import Exams from '../../components/Home-A/Exams';
import HeroMain from '../../components/Home-A/HeroMainHome';
import Toppers from '../../components/Home-A/Toppers';
import JoinAnalog from '../../components/Home-A/JoinAnalog';
import EventsHome from '../../components/Home-A/Events';
import Testimonials from '../../components/Home-A/Testimonials';
import ContactUs from '../../components/Contact/ContactUs';
import FAQ from '../../components/Home-A/FAQs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Analog</title>
        <meta name="description" content="IAS Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div style={{ backgroundColor: '#E4F2F8' }}>
        <HeroHome />
        <Exams />
        <HeroMain />
      </div>
      <Toppers />
      <JoinAnalog />
      <EventsHome />
      <Testimonials />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  )
}
