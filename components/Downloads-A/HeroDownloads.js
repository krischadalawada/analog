import Link from 'next/link';

const HeroDownloads = (props) => {

   return (
      <>
         <section className="slider__area pt-200 pb-160 include-bg d-flex align-items-center bg-downloads">
            <div className="container">
               <h3 className='f-50 text-center white mt-40'>{props.title}</h3>
            </div>
         </section>
      </>
   );
};

export default HeroDownloads;