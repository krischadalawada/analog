import Link from 'next/link';
import links from '../../data/linkData';

const Footer = ({ white_bg = '' }) => {
   return (
      <>
         <footer>
            <div className="footer__area">
               <div className={`footer__top pt-95 pb-45 bg-blue`}>
                  <div className="footer__container" style={{ paddingLeft: '3%', paddingRight: '3%' }}>
                     <div className="row">
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-7">
                           <div className="footer__widget footer-col-1 mb-50">
                              <div className="footer__logo">
                                 <div className="logo-white">
                                    <Link href="/">
                                       <a>
                                          <img src="/assets/images/logo/logo-white.png" alt="" />
                                       </a>
                                    </Link>
                                 </div>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__widget-info">
                                    <p>Analog Education Society was established with an aim to impart quality coaching for aspirants preparing for Civil Services and other government services.</p>
                                    <a target="_blank" rel="noopener noreferrer" href='https://www.google.com/maps/search/analog+ias+academy/@17.4112973,78.486235,16z'>
                                       <img className='map pointer' src="/assets/images/footer/map-zoomed.png" alt="" />
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-sm-5">
                           <div className="footer__widget mb-50">
                              <div className="footer__widget-content">
                                 <ul>
                                    {
                                       links.map((item, index) =>
                                          <li key={index}>
                                             <a href={item.url}>{item.name}</a>
                                          </li>
                                       )
                                    }
                                 </ul>
                              </div>
                              <div className="footer__social">
                                 <ul>
                                    <li><a href="https://www.facebook.com/analogias.academy/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/analog_ias?lang=en" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="https://in.linkedin.com/in/analogias-academy" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-7">
                           <div className="footer__widget footer-col-4 mb-50">
                              <h3 className="footer__widget-title">Hyderabad: Indira Park</h3>
                              <div className="footer__subscribe">
                                 <p>House No: 1-2-288/32, 1st Floor, Indira Park ‘X’ Road, Domalguda, Hyderabad - 500029.<br /><br /> Ph: 9912441137 <br />Email: info@analogeducation.in</p>
                              </div>

                              <h3 className="footer__widget-title" style={{ marginTop: 50 }}>Hyderabad: Ashok Nagar</h3>
                              <div className="footer__subscribe">
                                 <p>3rd Floor, Kamala Towers, Above OBC Bank, Ashoknagar X Road, Telangana - 500020.<br /><br /> Ph: 9912441138 <br />Email: info@analogeducation.in</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;