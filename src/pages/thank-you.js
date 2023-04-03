import Head from 'next/head';
import Footer from '../../components/Common-A/Footer';
import ContactUs from '../../components/Contact/ContactUs';
import Header from '../../components/Home-A/Header';

const ThankYou = () => {
    return (
        <>
            <Head>
                <title>Thank You - Analog IAS Academy</title>
            </Head>

            <Header />
            <>
                <section className="slider__area pt-200 pb-160 include-bg d-flex align-items-center bg-contact">
                    <div className="container">
                        <h3 className='f-70 text-center white mt-40'>Thank You!</h3>
                    </div>
                </section>
            </>
            <section className="contact__area pt-120 pb-120" style={{ backgroundColor: '#F4F4F4' }} id="contactForm">
                <div className="container">
                    <div className="col-xxl-10 col-xl-10 col-lg-10 m-auto">
                        <div className="contact__wrapper">
                            <div className="section__title-wrapper mb-40">
                                <h2 className="section__title-50 text-center">Thanks for choosing ANALOG.</h2>
                            </div>
                            <div className="col-xxl-12" style={{ caretColor: 'transparent' }}>
                                <div className="contact__form-input">
                                    <h2>Let's begin your journey towards success. <br />Our team will reach out to you shortly.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ThankYou;