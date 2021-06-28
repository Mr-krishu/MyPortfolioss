import React from 'react';

const Contact = () => {
    return (
        <>
           <div className="contact_info pt-5">
               <div className="container-fluid">
                   <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                            {/* phone number */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt=""></img>
                                <div className="contact_info_title">
                                    Phone:&nbsp;
                                </div>
                                <div className="contact_info_text">
                                    +91 9470660158
                                </div>
                            </div>
                            {/* email */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt=""></img>&nbsp;
                                <div className="contact_info_title">
                                    Email:&nbsp;
                                </div>
                                <div className="contact_info_text">
                                    kkant785@gmail.com
                                </div>
                            </div>
                            {/* address */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                                <img src="" alt=""></img> &nbsp;
                                <div className="contact_info_title">
                                    Address:&nbsp;
                                </div>
                                <div className="contact_info_text">
                                    Electronic City Phase 1, Bangalore
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
           </div>

           {/* contact us form */}
           <div className="contact_form">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-10 offset-lg-1">
                           <div className="contact_form_container py-5">
                               <div className="contact_form_title fw-bold">
                                   Get in Touch
                               </div>
                               <form id="contact_form">
                                    <div className="contact_form_name d-flex justify-content-between align-items-between">
                                        <input type="text" id="contact_form_name" className="contact_form_name input_field" 
                                        placeholder="Your name" required="true"/>
                                        <input type="email" id="contact_form_email" className="contact_form_email input_field" 
                                        placeholder="Your email" required="true"/>
                                        <input type="number" id="contact_form_phone" className="contact_form_phone input_field" 
                                        placeholder="Your phone number" required="true"/>
                                    </div>
                                    <div className="contact_form_text mt-5">
                                        <textarea className="text_field contact_form_message" 
                                        placeholder="Message........" cols="147" rows="10"></textarea>
                                    </div>
                                    <div className="contact_form_button">
                                        <button type="submit" className=" btn btn-success button contact_submit_button">Send Message</button>
                                    </div>
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Contact
