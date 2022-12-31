import React from "react";
import Link from "next/link";

const ContactUs = () => {

    return (
        <>
            <section className="contact__area pt-60 pb-120" style={{ backgroundColor: '#F4F4F4' }}>
                <div className="container">
                    <div className="col-xxl-10 col-xl-10 col-lg-10 m-auto">
                        <div className="contact__wrapper">
                            <div className="section__title-wrapper mb-40">
                                <h2 className="section__title-50 text-center">Contact Us</h2>
                            </div>
                            <div className="contact__form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-xxl-6 col-xl-6 col-md-6">
                                            <div className="contact__form-input">
                                                <input required type="text" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-md-6">
                                            <div className="contact__form-input">
                                                <input required type="phone" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-12">
                                            <div className="contact__form-input">
                                                <input required type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-xxl-12">
                                            <div className="contact__form-input">
                                                <textarea required placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-xxl-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                                            <Link href="/">
                                                <a className="tp-btn-secondary">Submit <i className="fa-regular fa-arrow-right fa-ri">
                                                </i></a>
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs;