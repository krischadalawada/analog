import Link from 'next/link';
import React from 'react'
import Select from 'react-select'
import { HiOutlineSearch } from 'react-icons/hi'
import { Link as ScrollLink } from "react-scroll";

const JoinAnalog = () => {

    const courseData = [
        {
            id: '2f26f15e',
            control: 'courseOne',
            target: '#courseOne',
            location: 'Ashok Nagar, HYD',
            course: 'General Studies (PCM)',
            startDate: '29/05/2023',
            endDate: '29/03/2024',
            demoDate: '29/05/2023',
            timings: '06:30 AM - 09:00 AM'
        },
        {
            id: 'b3d23820',
            control: 'courseTwo',
            target: '#courseTwo',
            location: 'Ashok Nagar, HYD',
            course: 'Political Science',
            startDate: '06/06/2023',
            endDate: '06/10/2023',
            demoDate: '06/06/2023',
            timings: '10:30 AM - 01:00 PM'
        },
        {
            id: '282b0fff',
            control: 'courseFour',
            target: '#courseFour',
            location: 'Ashok Nagar, HYD',
            course: 'Mathematics',
            startDate: '06/06/2023',
            endDate: '06/11/2023',
            demoDate: '06/06/2023',
            timings: '10:30 AM - 01:00 PM'
        },
        {
            id: 'fee30c00',
            control: 'courseFive',
            target: '#courseFive',
            location: 'Ashok Nagar, HYD',
            course: 'Public Administration',
            startDate: '06/06/2023',
            endDate: '06/10/2023',
            demoDate: '06/06/2023',
            timings: '10:30 AM - 01:00 PM'
        },
        {
            id: '282b0mmm',
            control: 'courseThr',
            target: '#courseThr',
            location: 'Ashok Nagar, HYD',
            course: 'Anthropology',
            startDate: '06/06/2023',
            endDate: '06/11/2023',
            demoDate: '06/06/2023',
            timings: '10:30 AM - 01:00 PM'
        },
        {
            id: 'fee30d11',
            control: 'courseSix',
            target: '#courseSix',
            location: 'Ashok Nagar, HYD',
            course: 'Sociology',
            startDate: '06/06/2023',
            endDate: '06/11/2023',
            demoDate: '06/06/2023',
            timings: '10:30 AM - 01:00 PM'
        }
    ]

    const courseList = [
        { value: 'tspsc-group1', label: 'TSPSC Group 1' },
        { value: 'appsc-group2', label: 'APPSC Group 2' },
        { value: 'civil-services', label: 'Civil Services' }
    ]

    const locationList = [
        { value: 'an-hyd', label: 'Ashok Nagar, HYD' },
        { value: 'ip-hyd', label: 'Indira Park, HYD' },
        { value: 'beng', label: 'Bengaluru' }
    ]

    return (
        <>
            <section className="research__area research__border grey-bg-3 pt-30 pb-30 p-relative z-index-1">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section__title-wrapper mb-50 text-center">
                                <h2 className="section__title section__title-50">Join ANALOG IAS</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-10 col-md-10 col-12 m-auto">
                        {/* <div className="row mb-15">
                            <div className="col-5">
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    isClearable={true}
                                    isSearchable={true}
                                    name="courses"
                                    options={courseList}
                                    placeholder="Course"
                                />
                            </div>
                            <div className="col-md-6 col-5">
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    isClearable={true}
                                    isSearchable={true}
                                    name="locations"
                                    options={locationList}
                                    placeholder="Location"
                                />
                            </div>
                            <div className='col-md-1 col-2'>
                                <div className='row'>
                                    <i className='col-10 search-btn'>
                                        <HiOutlineSearch color='#fff' size={20} />
                                    </i>
                                </div>
                            </div>
                        </div> */}
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
                                            <div id={item.control} className={"accordion-collapse collapse " + (courseData[0].id === item.id ? "show" : "")} aria-labelledby={item.id} data-bs-parent="#checkoutAccordion">
                                                <div className="accordion-body row">
                                                    <hr />
                                                    <div className='col-md-8'>
                                                        <p className='research__title-info'>Demo Date &nbsp; <span className='research__title-binfo'>{item.demoDate}</span></p>
                                                        <p className='research__title-info'>Batch Timings {item.timings}</p>
                                                    </div>
                                                    <div className='col-md-4 mb-10' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                                                        <ScrollLink
                                                            to="contactForm"
                                                            duration={500}
                                                            id="enrollNow"
                                                            offset={-120}
                                                        >
                                                            <p className="tp-btn-secondary pointer">ENROLL NOW <i className="fa-regular fa-arrow-right fa-ri">
                                                            </i></p>
                                                        </ScrollLink>
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