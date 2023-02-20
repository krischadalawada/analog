import React from "react";
import Link from "next/link";

const ComingSoon = () => {

    return (
        <section className="error__area pt-120 pb-120" style={{ caretColor: 'transparent' }}>
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xxl-8">
                     <div className="error__content text-center">
                        <div className="error__thumb m-img mb-45">
                           <img src={"/" + "assets/images/under-construction.png"} alt="" />
                        </div>
                        <div className="error__content">
                           <h3 className="error__title">Coming Soon</h3>
                           <p>Please stay tuned!</p>
                           <div className="error__btn">
                              <Link href="/">
                                 <a className="tp-btn-secondary">Back to home</a>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    );
}

export default ComingSoon;