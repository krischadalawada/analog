import Link from 'next/link';
import React, { useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';
import { Link as ScrollLink } from "react-scroll";

const CourseDetails = (props) => {

    const [expanded, setExpanded] = useState('GS')
    const details = props.data

    return (
        <>
            <section className="research__area research__border pt-80 pb-120 p-relative z-index-1">
                <div className="container-lg">
                    <div className="col-12 m-auto">
                        <div class="accordion accordion-flush" id="accordionCourses">
                            <div class="accordion-item mb-30">
                                <h2 class="accordion-header row" id="headingOne">
                                    <div className='col-lg-6 col-sm-8 col-9'>
                                        <button class="course-area" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={() => { expanded === 'GS' ? setExpanded('') : setExpanded('GS') }}>
                                            <div className="row">
                                                <div className="col-md-11 col-10">
                                                    <div className={`text-left mt-2`}>
                                                        <h3 className="research__title-course">General Studies (PCM)</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-1 col-2">
                                                    <HiOutlineChevronDown color='#000000' size={30} />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='col-lg-2 col-sm-1 mob-none'></div>
                                    {
                                        expanded === 'GS' &&
                                        <div className='col-lg-4 col-3'>
                                            <a className='syll-download' href="/assets/downloads/syllabus/General_Studies_Syllabus.pdf" target="_blank" rel="noopener noreferrer">
                                                <h3 className='syll-download-text'>Download Syllabus</h3>
                                                <FiDownload color='#ffffff' size={30} />
                                            </a>
                                        </div>
                                    }
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionCourses">
                                    <div class="accordion-body course-body">
                                        <div className='row'>
                                            <div className='col-lg-7 col-12'>
                                                <div className='subview'>
                                                    <h3>Classroom Programme</h3>
                                                    <p>Pedagogy: A team of experienced faculty from different parts of India - Delhi, Jammu and Kashmir, Uttar Pradesh, Madhya Pradesh, West Bengal, Orissa and Hyderabad teach you.
                                                        We give utmost importance to the quality of teaching and learning outcome. Classroom Experience - By listing down the topics and sub-topics of the prescribed syllabus,
                                                        we simplify the concepts to help you crack the examination at all the three phases. Good Infrastructure - Fully air-conditioned classrooms, hygienic surroundings,
                                                        highly responsive student support mechanisms, usage of new-age digital technology for better experience & understanding.</p>
                                                </div>
                                                <div className='subview'>
                                                    <h3>Extra Support Mechanism</h3>
                                                    <p><b>ABHYASA -</b> Regular Test Programme - A programme designed to ‘Read-Test-Improvise-Remember’ the concepts for a longer period. Tests with MCQs & descriptive questions are conducted daily along with summary tests at regular intervals - weekly, fortnightly, monthly and quarterly.
                                                        <br /><b>Mentorship -</b> Mentors will be guiding an aspirant with any aspect of the preparation, throughout the day.
                                                        <br /><b>Study Material -</b> Regularly updated and revised material will be provided to stay in tune with highly dynamic syllabus.
                                                        <br /><b>Current Affairs Magazine -</b> Weekly and monthly compilation of current affairs sourced from highly circulated Newspapers - The Hindu, Indian Express, Economic Times, Mint etc will be provided. Each Article gives detailed explanations relevant for both prelims and mains.</p>
                                                </div>
                                                <div className='subview'>
                                                    <h3>What You Will Learn</h3>
                                                    <ul>
                                                        <li>How to prepare for prelims</li>
                                                        <li>How to prepare for mains</li>
                                                        <li>Prelims & mains examination syllabus</li>
                                                        <li>How to cope with stress of civil services examination</li>
                                                        <li>IAS preparation strategy</li>
                                                        <li>How to prepare notes</li>
                                                        <li>How to write answers</li>
                                                        <li>How to read effectively</li>
                                                        <li>Time management</li>
                                                        <li>Gaining mental power to crack upsc examination</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-lg-5 col-12'>
                                                <div className='batchview'>
                                                    <h3 className='batchview-heading mb-15'>NEW BATCHES</h3>
                                                    <div class="accordion accordion-flush" id="accordionBatches">
                                                        <div class="accordion-item mb-20">
                                                            <h2 class="accordion-header batch-area" id="batchOne">
                                                                <button class="w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBOne" aria-expanded="true" aria-controls="collapseBOne">
                                                                    <div className="row">
                                                                        <div className="col-md-11 col-10">
                                                                            <div className={`text-left mt-2`}>
                                                                                <h3 className="research__title-batch">Hyderbad - Ashok Nagar / Indira Park</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-1 col-2">
                                                                            <HiOutlineChevronDown color='#fff' size={30} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseBOne" class="accordion-collapse collapse show" aria-labelledby="batchOne" data-bs-parent="#accordionBatches">
                                                                <div class="accordion-body">
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Start:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>29/05/2023</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Duration:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>10 Months</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-4'>
                                                                            <h5>Timings:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-8'>
                                                                            <h5>06:30 AM - 09:00 AM</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Seats Available:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>70</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5 style={{ lineHeight: '270%' }}>Course&nbsp;Fee:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h4>₹&nbsp;1,40,000</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 mt-30" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                                                        <ScrollLink
                                                                            to="contactForm"
                                                                            duration={500}
                                                                            id="enrollNow"
                                                                            offset={-120}
                                                                        >
                                                                            <a className="tp-btn-secondary pointer pointer "><b>ENROLL NOW </b><i className="fa-regular fa-arrow-right fa-ri">
                                                                            </i></a>
                                                                        </ScrollLink>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-30">
                                <h2 class="accordion-header row" id="headingTwo">
                                    <div className='col-lg-6 col-sm-8 col-9'>
                                        <button class="course-area" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" onClick={() => { expanded === 'PS' ? setExpanded('') : setExpanded('PS') }}>
                                            <div className="row">
                                                <div className="col-md-11 col-10">
                                                    <div className={`text-left mt-2`}>
                                                        <h3 className="research__title-course">Political Science (Optional)</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-1 col-2">
                                                    <HiOutlineChevronDown color='#000000' size={30} />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='col-lg-2 col-sm-1 mob-none'></div>
                                    {
                                        expanded === 'PS' &&
                                        <div className='col-lg-4 col-3'>
                                            <a className='syll-download' href="/assets/downloads/syllabus/Political_Science_Optional_Syllabus.pdf" target="_blank" rel="noopener noreferrer">
                                                <h3 className='syll-download-text'>Download Syllabus</h3>
                                                <FiDownload color='#ffffff' size={30} />
                                            </a>
                                        </div>
                                    }
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionCourses">
                                    <div class="accordion-body course-body">
                                        <div className='row'>
                                            <div className='col-lg-7 col-12'>
                                                <div className='subview'>
                                                    <p>The subject gives you an idea about the Indian freedom struggle, the constitution of India, international
                                                        organisations and related topics. The subject is relatively easy and simple to understand and there is
                                                        ample study material available. This subject also includes International Relations.</p>
                                                </div>
                                                <div className='subview'>
                                                    <h3>What You Will Learn</h3>
                                                    <ul>
                                                        <li>Clear explanation of concepts</li>
                                                        <li>Making you to to express the concept clearly (logically) on paper which requires a lot of writing practice</li>
                                                        <li>Making you to relate the subject with current affairs especially administrative and political issues</li>
                                                        <li>Making you substantiate your argument with facts, evidence, and committee reports etc</li>
                                                        <li>Imparting these angles to almost every answer that you write</li>
                                                        <li>Backing your answer with theoretical foundations and perspective of various thinkers</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-lg-5 col-12'>
                                                <div className='batchview'>
                                                    <h3 className='batchview-heading mb-15'>NEW BATCHES</h3>
                                                    <div class="accordion accordion-flush" id="accordionBatches">
                                                        <div class="accordion-item mb-20">
                                                            <h2 class="accordion-header batch-area" id="batchOne">
                                                                <button class="w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBOne" aria-expanded="true" aria-controls="collapseBOne">
                                                                    <div className="row">
                                                                        <div className="col-md-11 col-10">
                                                                            <div className={`text-left mt-2`}>
                                                                                <h3 className="research__title-batch">Hyderbad - Ashok Nagar / Indira Park</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-1 col-2">
                                                                            <HiOutlineChevronDown color='#fff' size={30} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseBOne" class="accordion-collapse collapse show" aria-labelledby="batchOne" data-bs-parent="#accordionBatches">
                                                                <div class="accordion-body">
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Start:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>06/06/2023</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Duration:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>4 Months</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-4'>
                                                                            <h5>Timings:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-8'>
                                                                            <h5>10:30 AM - 01:00 PM</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Seats Available:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>50</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5 style={{ lineHeight: '270%' }}>Course&nbsp;Fee:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h4>₹&nbsp;40,000</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 mt-30" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                                                        <ScrollLink
                                                                            to="contactForm"
                                                                            duration={500}
                                                                            id="enrollNow"
                                                                            offset={-120}
                                                                        >
                                                                            <a className="tp-btn-secondary pointer"><b>ENROLL NOW </b><i className="fa-regular fa-arrow-right fa-ri">
                                                                            </i></a>
                                                                        </ScrollLink>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='col-xl-6 col-md-8 col-12 m-auto'>
                                            <div className="row align-items-center instructor-area mb-60">
                                                <h2 className='instructor-area-title text-center'>Course Instructors</h2>
                                                <div className="col-xxl-4 col-lg-4 col-sm-6">
                                                    <div className="slider__thumb-2 p-relative">
                                                        <span className="slider__thumb-home">
                                                            <img className="circ" style={{ width: '100%' }} src="assets/images/faculty/Srinivas.jpeg" alt="Analog IAS Academy Faculty  Mr. S. Srinivas" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-8 col-lg-8 col-sm-6">
                                                    <div className="pt-60">
                                                        <h3 className="instructor-area-title text-left">Srinivas Sannidhanam</h3>
                                                        <p className='mt-20 instructor-area-sub'>Professor</p>
                                                        <p className='mt-20 mb-40 instructor-area-sub'><b>Subjects:</b> Political Science & International Relations</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-30">
                                <h2 class="accordion-header row" id="headingThree">
                                    <div className='col-lg-6 col-sm-8 col-9'>
                                        <button class="course-area" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" onClick={() => { expanded === 'MA' ? setExpanded('') : setExpanded('MA') }}>
                                            <div className="row">
                                                <div className="col-md-11 col-10">
                                                    <div className={`text-left mt-2`}>
                                                        <h3 className="research__title-course">Mathematics (Optional)</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-1 col-2">
                                                    <HiOutlineChevronDown color='#000000' size={30} />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='col-lg-2 col-sm-1 mob-none'></div>
                                    {
                                        expanded === 'MA' &&
                                        <div className='col-lg-4 col-3'>
                                            <a className='syll-download' href="/assets/downloads/syllabus/Mathematics_Optional_Syllabus.pdf" target="_blank" rel="noopener noreferrer">
                                                <h3 className='syll-download-text'>Download Syllabus</h3>
                                                <FiDownload color='#ffffff' size={30} />
                                            </a>
                                        </div>
                                    }
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionCourses">
                                    <div class="accordion-body course-body">
                                        <div className='row'>
                                            <div className='col-lg-7 col-12'>
                                                <div className='subview'>
                                                    <p><b>Chances of scoring high:</b> If you get your mathematics optional right then you will make it to the final list.
                                                        <br /><br /><b>Certainty:</b> If you have attempted your paper well then you are sure that you will get good marks. For
                                                        example, in the recent examination, just by attempting 400 marks paper you could have scored 260+
                                                        marks.
                                                        <br /><br /><b>Fun:</b> Mathematics is a delightful subject and helps you deviate from theory-heavy humanities subjects.
                                                        <br /><br /><b>Impression:</b> The fact that you have taken maths creates a good impression on interview board members.
                                                        They may be pleased to see that you have opted for a tough optional.
                                                        <br /><br /><b>Difficulty level:</b> The difficulty level of Mathematics paper is quite moderate and almost all questions are
                                                        directly picked from the standard textbooks.</p>
                                                </div>
                                            </div>
                                            <div className='col-lg-5 col-12'>
                                                <div className='batchview'>
                                                    <h3 className='batchview-heading mb-15'>NEW BATCHES</h3>
                                                    <div class="accordion accordion-flush" id="accordionBatches">
                                                        <div class="accordion-item mb-20">
                                                            <h2 class="accordion-header batch-area" id="batchOne">
                                                                <button class="w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBOne" aria-expanded="true" aria-controls="collapseBOne">
                                                                    <div className="row">
                                                                        <div className="col-md-11 col-10">
                                                                            <div className={`text-left mt-2`}>
                                                                                <h3 className="research__title-batch">Hyderbad - Ashok Nagar / Indira Park</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-1 col-2">
                                                                            <HiOutlineChevronDown color='#fff' size={30} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseBOne" class="accordion-collapse collapse show" aria-labelledby="batchOne" data-bs-parent="#accordionBatches">
                                                                <div class="accordion-body">
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Start:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>06/06/2023</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Duration:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>5 Months</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-4'>
                                                                            <h5>Timings:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-8'>
                                                                            <h5>10:30 AM - 01:00 PM</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Seats Available:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>60</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5 style={{ lineHeight: '270%' }}>Course&nbsp;Fee:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h4>₹&nbsp;40,000</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 mt-30" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                                                        <ScrollLink
                                                                            to="contactForm"
                                                                            duration={500}
                                                                            id="enrollNow"
                                                                            offset={-120}
                                                                        >
                                                                            <a className="tp-btn-secondary pointer"><b>ENROLL NOW </b><i className="fa-regular fa-arrow-right fa-ri">
                                                                            </i></a>
                                                                        </ScrollLink>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='col-xl-6 col-md-8 col-12 m-auto'>
                                            <div className="row align-items-center instructor-area mb-60">
                                                <h2 className='instructor-area-title text-center'>Course Instructors</h2>
                                                <div className="col-xxl-4 col-lg-4 col-sm-6">
                                                    <div className="slider__thumb-2 p-relative">
                                                        <span className="slider__thumb-home">
                                                            <img style={{ width: '100%' }} src="assets/images/about/Srikanth@2x.png" alt="Analog IAS Academy Director  Mr. Srikanth Vinnakota" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-8 col-lg-8 col-sm-6">
                                                    <div className="pt-60">
                                                        <h3 className="instructor-area-title text-left">Srikanth Vinnakota & Team</h3>
                                                        <p className='mt-20 instructor-area-sub'>Professor</p>
                                                        <p className='mt-20 mb-40 instructor-area-sub'><b>Subjects:</b> Mathematics</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-30">
                                <h2 class="accordion-header row" id="headingFour">
                                    <div className='col-lg-6 col-sm-8 col-9'>
                                        <button class="course-area" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour" onClick={() => { expanded === 'PA' ? setExpanded('') : setExpanded('PA') }}>
                                            <div className="row">
                                                <div className="col-md-11 col-10">
                                                    <div className={`text-left mt-2`}>
                                                        <h3 className="research__title-course">Public Administration (Optional)</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-1 col-2">
                                                    <HiOutlineChevronDown color='#000000' size={30} />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='col-lg-2 col-sm-1 mob-none'></div>
                                    {
                                        expanded === 'PA' &&
                                        <div className='col-lg-4 col-3'>
                                            <a className='syll-download' href="/assets/downloads/syllabus/Public_Administration_Optional_Syllabus.pdf" target="_blank" rel="noopener noreferrer">
                                                <h3 className='syll-download-text'>Download Syllabus</h3>
                                                <FiDownload color='#ffffff' size={30} />
                                            </a>
                                        </div>
                                    }
                                </h2>
                                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionCourses">
                                    <div class="accordion-body course-body">
                                        <div className='row'>
                                            <div className='col-lg-7 col-12'>
                                                <div className='subview'>
                                                    <p>The subject basically gives you an idea about government mechanisms and is generally regarded as easy
                                                        and simple.</p>
                                                </div>
                                                <div className='subview'>
                                                    <p>There is ample study material available for this subject and the questions are generally straight-forward.
                                                        This subject will help you even in the essay paper and in your IAS interview too.</p>
                                                </div>
                                                <div className='subview'>
                                                    <h3>What You Will Learn</h3>
                                                    <ul>
                                                        <li>Clear explanation of concepts</li>
                                                        <li>Making you to relate the subject with current affairs especially administrative and political
                                                            issues</li>
                                                        <li>Making you substantiate your argument with facts, evidence, and committee reports etc</li>
                                                        <li>Backing your answer with theoretical foundations and perspective of various thinkers</li>
                                                        <li>Contemporary administrative practices</li>
                                                        <li>Comparative public administration angle</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-lg-5 col-12'>
                                                <div className='batchview'>
                                                    <h3 className='batchview-heading mb-15'>NEW BATCHES</h3>
                                                    <div class="accordion accordion-flush" id="accordionBatches">
                                                        <div class="accordion-item mb-20">
                                                            <h2 class="accordion-header batch-area" id="batchOne">
                                                                <button class="w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBOne" aria-expanded="true" aria-controls="collapseBOne">
                                                                    <div className="row">
                                                                        <div className="col-md-11 col-10">
                                                                            <div className={`text-left mt-2`}>
                                                                                <h3 className="research__title-batch">Hyderbad - Ashok Nagar / Indira Park</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-1 col-2">
                                                                            <HiOutlineChevronDown color='#fff' size={30} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseBOne" class="accordion-collapse collapse show" aria-labelledby="batchOne" data-bs-parent="#accordionBatches">
                                                                <div class="accordion-body">
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Start:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>06/06/2023</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Duration:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>3.5 Months</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-4'>
                                                                            <h5>Timings:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-8'>
                                                                            <h5>10:30 AM - 01:00 PM</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Seats Available:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>50</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5 style={{ lineHeight: '270%' }}>Course&nbsp;Fee:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h4>₹&nbsp;40,000</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 mt-30" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                                                        <ScrollLink
                                                                            to="contactForm"
                                                                            duration={500}
                                                                            id="enrollNow"
                                                                            offset={-120}
                                                                        >
                                                                            <a className="tp-btn-secondary pointer"><b>ENROLL NOW </b><i className="fa-regular fa-arrow-right fa-ri">
                                                                            </i></a>
                                                                        </ScrollLink>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='col-xl-6 col-md-8 col-12 m-auto'>
                                            <div className="row align-items-center instructor-area mb-60">
                                                <h2 className='instructor-area-title text-center'>Course Instructors</h2>
                                                <div className="col-xxl-4 col-lg-4 col-sm-6">
                                                    <div className="slider__thumb-2 p-relative">
                                                        <span className="slider__thumb-home">
                                                            <img className="circ" style={{ width: '100%' }} src="assets/images/faculty/RaviKumar.jpeg" alt="Analog IAS Academy Faculty  Mr. D. M. Ravi Kumar" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-8 col-lg-8 col-sm-6">
                                                    <div className="pt-60">
                                                        <h3 className="instructor-area-title text-left">D.M. Ravi Kumar</h3>
                                                        <p className='mt-20 instructor-area-sub'>Experienced faculty</p>
                                                        <p className='mt-20 mb-40 instructor-area-sub'><b>Subjects:</b> Indian Polity and Governance, Public Administration (optional)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-30">
                                <h2 class="accordion-header row" id="headingFive">
                                    <div className='col-lg-6 col-sm-8 col-9'>
                                        <button class="course-area" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive" onClick={() => { expanded === 'AN' ? setExpanded('') : setExpanded('AN') }}>
                                            <div className="row">
                                                <div className="col-md-11 col-10">
                                                    <div className={`text-left mt-2`}>
                                                        <h3 className="research__title-course">Anthropology (Optional)</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-1 col-2">
                                                    <HiOutlineChevronDown color='#000000' size={30} />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='col-lg-2 col-sm-1 mob-none'></div>
                                    {
                                        expanded === 'AN' &&
                                        <div className='col-lg-4 col-3'>
                                            <a className='syll-download' href="/assets/downloads/syllabus/Anthropology_Optional_Syllabus.pdf" target="_blank" rel="noopener noreferrer">
                                                <h3 className='syll-download-text'>Download Syllabus</h3>
                                                <FiDownload color='#ffffff' size={30} />
                                            </a>
                                        </div>
                                    }
                                </h2>
                                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionCourses">
                                    <div class="accordion-body course-body">
                                        <div className='row'>
                                            <div className='col-lg-7 col-12'>
                                                <div className='subview'>
                                                    <p>Explaining most relevant &amp; applied aspects of physical, social, cultural, archaeological and tribal
                                                        anthropology perspectives required exclusively for the mains examination with a holistic approach
                                                        towards the subject. Comprehensive academic information would be provided in both paper based and
                                                        digital formats.</p>
                                                </div>
                                                <div className='subview'>
                                                    <p>The most essential winning edge is persuaded through dedicated test series for command over writing.
                                                        One-on-one focus for personalised and strategic grooming of each candidate on a daily basis.</p>
                                                </div>
                                                <div className='subview'>
                                                    <h3>What You Will Learn</h3>
                                                    <ul>
                                                        <li>UPSC mains optional syllabus and exam orientation</li>
                                                        <li>Effective presentation of appropriate answers through daily writing practice sessions</li>
                                                        <li>Sociocultural anthropology</li>
                                                        <li>Physical / Biological anthropology</li>
                                                        <li>Prehistorical aspects of anthropology</li>
                                                        <li>Archaeological anthropology</li>
                                                        <li>Indian anthropology</li>
                                                        <li>Tribal anthropology</li>
                                                        <li>Diagrams practice</li>
                                                        <li>Audio visual classes</li>
                                                        <li>Extensive and exclusive mains answer writing practice sessions</li>
                                                        <li>Comprehensive test series covering entire syllabus</li>
                                                        <li>Timely completion of syllabus</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-lg-5 col-12'>
                                                <div className='batchview'>
                                                    <h3 className='batchview-heading mb-15'>NEW BATCHES</h3>
                                                    <div class="accordion accordion-flush" id="accordionBatches">
                                                        <div class="accordion-item mb-20">
                                                            <h2 class="accordion-header batch-area" id="batchOne">
                                                                <button class="w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBOne" aria-expanded="true" aria-controls="collapseBOne">
                                                                    <div className="row">
                                                                        <div className="col-md-11 col-10">
                                                                            <div className={`text-left mt-2`}>
                                                                                <h3 className="research__title-batch">Hyderbad - Ashok Nagar / Indira Park</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-1 col-2">
                                                                            <HiOutlineChevronDown color='#fff' size={30} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseBOne" class="accordion-collapse collapse show" aria-labelledby="batchOne" data-bs-parent="#accordionBatches">
                                                                <div class="accordion-body">
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Start:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>06/06/2023</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Duration:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>4 Months</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-4'>
                                                                            <h5>Timings:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-8'>
                                                                            <h5>10:30 AM - 01:00 PM</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Seats Available:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>60</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5 style={{ lineHeight: '270%' }}>Course&nbsp;Fee:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h4>₹&nbsp;40,000</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 mt-30" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                                                        <ScrollLink
                                                                            to="contactForm"
                                                                            duration={500}
                                                                            id="enrollNow"
                                                                            offset={-120}
                                                                        >
                                                                            <a className="tp-btn-secondary pointer"><b>ENROLL NOW </b><i className="fa-regular fa-arrow-right fa-ri">
                                                                            </i></a>
                                                                        </ScrollLink>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='col-xl-6 col-md-8 col-12 m-auto'>
                                            <div className="row align-items-center instructor-area mb-60">
                                                <h2 className='instructor-area-title text-center'>Course Instructors</h2>
                                                <div className="col-xxl-4 col-lg-4 col-sm-6">
                                                    <div className="slider__thumb-2 p-relative">
                                                        <span className="slider__thumb-home">
                                                            <img className="circ" style={{ width: '100%' }} src="assets/images/faculty/RavindharReddy.jpeg" alt="Analog IAS Academy Faculty  Dr. Ravindra Reddy" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-8 col-lg-8 col-sm-6">
                                                    <div className="pt-60">
                                                        <h3 className="instructor-area-title text-left">Dr. Ravindra Reddy</h3>
                                                        <p className='mt-20 instructor-area-sub'>Faculty</p>
                                                        <p className='mt-20 mb-40 instructor-area-sub'><b>Subjects:</b> Anthropology optional, Science &amp; Technology</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item mb-30">
                                <h2 class="accordion-header row" id="headingSix">
                                    <div className='col-lg-6 col-sm-8 col-9'>
                                        <button class="course-area" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix" onClick={() => { expanded === 'SO' ? setExpanded('') : setExpanded('SO') }}>
                                            <div className="row">
                                                <div className="col-md-11 col-10">
                                                    <div className={`text-left mt-2`}>
                                                        <h3 className="research__title-course">Sociology (Optional)</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-1 col-2">
                                                    <HiOutlineChevronDown color='#000000' size={30} />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='col-lg-2 col-sm-1 mob-none'></div>
                                    {
                                        expanded === 'SO' &&
                                        <div className='col-lg-4 col-3'>
                                            <a className='syll-download' href="/assets/downloads/syllabus/Sociology_Optional_Syllabus.pdf" target="_blank" rel="noopener noreferrer">
                                                <h3 className='syll-download-text'>Download Syllabus</h3>
                                                <FiDownload color='#ffffff' size={30} />
                                            </a>
                                        </div>
                                    }
                                </h2>
                                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionCourses">
                                    <div class="accordion-body course-body">
                                        <div className='row'>
                                            <div className='col-lg-7 col-12'>
                                                <div className='subview'>
                                                    <p>Sociology is a vital part of general studies paper and optional paper in Civil Services Mains Examination.
                                                        Like other optional subjects, sociology has two papers. Paper I of Sociology deals with the fundamentals
                                                        of Sociology where Paper II of Sociology optional deals with the Indian society, its structure, and change.
                                                        This subject is also considered one of the easiest and comprehensible in the list of optionals.</p>
                                                </div>
                                                <div className='subview'>
                                                    <h3>What You Will Learn</h3>
                                                    <ul>
                                                        <li>Exhaustive class room training</li>
                                                        <li>Focussed study material</li>
                                                        <li>Pinpointed class notes</li>
                                                        <li>Unit-wise tests and grand tests</li>
                                                        <li>Complete interactive classes</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-lg-5 col-12'>
                                                <div className='batchview'>
                                                    <h3 className='batchview-heading mb-15'>NEW BATCHES</h3>
                                                    <div class="accordion accordion-flush" id="accordionBatches">
                                                        <div class="accordion-item mb-20">
                                                            <h2 class="accordion-header batch-area" id="batchOne">
                                                                <button class="w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBOne" aria-expanded="true" aria-controls="collapseBOne">
                                                                    <div className="row">
                                                                        <div className="col-md-11 col-10">
                                                                            <div className={`text-left mt-2`}>
                                                                                <h3 className="research__title-batch">Hyderbad - Ashok Nagar / Indira Park</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-1 col-2">
                                                                            <HiOutlineChevronDown color='#fff' size={30} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseBOne" class="accordion-collapse collapse show" aria-labelledby="batchOne" data-bs-parent="#accordionBatches">
                                                                <div class="accordion-body">
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Start:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>06/06/2023</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Duration:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>4 Months</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-4'>
                                                                            <h5>Timings:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-8'>
                                                                            <h5>10:30 AM - 01:00 PM</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5>Seats Available:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h5>60</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-lg-5 col-5'>
                                                                            <h5 style={{ lineHeight: '270%' }}>Course&nbsp;Fee:</h5>
                                                                        </div>
                                                                        <div className='col-lg-7 col-7'>
                                                                            <h4>₹&nbsp;40,000</h4>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 mt-30" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                                                        <ScrollLink
                                                                            to="contactForm"
                                                                            duration={500}
                                                                            id="enrollNow"
                                                                            offset={-120}
                                                                        >
                                                                            <a className="tp-btn-secondary pointer"><b>ENROLL NOW </b><i className="fa-regular fa-arrow-right fa-ri">
                                                                            </i></a>
                                                                        </ScrollLink>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className='col-xl-6 col-md-8 col-12 m-auto'>
                                            <div className="row align-items-center instructor-area mb-60">
                                                <h2 className='instructor-area-title text-center'>Course Instructors</h2>
                                                <div className="col-xxl-4 col-lg-4 col-sm-6">
                                                    <div className="slider__thumb-2 p-relative">
                                                        <span className="slider__thumb-home">
                                                            <img className="circ" style={{ width: '100%' }} src="assets/images/faculty/Amit_Bose.jpeg" alt="Analog IAS Academy Faculty  Mr. Amit Bose" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-xxl-8 col-lg-8 col-sm-6">
                                                    <div className="pt-60">
                                                        <h3 className="instructor-area-title text-left">Mr. Amit Bose</h3>
                                                        <p className='mt-20 instructor-area-sub'>Faculty</p>
                                                        <p className='mt-20 mb-40 instructor-area-sub'><b>Subjects:</b> Sociology (optional), <br />Social Issues and Social Justice &amp; International Relations</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CourseDetails;