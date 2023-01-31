import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import Link from 'next/link';
import Collapsible from 'react-collapsible';
import useAuth from '../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { searchText } from '../../redux/features/coursesSlice';
import links from '../../data/linkData';

const Sidebar = ({ show, handleClose, dynammicPageHeader = false }) => {
   const { user, logout } = useAuth();
   // searchValue
   const [searchValue, setSearchValue] = useState('');
   // dispatch
   const dispatch = useDispatch();
   // router
   const router = useRouter();
   // handleSubmit
   const handleSubmit = e => {
      e.preventDefault();
      if (!searchValue) {

      }
      else {
         dispatch(searchText(searchValue))
         router.push('/search-courses')
      }
   }
   return (
      <>

         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  <div className="offcanvas__logo logo">
                     {
                        dynammicPageHeader ? <Link href="/">
                           <a >
                              <img src={"/assets/images/logo/logo-new.png"} alt="logo" />
                           </a>
                        </Link> : <Link href="/">
                           <a >
                              <img src="/assets/images/logo/logo-new.png" alt="logo" />
                           </a>
                        </Link>
                     }

                  </div>
                  <div className="offcanvas__close">
                     <button className="offcanvas__close-btn" onClick={handleClose}>
                        <i className="fal fa-times"></i>
                     </button>
                  </div>
               </Offcanvas.Header>

               <Offcanvas.Body>

                  <div className="sidebar__content">
                     <div className="mobile-menu">
                        <nav id="mobile-menu">
                           <ul>
                              <>
                                 {
                                    links.map((item, index) =>
                                       <div key={index} className='single_link iconAdd '>
                                          <li><Link href={item.url}><a>{item.name}</a></Link></li>
                                       </div>
                                    )
                                 }
                              </>
                           </ul>
                        </nav>
                     </div>
                     <div className="offcanvas__social mt-20">
                        <ul>
                           <li><a href="https://www.facebook.com/analogias.academy/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                           <li><a href="https://twitter.com/analog_ias?lang=en" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                           <li><a href="https://www.youtube.com/@analogiasacademy2081" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                           <li><a href="https://in.linkedin.com/in/analogias-academy" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                     </div>
                  </div>

               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;