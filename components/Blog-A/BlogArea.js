import { useEffect, useState } from 'react';
import BlogPagination from '../common/BlogPagination';
import BlogRightSide from './BlogRightSide';
import SingleBlog from './SingleBlog';
import { BlogsData } from '../../data/BlogData';
import Link from 'next/link';
import { useRouter } from "next/router";

const BlogArea = () => {
   // router
   const router = useRouter();
   const category = router.query?.category
   const mnYr = router.query?.mnYr
   //blogs
   const [blogs, setBlogs] = useState(BlogsData)
   // current page
   const [currentPage, setCurrentPage] = useState(1);
   // per page
   const [blogPerPage, setBlogPerPage] = useState(5);
   // index of last page
   const indexOfLastPage = currentPage * blogPerPage;
   // index of first page
   const indexOfFirstPage = indexOfLastPage - blogPerPage;
   // current blogs
   const currentBlogs = blogs.slice(indexOfFirstPage, indexOfLastPage);
   // paginate
   const paginate = (number) => {
      setCurrentPage(number)
   }
   //categories
   const categories = [...new Set(BlogsData.flatMap(({ category }) => category))]
   const archive = [...new Set(BlogsData.flatMap(({ monthYear }) => monthYear))]

   useEffect(() => {

      if (category) {
         var filteredBlogs = BlogsData.filter(x => x.category === category)
         setBlogs(filteredBlogs)
      } else if (mnYr) {
         var filteredBlogs = BlogsData.filter(x => x.monthYear === mnYr)
         setBlogs(filteredBlogs)
      }

   }, [router.query])

   useEffect(() => {

   }, [BlogsData])

   return (
      <>
         <section className="blog__area pt-120 pb-100">
            <div className="container-lg">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__wrapper pr-20">
                        {
                           currentBlogs.map(blog => <SingleBlog key={blog.blogTitle} blog={blog} />)
                        }
                        <div className="basic-pagination">
                           <BlogPagination blogPerPage={blogPerPage} toltalBlogs={blogs.length}
                              currentPage={currentPage} paginate={paginate} />
                        </div>
                     </div>
                  </div>
                  {/* BlogRightSide */}
                  <>
                     <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <div className="blog__sidebar pl-70">

                           <div className="sidebar__widget mb-55">
                              <div className="sidebar__widget-head mb-35">
                                 <h3 className="sidebar__widget-title">RECENT POSTS</h3>
                              </div>
                              <div className="sidebar__widget-content">
                                 <div className="rc__post-wrapper">
                                    {
                                       blogs.slice(0, 5).map(blog => {
                                          return <div key={blog?.id} className="rc__post d-flex align-items-start">
                                             <div className="rc__thumb mr-20">
                                                <Link href={`/blog/${blog?.id}`}>
                                                   <a >
                                                      <img src={blog?.img} alt="" style={{ objectFit: 'cover' }} />
                                                   </a>
                                                </Link>
                                             </div>
                                             <div className="rc__content">
                                                <h6 className="rc__title">
                                                   <Link href={`/blog/${blog?.id}`}>
                                                      <a>{blog?.blogTitle}</a>
                                                   </Link>
                                                </h6>
                                                {/* <div className="rc__meta">
                                                   <span>{blog?.postedOn}</span>
                                                </div> */}
                                             </div>
                                          </div>
                                       })
                                    }

                                 </div>
                              </div>
                           </div>
                           <div className="sidebar__widget mb-55">
                              <div className="sidebar__widget-head mb-35">
                                 <h3 className="sidebar__widget-title">CATEGORIES</h3>
                              </div>
                              <div className="sidebar__widget-content">
                                 <ul>
                                    <li key={'All'}>
                                       <a onClick={() => setBlogs(BlogsData)}>All</a>
                                    </li>
                                    {
                                       categories.map((cate, index) =>
                                          <li key={index}>
                                             <a onClick={() => setBlogs(BlogsData.filter(x => x.category === cate))}>{cate}</a>
                                          </li>
                                       )
                                    }
                                 </ul>
                              </div>
                           </div>
                           <div className="sidebar__widget mb-55">
                              <div className="sidebar__widget-head mb-35">
                                 <h3 className="sidebar__widget-title">ARCHIVE</h3>
                              </div>
                              <div className="sidebar__widget-content">
                                 <ul>
                                    <li key={'All'}>
                                       <a onClick={() => setBlogs(BlogsData)}>All</a>
                                    </li>
                                    {
                                       archive.map((arch, index) =>
                                          <li key={index}>
                                             <a onClick={() => setBlogs(BlogsData.filter(x => x.monthYear === arch))}>{arch}</a>
                                          </li>
                                       )
                                    }
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </>

               </div>
            </div>
         </section>
      </>
   );
};

export default BlogArea;