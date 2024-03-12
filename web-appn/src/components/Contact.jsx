 import React from "react";
 import './Contact.css'
import NavBar from "./NavBar";



 const Contact=()=>{
    return(
        <React.Fragment>
           <NavBar/>
            <section className="section-main">
                
                <hr></hr>
                <h1 className="contact-heading">Lets work together !</h1>
                <div className="contact-section">
                    <div className="conatct-div">
                        <p className="contact-p"> 
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Dolores excepturi corporis eum eius, officia aut aliquid
                          delectus nihil, laudantium laborum eveniet 
                           dolor! Porro eos totam aliquam necessitatibus id possimus!
                        </p>
                       
                        <div>
                       <div className="contact-display">
                       <label className="contact-i-phone"><p>
                         <i class="fa-solid fa-phone" />&nbsp;&nbsp;&nbsp;9908313201</p>
                         </label>
                       </div>
                      <div className="contact-display">
                      <label className="contact-i-mail"><p>
                       <i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;&nbsp;adithyav7777@gmail.com</p>
                       </label>
                      </div>
                       <div className="contact-display">
                       <label>
                       <i class="fa-solid fa-location-dot"></i><address>&nbsp;&nbsp;&nbsp;
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Fugiat, expedita?
                       </address>
                       </label>
                       </div>
                        </div>
                    </div>
                    <br />
                        {/* <form >
                            <label>
                                <input type="text" name="fname" placeholder="fullname" />
                                
                            </label>
                        </form> */}
                </div><br></br>
                <hr></hr>
                <div className="fooot">
                    <p>Copyright <i class="fa-regular fa-copyright"></i> 2023 | Bgneius </p>
                    <p className="fooot-icons">
                     <i class="fa-brands fa-instagram" />&nbsp;&nbsp;
                    <i class="fa-brands fa-facebook" />&nbsp;&nbsp;
                    <i class="fa-brands fa-youtube"></i>
                    </p>
                    
                    
                </div>
            </section>
        </React.Fragment>
    )
 }
 export default Contact