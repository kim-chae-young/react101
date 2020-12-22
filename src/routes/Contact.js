import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


function Contact(){
    return (
        <div id="wrap">
            <Header />
            <main id="main">
                <section id="contactCont">
                    <div className="container">                        
                        <div className="contactCont">
                            <div>CHOOSE<br /> TO PICK ME</div>                            
                        </div>
                    </div>
                    <p className="email">EMAIL</p>
                    <p className="address">highlight9512@daum.net</p>
                    <p className="sns">
                        <Link to="/YOUTUBE">YOUTUBE</Link> 
                        <Link to="/INSTAGRAM">INSTAGRAM</Link>   
                        <Link to="/GITHUB">GITHUB</Link>   
                        <Link to="/CAFE">CAFE</Link>
                    </p>
                </section>
            </main>
        </div>
    )
};
export default Contact;