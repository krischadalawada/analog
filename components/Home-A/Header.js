import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import links from '../../data/linkData';
import useSticky from '../../hooks/useSticky';
import { useRouter } from 'next/router';
import { searchText } from '../../redux/features/coursesSlice';
import LoginData from '../../data/LoginMenuData';
import useAuth from '../../hooks/useAuth';
import Sidebar from '../Common-A/SideBar';
import useWindowSize from '../Common-A/Window';
import { MdOutlineEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';

const Header = () => {
   // handle sidebar show
   const [show, setShow] = useState(false);
   // handle close
   const handleClose = () => setShow(false);
   // handle sidebar show
   const handleShow = () => setShow(true);
   //  sticky
   const { headerSticky } = useSticky();
   // searchValue
   const [searchValue, setSearchValue] = useState('');
   // dispatch
   const dispatch = useDispatch();
   // user
   const { user } = useAuth();
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

   const route = useRouter().pathname
   const { width, height } = useWindowSize()

   return (
      <>
         <header>
            <div id="header-sticky" className={"header__area header__transparent"} style={{ marginTop: '2%', caretColor: 'transparent' }}>
               <div className="container header__bottom">
                  <div className="elevate p-relative">
                     <div className="row align-items-center">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                           <div className="header__bottom-left d-flex align-items-center">
                              <div className="logo">
                                 <Link href="/">
                                    <a >
                                       <img src="/assets/images/logo/logo-new.png" alt="logo" />
                                    </a>
                                 </Link>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-6 col-6">
                           <div className="header__bottom-right d-flex justify-content-end align-items-center pl-30">
                              <div className="main-menu main-menu-2 ml-30 pl-30 d-none d-lg-block">
                                 <nav id="mobile-menu">
                                    <ul>
                                       {!user?.email &&
                                          links.map((link) => {
                                             return <li key={link.id}>
                                                <Link href={`${link.url}`}><a className={(route === link.url ? 'selected' : '')}>{link.name}</a></Link>
                                             </li>
                                          })
                                       }

                                       {
                                          user?.email &&
                                          LoginData.map((link) => {
                                             return <li key={link.id} className={link.submenu ? `has-dropdown` : ''}>
                                                <Link href={`${link.url}`}><a >{link.name}</a></Link>
                                                <ul className={link.submenu ? `submenu` : ''}>
                                                   {
                                                      link?.submenu?.map((sub_menu, index) => {
                                                         return <li key={sub_menu.id}>
                                                            <Link href={`${sub_menu.url}`}><a >{sub_menu.name}</a></Link>
                                                         </li>
                                                      })
                                                   }
                                                </ul>
                                             </li>
                                          })
                                       }
                                       <a className='focus-trans' href="https://wa.me/916301529232" target="_blank" rel="noopener noreferrer">
                                          <li className='whatsapp'>
                                             <img className='wa pointer' src="/assets/images/home/whatsapp.png" alt="logo" />
                                          </li>
                                       </a>
                                    </ul>
                                 </nav>
                              </div>
                              <a className='focus-trans' href="tel:+918494990066" target="_blank" rel="noopener noreferrer">
                                 <li className='phone'>
                                    <BsFillTelephoneFill color='#fff' />
                                 </li>
                              </a>
                              <div className="header__hamburger d-lg-none">
                                 <button type="button" onClick={handleShow} className="hamurger-btn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="slider__shape">
                        <div className="slider__shape-5 row">
                           <Link href="/civil-results">
                              <a className='upsc pointer'>UPSC Results</a>
                           </Link>
                           <Link href="/test-series/index.html">
                              <a className='tseries pointer'>Test Series</a>
                           </Link>  
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default Header;
