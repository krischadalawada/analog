import Link from 'next/link';
import React, { useState } from 'react'
import { FAQList } from '../../data/FAQData';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { HiOutlineChevronUp } from 'react-icons/hi';

const FAQs = () => {

    const [expanded, setExpanded] = useState(0)

    return (
        <>
            <section className="research__area research__border pt-120 pb-60 p-relative z-index-1">
                <div className="container-lg">
                    <div className="col-12 m-auto">
                        {
                            FAQList.map(item => {
                                return (
                                    <div key={item.id} className="accordion mb-20" id="checkoutAccordion">
                                        <div className="faq-item">
                                            <h2 className="accordion-header" id={item.id}>
                                                <button className="w-100" type="button" data-bs-toggle="collapse" data-bs-target={item.target} aria-expanded="false" aria-controls={item.control} onClick={() => { expanded == item.id ? setExpanded(0) : setExpanded(item.id) }}>
                                                    <div className="row">
                                                        <div className="col-md-11 col-10">
                                                            <div className={`research__item text-left transition-3`}>
                                                                <h3 className="research__title-info">{item.question}</h3>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-1 col-2">
                                                            <HiOutlineChevronDown color='#000000' size={24} />
                                                        </div>
                                                    </div>
                                                </button>
                                            </h2>
                                            <div id={item.control} className="accordion-collapse collapse" aria-labelledby={item.id} data-bs-parent="#checkoutAccordion">
                                                <div className="accordion-body row">
                                                    <hr />
                                                    <div className='col-12'>
                                                        {
                                                            item.answer.map((x, index) => <p key={index} className='research__title-info'>{x.para}</p>)
                                                        }
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

export default FAQs;