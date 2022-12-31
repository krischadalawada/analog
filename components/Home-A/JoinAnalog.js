import Link from 'next/link';
import React from 'react'
import Select from 'react-select'

const JoinAnalog = () => {

    const courseData = [
        {
            id: '2f26f15e',
            control: 'courseOne',
            target: '#courseOne',
            location: 'Ashok Nagar, HYD',
            course: 'TSPSC Group 1',
            startDate: '05/12/22',
            endDate: '04/07/23',
            demoDate: '03/12/22',
            timings: '10:00 AM - 06:00 PM'
        },
        {
            id: 'b3d23820',
            control: 'courseTwo',
            target: '#courseTwo',
            location: 'Ashok Nagar, HYD',
            course: 'TSPSC Group 1',
            startDate: '05/12/22',
            endDate: '04/07/23',
            demoDate: '03/12/22',
            timings: '10:00 AM - 06:00 PM'
        },
        {
            id: '2660ab2a',
            control: 'courseThr',
            target: '#courseThr',
            location: 'Bengaluru',
            course: 'Civil Services',
            startDate: '05/12/22',
            endDate: '04/07/23',
            demoDate: '03/12/22',
            timings: '10:00 AM - 06:00 PM'
        },
        {
            id: '282b0fff',
            control: 'courseFour',
            target: '#courseFour',
            location: 'Ashok Nagar, HYD',
            course: 'TSPSC Group 1',
            startDate: '05/12/22',
            endDate: '04/07/23',
            demoDate: '03/12/22',
            timings: '10:00 AM - 06:00 PM'
        },
        {
            id: 'fee30c00',
            control: 'courseFive',
            target: '#courseFive',
            location: 'Ashok Nagar, HYD',
            course: 'APPSC Group 2',
            startDate: '05/12/22',
            endDate: '04/07/23',
            demoDate: '03/12/22',
            timings: '10:00 AM - 06:00 PM'
        }
    ]

    return (
        <>
            <section className="research__area research__border grey-bg-3 pt-30 pb-30 p-relative z-index-1">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section__title-wrapper mb-50 text-center">
                                <h2 className="section__title section__title-50">Join Analog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-10 col-md-10 col-12 m-auto">
                        <div className='join-area'>
                            <div className="row">
                                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                                    <div className='row'>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-6">
                                            <div className={`research__item text-left transition-3`}>
                                                <h3 className="research__title-heading">Location</h3>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-6">
                                            <div className={`research__item text-left transition-3`}>
                                                <h3 className="research__title-heading">Course</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                                    <div className='row'>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-6">
                                            <div className={`research__item text-left transition-3`}>
                                                <h3 className="research__title-heading">Start date</h3>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-6">
                                            <div className={`research__item text-left transition-3`}>
                                                <h3 className="research__title-heading">End date</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            courseData.map(item => {
                                return (
                                    <div key={item.id} className="accordion mb-20" id="checkoutAccordion">
                                        <div className="join-item">
                                            <h2 className="accordion-header" id={item.id}>
                                                <button className="w-100" type="button" data-bs-toggle="collapse" data-bs-target={item.target} aria-expanded={courseData[0].id === item.id ? "true" : 'false'} aria-controls={item.control}>
                                                    <div className="row">
                                                        <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-6">
                                                            <div className='row'>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-6">
                                                                    <div className={`research__item research__item-border text-left transition-3`}>
                                                                        <h3 className="research__title-info">{item.location}</h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-6">
                                                                    <div className={`research__item research__item-border text-left transition-3`}>
                                                                        <h3 className="research__title-info">{item.course}</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6">
                                                            <div className='row'>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-6">
                                                                    <div className={`research__item research__item-border text-left transition-3`}>
                                                                        <h3 className="research__title-info">{item.startDate}</h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-6">
                                                                    <div className={`research__item text-left transition-3`}>
                                                                        <h3 className="research__title-info">{item.endDate}</h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </h2>
                                            <div id={item.control} className="accordion-collapse collapse show" aria-labelledby={item.id} data-bs-parent="#checkoutAccordion">
                                                <div className="accordion-body row">
                                                    <hr />
                                                    <div className='col-md-8'>
                                                        <p className='research__title-info'>Demo Date &nbsp; <span className='research__title-binfo'>{item.demoDate}</span></p>
                                                        <p className='research__title-info'>Batch Timings {item.timings}</p>
                                                    </div>
                                                    <div className='col-md-4 mb-10' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                                        <Link href="/">
                                                            <a className="tp-btn-secondary">ENROLL NOW <i className="fa-regular fa-arrow-right fa-ri">
                                                            </i></a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default JoinAnalog;