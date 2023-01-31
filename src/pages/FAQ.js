import Head from 'next/head';
import Footer from '../../components/Common-A/Footer';
import Header from '../../components/Home-A/Header';
import HeroAbout from '../../components/About-A/HeroAbout';
import Leadership from '../../components/About-A/Leadership';
import Faculty from '../../components/About-A/Faculty';
import ContactUs from '../../components/Contact/ContactUs';
import VideoGrid from '../../components/About-A/VideoGrid';
import HeroToppers from '../../components/Toppers-A/HeroToppers';
import ToppersGrid from '../../components/Toppers-A/ToppersGrid';
import FAQs from '../../components/FAQs-A/FAQs';
import HeroFAQ from '../../components/FAQs-A/HeroFAQ';

const FAQPage = () => {
    return (
        <>
            <Head>
                <title>FAQs</title>
            </Head>

            <Header />
            <HeroFAQ />
            <FAQs />
            <ContactUs />
            <Footer />
        </>
    );
};

export default FAQPage;