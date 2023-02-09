import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { Spinner } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

const ContactUs = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [clickedSubmit, setClickedSubmit] = useState(false)
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)
    const [alert, setAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [token, setToken] = useState();
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

    const validateEmail = (email) => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email) {
            return email.match(mailformat);
        }
    };

    const onChangeText = (event) => {
        var field = event.target.name
        var value = event.target.value
        if (field === 'name') {
            setName(value)
        } else if (field === 'phone') {
            setPhone(value)
        } else if (field === 'email') {
            setEmail(value)
        } else if (field === 'message') {
            setMessage(value)
        }
    }

    const onVerify = useCallback((tkn) => {
        console.log('TRIGGERING');
        setToken(tkn);
    }, [alertMsg]);

    const onSubmit = () => {

        if (name.length > 1 && phone.length === 10 && validateEmail(email)) {

            if (token) {
                setAlert(false)
                setClickedSubmit(true)
                setLoading(true)
                setSuccess(false)
                setFailure(false)

                emailjs.send("service_frj3va9", "template_p3h2j35", {
                    from_name: name,
                    phone: phone,
                    email: email,
                    message: message,
                }, "vE-Cc658AKOCommhp")
                    .then((result) => {
                        setLoading(false)
                        setSuccess(true)
                        setAlert(false)
                        setRefreshReCaptcha(r => !r);
                    }, (error) => {
                        setLoading(false)
                        setFailure(true)
                    });
            }
        } else {
            setClickedSubmit(false)
            setAlert(true)
        }

    };

    return (
        <>
            <section className="contact__area pt-60 pb-120" style={{ backgroundColor: '#F4F4F4' }} id="contactForm">
                <div className="container">
                    <div className="col-xxl-10 col-xl-10 col-lg-10 m-auto">
                        <div className="contact__wrapper">
                            {
                                router.pathname !== '/contact' ?
                                    <div className="section__title-wrapper mb-40">
                                        <h2 className="section__title-50 text-center">Contact Us</h2>
                                    </div>
                                    :
                                    <></>
                            }
                            <div className={"contact__form" + (router.pathname === '/contact' ? " mt-60" : "")}>
                                <form action="#">
                                    {
                                        loading ?
                                            <div className="mtb-8 center">
                                                <Spinner animation="grow" variant="danger" />
                                            </div>
                                            :
                                            clickedSubmit && success ?
                                                <div className="col-xxl-12" style={{ caretColor: 'transparent' }}>
                                                    <div className="contact__form-input">
                                                        <h2>Request submitted successfully! <br />You'll hear from us soon.</h2>
                                                    </div>
                                                </div>
                                                :
                                                <div className="row">
                                                    <div className="col-xxl-6 col-xl-6 col-md-6">
                                                        <div className="contact__form-input">
                                                            <input style={{ color: !isNaN(name) || name.length < 2 ? "red" : "#011627", caretColor: 'black' }} name="name" required type="text" placeholder="Name*" onChange={onChangeText} />
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-6 col-xl-6 col-md-6">
                                                        <div className="contact__form-input">
                                                            <input style={{ color: isNaN(phone) || phone.length !== 10 ? "red" : "#011627", caretColor: 'black' }} name="phone" required type="phone" placeholder="Phone*" onChange={onChangeText} />
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-12">
                                                        <div className="contact__form-input">
                                                            <input style={{ color: !validateEmail(email) ? "red" : "#011627", caretColor: 'black' }} name="email" required type="email" placeholder="Email*" onChange={onChangeText} />
                                                        </div>
                                                    </div>
                                                    <div className="col-xxl-12">
                                                        <div className="contact__form-input">
                                                            <textarea name="message" required placeholder="Message" onChange={onChangeText} ></textarea>
                                                        </div>
                                                    </div>
                                                    {
                                                        clickedSubmit && failure ?
                                                            <div className="col-xxl-12" style={{ caretColor: 'transparent' }}>
                                                                <div className="contact__form-input">
                                                                    <h3>We couldn't process your request at this time. Please try again after some time.</h3>
                                                                </div>
                                                            </div>
                                                            :
                                                            alert ?
                                                                <div className="col-xxl-12" style={{ caretColor: 'transparent' }}>
                                                                    <div className="contact__form-input">
                                                                        <h3>*Please submit valid details and try again.</h3>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <></>
                                                    }
                                                    <GoogleReCaptcha
                                                        onVerify={onVerify}
                                                        refreshReCaptcha={refreshReCaptcha}
                                                    />
                                                    <div className="col-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', caretColor: 'transparent' }}>
                                                        <a className="tp-btn-secondary pointer" onClick={() => onSubmit()}>Submit <i className="fa-regular fa-arrow-right fa-ri">
                                                        </i></a>
                                                    </div>
                                                </div>
                                    }
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