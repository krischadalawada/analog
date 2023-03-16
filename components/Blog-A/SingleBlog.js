import SwiperCore, { Navigation, EffectFade } from 'swiper';
import Link from 'next/link';
import useWindowSize from '../Common-A/Window';

SwiperCore.use([Navigation]);

const SingleBlog = ({ blog }) => {

   const { width, height } = useWindowSize()
   const date = blog?.monthYear.split(" ")

   return (
      <>
         <article className={`postbox__item format-image mb-50 transition-3`}>
            <div className="postbox__content">
               <h3 className="postbox__title">
                  <Link href={`/blog/${blog?.id}`}>
                     <a >{blog?.blogTitle}</a>
                  </Link>
               </h3>
               <div className="postbox__meta">
                  <a> {date[0]} {blog?.day}, {date[1]} </a>
                  <a>- {blog?.author}</a>
               </div>
               <div className="postbox__text">
                  <div className='row'>
                     <div className='col-md-5'>
                        <img className='blog-thumb' src={blog?.img} alt="" />
                     </div>
                     <div className='col-md-7' style={{ marginTop: width > 767 ? 0 : 15 }}>
                        <p>{blog?.intro.substring(0, 300)}..</p>
                        <div className="postbox__read-more">
                           <Link href={`/blog/${blog?.id}`}>
                              <a className="tp-btn">Read More</a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </article>
      </>
   );
};

export default SingleBlog;