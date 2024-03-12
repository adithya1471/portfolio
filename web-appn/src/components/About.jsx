import React from "react";
import './About.css'
import NavBar from "./NavBar.jsx";



const About=()=>{
    return(
        <React.Fragment>
            <NavBar />
            <section>
                
                <div className="body-content">
                    <img src="Images/myphoto.jpg" alt="error" className="img-one"/>
                    <div className="body-padding">
                        <h1 className="body-heading">
                            I'm Adithya,
                            Professional video maker and editor.
                        </h1>
                    <p className="body-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Dolorum fuga atque, odio provident fugit unde, recusandae, 
                         asperiores consequatur sapiente adipisci suscipit! 
                         Tempora maxime alias assumenda. Deserunt quaerat 
                         sapiente nisi quo!
                    </p>
                    <button type="submit" className="about-button">Download Resume</button>
                    </div>
                </div>
                <div>
                    <h1 className="heading"><b>My Business in Numbers</b></h1>
                    <p className="heading-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Quos culpa, possimus consequuntur id totam sed exercitationem
                          dolorum quia officiis vero repellat,
                         In impedit, sequi ducimus inventore nulla dignissimos earum ad ut quod.</p>
                </div>
                <div className="location-items">
                    <div className="location-block">
                    <h1 className="location-heading">170+</h1>
                    <p className="location-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Doloremque, ipsum?</p>
                         </div>
                         <div className="location-block">
                    <h1 className="location-heading">15+</h1>
                    <p className="location-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Doloremque, ipsum?</p>
                         </div>
                         <div className="location-block">
                    <h1 className="location-heading">1000+</h1>
                    <p className="location-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Doloremque, ipsum?</p>
                         </div>
                         <div className="location-block">
                    <h1 className="location-heading">95%</h1>
                    <p className="location-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Doloremque, ipsum?</p>
                         </div>
                </div>
                <div className="about">
                    <h1 className="about-exp">
                        15+ Years Experience in this field 
                    </h1>
                    <div className="about-div">
                        <img src="Images/coder.jpeg" className="img-two"/>
                        <p className="about-div-p">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam, totam tenetur.
                             Quia nesciunt veniam molestiae, officia provident earum accusantium odit 
                             neque deleniti repudiandae iusto, quis natus soluta cumque esse voluptatem 
                             officiis adipisci. Aspernatur ullam non eum fugit sequi deleniti repellat.</p>
                    </div>
                </div>
            </section>
            
        </React.Fragment>
    )
}
export default About