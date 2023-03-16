import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchText } from '../../redux/features/coursesSlice';
import { useRouter } from 'next/router';

const BlogRightSide = ({ blogs, dynamicPage = false }) => {
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
         <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="blog__sidebar pl-70">

               <div className="sidebar__widget mb-55">
                  <div className="sidebar__widget-head mb-35">
                     <h3 className="sidebar__widget-title">Recent posts</h3>
                  </div>
                  <div className="sidebar__widget-content">
                     <div className="rc__post-wrapper">
                        {
                           blogs.slice(0, 3).map(blog => {
                              return <div key={blog?._id} className="rc__post d-flex align-items-start">
                                 <div className="rc__thumb mr-20">
                                    <Link href={`/blog-details/${blog?._id}`}>
                                       <a >
                                          <img src={blog?.img} alt="" style={{ objectFit: 'cover' }} />
                                       </a>
                                    </Link>
                                 </div>
                                 <div className="rc__content">
                                    <div className="rc__meta">
                                       <span>{blog?.date}</span>
                                    </div>
                                    <h6 className="rc__title">
                                       <Link href={`/blog-details/${blog?._id}`}>
                                          <a>{blog?.title?.substring(0, 35)}...</a>
                                       </Link>
                                    </h6>
                                 </div>
                              </div>
                           })
                        }

                     </div>
                  </div>
               </div>
               <div className="sidebar__widget mb-55">
                  <div className="sidebar__widget-head mb-35">
                     <h3 className="sidebar__widget-title">Categories</h3>
                  </div>
                  <div className="sidebar__widget-content">
                     <ul>
                        <li>
                           <Link href="/blog">
                              <a>Category</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="/blog">
                              <a>Video & Tips  (4)</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="/blog">
                              <a>Education  (8)</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="/blog">
                              <a>Business  (5)</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="/blog">
                              <a>UX Design  (3)</a>
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="sidebar__widget mb-55">
                  <div className="sidebar__widget-head mb-35">
                     <h3 className="sidebar__widget-title">Tags</h3>
                  </div>
                  <div className="sidebar__widget-content">
                     <div className="tagcloud">
                        <a href="#">Art & Design</a>
                        <a href="#">Course</a>
                        <a href="#">Videos</a>
                        <a href="#">App</a>
                        <a href="#">Education</a>
                        <a href="#">Data Science</a>
                        <a href="#">Machine Learning</a>
                        <a href="#">Tips</a>
                     </div>
                  </div>
               </div>
               <div className="sidebar__widget mb-55">
                  <div className="sidebar__banner w-img">
                     {
                        dynamicPage ? <img src={"/" + "assets/img/blog/banner/banner-1.jpg"} alt="" /> :
                           <img src="assets/img/blog/banner/banner-1.jpg" alt="" />
                     }
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default BlogRightSide;