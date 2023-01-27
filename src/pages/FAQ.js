import Head from 'next/head';
import Footer from '../../components/common/Footer';
import Header from '../../components/Home-A/Header';
import HeroAbout from '../../components/About-A/HeroAbout';
import Leadership from '../../components/About-A/Leadership';
import Faculty from '../../components/About-A/Faculty';
import ContactUs from '../../components/Contact/ContactUs';
import VideoGrid from '../../components/About-A/VideoGrid';
import HeroToppers from '../../components/Toppers-A/HeroToppers';
import ToppersGrid from '../../components/Toppers-A/ToppersGrid';
import FAQs from '../../components/FAQs-A/FAQs';

const FAQPage = () => {
    return (
        <>
            <Head>
                <title>FAQ</title>
            </Head>

            <Header />
            <HeroToppers />
            <FAQs />
            <ContactUs />
            <Footer />
        </>
    );
};

export default FAQPage;