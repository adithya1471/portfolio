import React from "react";
import './Services.css'
import NavBar from "./NavBar.jsx";



const Services=()=>{
    return(
        <React.Fragment>
             <NavBar/>
            <section>
           
                <div className="header">
                   
                    <div className="header-div">
                        <img src="./Images/editing.jpg" alt="" className="header-img"/>
                        <h1 className="header-div-h">Editing</h1>
                        <p className="header-div-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Nam alias aperiam voluptates ipsa ullam soluta!</p>
                    </div>
                    <div className="header-div">
                        <img src="./Images/train.jpg" className="header-img"/>
                        <h1 className="header-div-h">Sound Desingn</h1>
                        <p className="header-div-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Nam alias aperiam voluptates ipsa ullam soluta!</p>
                    </div>
                    <div className="header-div">
                        <img src="./Images/peace.jpg" className="header-img"/>
                        <h1 className="header-div-h">Color Correction</h1>
                        <p className="header-div-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Nam alias aperiam voluptates ipsa ullam soluta!</p>
                    </div>
                </div>

                

                <div className="header-middle">
                    <h1 className="header-middle-h">Have different requirements for your projects</h1>
                    <p className="header-middle-p"> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Eius animi neque repellendus quos dolor. Officiis assumenda nostrum enim autem. Culpa?</p>
                    <button type="submit" className="services-button">
                        Contact Me
                    </button>
                </div>
            </section>
            
        </React.Fragment>
    )
}
export default Services;