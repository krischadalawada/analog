import React, { useState } from 'react';
import Link from 'next/link';
import { TopperList } from '../../data/ToppersData';
import Select from 'react-select';

const ToppersGrid = () => {

   const Toppers = TopperList.slice(0, 4)

   const options = [
      { value: 'All', label: 'ALL' },
      { value: '2021', label: '2021' },
      { value: '2020', label: '2020' },
      { value: '2019', label: '2019' },
      { value: '2018', label: '2018' },
      { value: '2017', label: '2017' },
      { value: '2016', label: '2016' },
   ]

   const [toppers, setToppers] = useState(TopperList)

   const onSelectYear = (e) => {

      if (e.value !== 'All') {
         var filteredList = TopperList.filter(x => x.year == e.value)
         setToppers(filteredList)
      } else {
         setToppers(TopperList)
      }
   }

   return (
      <>
         <section className="research__area research__border pt-60 pb-60 p-relative z-index-1">
            <div className="container-lg">
               <div className="row pb-120" style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                     <Select
                        options={options}
                        onChange={onSelectYear}
                        defaultValue={options[0]}
                     />
                  </div>
               </div>
               <div className="row">
                  {
                     toppers.map(item => {
                        return <div key={item.title + item.path} className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-6">
                           <div className={`research__item text-left mb-30 transition-3`}>
                              <div className="research__thumb mb-35">
                                 <img className='toppers' src={item.img.length > 0 ? (item.path + item.img) : "assets/images/no-image.png"} alt="" />
                              </div>
                              <div className="research__content">
                                 <h3 className="research__title-topper">{item.title}</h3>
                                 <div className="row">
                                    <div className="col-6">
                                       <p className="t-rank">AIR {item.rank}</p>
                                    </div>
                                    <div className="col-6">
                                       <p className="t-year">Year {item.year}</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     })
                  }
               </div>
            </div>
         </section>
      </>
   );
};

export default ToppersGrid;