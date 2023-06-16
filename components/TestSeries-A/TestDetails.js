import Link from 'next/link';
import React, { useState } from 'react'
import { HiOutlineChevronDown } from 'react-icons/hi';
import { FiDownload } from 'react-icons/fi';
import { Link as ScrollLink } from "react-scroll";
import useWindowSize from '../Common-A/Window';
import { TestSeriesData } from '../../data/TestSeriesData';

const TestDetails = (props) => {

    const [expanded, setExpanded] = useState('GS')
    const details = props.data
    const { width, height } = useWindowSize()

    return (
        <>
            <section className="research__area research__border pt-80 pb-60 p-relative z-index-1">
                <div className="container-lg">
                    <div className="col-12 m-auto">
                        <div class="accordion accordion-flush" id="accordionCourses">
                            <div class="accordion-item mb-30">
                                <h2 class="accordion-header row" id="headingOne">
                                    <div className='col-lg-12 col-sm-12 col-12'>
                                        <button class="course-area" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={() => { expanded === 'GS' ? setExpanded('') : setExpanded('GS') }}>
                                            <div className="row">
                                                <div className="col-md-11 col-10">
                                                    <div className={`text-left mt-2`}>
                                                        <h3 className="research__title-course">PRELIMS 2023 TEST SERIES SCHEDULE</h3>
                                                        <h4 className="research__title-sub-title">(ALL TESTS ON FULL-LENGTH SYLLABUS)</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-1 col-2">
                                                    <HiOutlineChevronDown color='#000000' size={30} />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionCourses">
                                    <div class="accordion-body course-body">
                                        <div className='row'>
                                            <div className='col-lg-7 col-12'>
                                                <div className='subview'>
                                                    <h3>HIGHLIGHTS:</h3>
                                                    <ul>
                                                        <li>Test Series available in both <b>OFFLINE & ONLINE Modes.</b></li>
                                                        <li>Well-designed Test Papers with focus on testing <b>Basic Concepts along with applied questions</b> as per the UPSC standards.</li>
                                                        <li>Detailed <b>key with explanation</b> will be provided for each test.</li>
                                                        <li>Each GS Test is followed by <b>Discussion with Expert Teachers</b> on the same day.</li>
                                                        <li>Each Test also includes questions from <b>Current Affairs.</b></li>
                                                        <li><b>One-to-One Doubts clearing sessions</b> with mentors upon appointment.</li>
                                                        <li><b>CSAT Tests</b> provided with <b>key with explanation.</b></li>
                                                    </ul>
                                                </div>
                                                <div className='red-subview'>
                                                    <ul>
                                                        <li>6 Subject-wise Tests</li>
                                                        <li>3 Comprehensive Tests</li>
                                                        <li>5 Grand Tests- Grand Tests</li>
                                                        <li>7 Full-Length CSAT Tests</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-lg-5 col-12'>
                                                <div className='particulars-view'>
                                                    <div class="accordion accordion-flush" id="accordionBatches">
                                                        <div class="accordion-item mb-20">
                                                            <h2 class="accordion-header batch-area" id="batchOne">
                                                                <button class="w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBOne" aria-expanded="true" aria-controls="collapseBOne">
                                                                    <div className="row">
                                                                        <div className="col-md-11 col-10">
                                                                            <div className={`text-left mt-2`}>
                                                                                <h3 className="research__title-particulars">PARTICULARS</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-1 col-2">
                                                                            <HiOutlineChevronDown color='#fff' size={height / 30} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseBOne" class="accordion-collapse collapse show" aria-labelledby="batchOne" data-bs-parent="#accordionBatches">
                                                                <div class="accordion-body">
                                                                    <div className='row'>
                                                                        <div className='col-sm-6 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5>GS Examination Timings:</h5>
                                                                        </div>
                                                                        <div className='col-sm-6 col-12'>
                                                                            <h5>9:00AM to 11:00AM</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-sm-6 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5>GS Paper Discussion:</h5>
                                                                        </div>
                                                                        <div className='col-sm-6 col-12'>
                                                                            <h5>11:30AM to 1:30PM</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-sm-6 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5>CSAT Examination Timings:</h5>
                                                                        </div>
                                                                        <div className='col-sm-6 col-12'>
                                                                            <h5>4:00PM to 6:00PM</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-sm-6 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5>Examination Center:</h5>
                                                                        </div>
                                                                        <div className='col-sm-6 col-12'>
                                                                            <h5>ANALOG IAS ACADEMY, Indira Park Premises, Hyderabad</h5>
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
                                                        <div class="accordion-item mb-20">
                                                            <h2 class="accordion-header batch-area" id="batchTwo">
                                                                <button class="w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBTwo" aria-expanded="true" aria-controls="collapseBTwo">
                                                                    <div className="row">
                                                                        <div className="col-md-11 col-10">
                                                                            <div className={`text-left mt-2`}>
                                                                                <h3 className="research__title-particulars">FEE</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-1 col-2">
                                                                            <HiOutlineChevronDown color='#fff' size={height / 30} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseBTwo" class="accordion-collapse collapse" aria-labelledby="batchTwo" data-bs-parent="#accordionBatches">
                                                                <div class="accordion-body">
                                                                    <div className='row'>
                                                                        <div className='col-sm-9 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5>First Test upon Prior Registration:</h5>
                                                                        </div>
                                                                        <div className='col-sm-3 col-12'>
                                                                            <h5>FREE</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-sm-9 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5 style={{ lineHeight: width > 575 && '270%' }}>For ANALOG IAS Students:</h5>
                                                                        </div>
                                                                        <div className='col-sm-3 col-12'>
                                                                            <h4>₹&nbsp;500</h4>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-sm-9 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5 style={{ lineHeight: width > 575 && '270%' }}>For Non-ANALOG IAS Students:</h5>
                                                                        </div>
                                                                        <div className='col-sm-3 col-12'>
                                                                            <h4>₹&nbsp;3,000</h4>
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
                                        <>
                                            <section className="slider__area pt-30 pb-30 include-bg align-items-center" style={{ caretColor: 'transparent' }}>
                                                <div style={{ marginLeft: '1%', marginRight: '1%' }}>
                                                    <div className='col-xl-12 col-md-12 col-12 m-auto'>
                                                        <table className='testseries-table'>
                                                            <tr>
                                                                <th>Test&nbsp;#</th>
                                                                <th>Date</th>
                                                                <th>Day</th>
                                                                <th>Subject</th>
                                                            </tr>
                                                            {TestSeriesData[0].list.map((val, key) => {
                                                                return (
                                                                    <tr key={key}>
                                                                        <td className={val.subject?.includes("CSAT") ? 'highlight' : ''}>{val.test}</td>
                                                                        <td className={val.subject?.includes("CSAT") ? 'highlight date' : 'date'}>{val.date}</td>
                                                                        <td className={val.subject?.includes("CSAT") ? 'highlight' : ''}>{val.day}&nbsp;</td>
                                                                        <td className={val.subject?.includes("CSAT") ? 'highlight' : ''}>{val.subject}</td>
                                                                    </tr>
                                                                )
                                                            })}
                                                        </table>
                                                    </div>
                                                </div>
                                            </section>
                                        </>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="research__area research__border pt-10 pb-60 p-relative z-index-1">
                <div className="container-lg">
                    <div className="col-12 m-auto">
                        <div class="accordion accordion-flush" id="accordionCourses">
                            <div class="accordion-item mb-30">
                                <h2 class="accordion-header row" id="headingOne">
                                    <div className='col-lg-12 col-sm-12 col-12'>
                                        <button class="course-area" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={() => { expanded === 'GS' ? setExpanded('') : setExpanded('GS') }}>
                                            <div className="row">
                                                <div className="col-md-11 col-10">
                                                    <div className={`text-left mt-2`}>
                                                        <h3 className="research__title-course">MATHEMATICS</h3>
                                                    </div>
                                                </div>
                                                <div className="col-md-1 col-2">
                                                    <HiOutlineChevronDown color='#000000' size={30} />
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionCourses">
                                    <div class="accordion-body course-body">
                                        <div className='row'>
                                            <div className='col-lg-7 col-12'>
                                                <div className='subview'>
                                                    <h3>HIGHLIGHTS:</h3>
                                                    <ul>
                                                        <li>India’s No. 1 Faculty</li>
                                                        <li>Duration: 4 Months</li>
                                                        <li>Weekly Tests</li>
                                                        <li>Every Concept explained theoretically and practically, which will make it easy to solve the problems.</li>
                                                        <li>Each and Every Topic will be covered.</li>
                                                        <li>Doubts Clarification Sessions</li>
                                                        <li>Free Mains Test Series </li>
                                                        <li>Online Recorded Back-up classes</li>
                                                        <li>Live-streaming</li>
                                                    </ul>
                                                </div>
                                                <div className='red-subview'>
                                                    <ul>
                                                        <li>8 Sectional Tests & 6 Grand Tests</li>
                                                        <li>For each test Explanation will be provided</li>
                                                        <li>Personalised Doubts clarification Sessions</li>
                                                        <li>Questions would be modelled in the standards of UPSC</li>
                                                        <li>Evaluation in the UPSC standards with detailed feedback will be provided</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className='col-lg-5 col-12'>
                                                <div className='particulars-view'>
                                                    <div class="accordion accordion-flush" id="accordionBatches">
                                                        <div class="accordion-item mb-20">
                                                            <h2 class="accordion-header batch-area" id="batchOne">
                                                                <button class="w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBOne" aria-expanded="true" aria-controls="collapseBOne">
                                                                    <div className="row">
                                                                        <div className="col-md-11 col-10">
                                                                            <div className={`text-left mt-2`}>
                                                                                <h3 className="research__title-particulars">PARTICULARS</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-1 col-2">
                                                                            <HiOutlineChevronDown color='#fff' size={height / 30} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseBOne" class="accordion-collapse collapse show" aria-labelledby="batchOne" data-bs-parent="#accordionBatches">
                                                                <div class="accordion-body">
                                                                    <div className='row'>
                                                                        <div className='col-sm-6 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5>Test Timings:</h5>
                                                                        </div>
                                                                        <div className='col-sm-6 col-12'>
                                                                            <h5>9:00AM to 11:00AM</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-sm-6 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5>Grand Tests  (Paper – I):</h5>
                                                                        </div>
                                                                        <div className='col-sm-6 col-12'>
                                                                            <h5>09:00AM to 12:00PM</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-sm-6 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5>Grand Tests  (Paper – II)::</h5>
                                                                        </div>
                                                                        <div className='col-sm-6 col-12'>
                                                                            <h5>2:00PM to 5:00PM</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-sm-6 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5>Examination Center:</h5>
                                                                        </div>
                                                                        <div className='col-sm-6 col-12'>
                                                                            <h5>ANALOG IAS ACADEMY, Indira Park Premises, Hyderabad</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-sm-6 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5>Test Explanation: </h5>
                                                                        </div>
                                                                        <div className='col-sm-6 col-12'>
                                                                            <h5>2:00PM to 5:00PM</h5>
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
                                                        <div class="accordion-item mb-20">
                                                            <h2 class="accordion-header batch-area" id="batchTwo">
                                                                <button class="w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBTwo" aria-expanded="true" aria-controls="collapseBTwo">
                                                                    <div className="row">
                                                                        <div className="col-md-11 col-10">
                                                                            <div className={`text-left mt-2`}>
                                                                                <h3 className="research__title-particulars">FEE</h3>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-1 col-2">
                                                                            <HiOutlineChevronDown color='#fff' size={height / 30} />
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                            <div id="collapseBTwo" class="accordion-collapse collapse" aria-labelledby="batchTwo" data-bs-parent="#accordionBatches">
                                                                <div class="accordion-body">
                                                                    <div className='row'>
                                                                        <div className='col-sm-9 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5>First Test upon Prior Registration:</h5>
                                                                        </div>
                                                                        <div className='col-sm-3 col-12'>
                                                                            <h5>FREE</h5>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-sm-9 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5 style={{ lineHeight: width > 575 && '270%' }}>For ANALOG IAS Students:</h5>
                                                                        </div>
                                                                        <div className='col-sm-3 col-12'>
                                                                            <h4>₹&nbsp;1000</h4>
                                                                        </div>
                                                                    </div>
                                                                    <hr />
                                                                    <div className='row'>
                                                                        <div className='col-sm-9 col-12' style={{ marginBottom: width < 575 ? 10 : 0 }}>
                                                                            <h5 style={{ lineHeight: width > 575 && '270%' }}>For Non-ANALOG IAS Students:</h5>
                                                                        </div>
                                                                        <div className='col-sm-3 col-12'>
                                                                            <h4>₹&nbsp;6,000</h4>
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
                                        <>
                                            <section className="slider__area pt-30 pb-30 include-bg align-items-center" style={{ caretColor: 'transparent' }}>
                                                <div style={{ marginLeft: '1%', marginRight: '1%' }}>
                                                    <div className='col-xl-12 col-md-12 col-12 m-auto'>
                                                        <table className='testseries-table'>
                                                            <tr>
                                                                <th>Test&nbsp;#</th>
                                                                <th>Date</th>
                                                                <th>Subject</th>
                                                            </tr>
                                                            {TestSeriesData[1].list.map((val, key) => {
                                                                return (
                                                                    <tr key={key}>
                                                                        <td className={val.subject?.includes("CSAT") ? 'highlight' : ''}>{val.test}</td>
                                                                        <td className={val.subject?.includes("CSAT") ? 'highlight date' : 'date'}>{val.date}</td>
                                                                        <td className={val.subject?.includes("CSAT") ? 'highlight' : ''}>{val.subject}</td>
                                                                    </tr>
                                                                )
                                                            })}
                                                        </table>
                                                    </div>
                                                </div>
                                            </section>
                                        </>
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

export default TestDetails;