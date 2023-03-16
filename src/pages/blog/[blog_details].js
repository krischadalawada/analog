import { useRouter } from "next/router";
import Head from 'next/head';
import Header from "../../../components/Home-A/Header";
import { BlogsData } from "../../../data/BlogData";
import Link from 'next/link';
import HeroBlogDetails from "../../../components/Blog-A/HeroBlogDetails";
import TipTapRender from "../../../components/Blog-A/TipTapRender";

const BlogDetails = () => {

   // router
   const router = useRouter();
   // id
   const id = router.query.blog_details;
   // current blog
   const blog = BlogsData.filter(x => x.id === id)[0]
   // all blogs
   const blogs = BlogsData.filter(x => x.id !== id)
   //categories
   const categories = [...new Set(BlogsData.flatMap(({ category }) => category))]
   const archive = [...new Set(BlogsData.flatMap(({ monthYear }) => monthYear))]
   const date = blog?.monthYear.split(" ")

   return (
      <>
         <Header />
         <HeroBlogDetails />

         <section className="blog__area pt-80 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__wrapper postbox__details pr-20">
                        {
                           blog &&
                           <div className="postbox__item transition-3 mb-70">
                              <div className="postbox__content">
                                 <h3 className="postbox__title">{blog?.blogTitle}</h3>
                                 <div className="postbox__meta">
                                    <a> {date[0]} {blog?.day}, {date[1]} </a>
                                    <a>- {blog?.author}</a>
                                 </div>
                                 <div className="postbox__text mb-40">
                                    <p>{blog?.intro}</p>
                                 </div>
                                 <TipTapRender content={blog.content} />
                                 <div className="postbox__text mb-40">
                                    <p>Filed under: <a className="tp-btn pointer" onClick={() => router.push({
                                       pathname: '/blog',
                                       query: { category: blog?.category },
                                    })}>{blog?.category}</a></p>
                                 </div>
                              </div>
                           </div>
                        }
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
                                                <Link href={`/blog-details/${blog?.id}`}>
                                                   <a >
                                                      <img src={blog?.img} alt="" style={{ objectFit: 'cover' }} />
                                                   </a>
                                                </Link>
                                             </div>
                                             <div className="rc__content">
                                                <h6 className="rc__title">
                                                   <Link href={`/blog-details/${blog?.id}`}>
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
                                    {
                                       categories.map((cate, index) =>
                                          <li key={index}>
                                             <a onClick={() => router.push({
                                                pathname: '/blog',
                                                query: { category: cate },
                                             })}>{cate}</a>
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
                                    {
                                       archive.map((arch, index) =>
                                          <li key={index}>
                                             <a onClick={() => router.push({
                                                pathname: '/blog',
                                                query: { mnYr: arch },
                                             })}>{arch}</a>
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

export default BlogDetails;