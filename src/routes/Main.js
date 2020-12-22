import React from 'react';
import Header from '../components/Header';

function Main(){
    return (
        <div id="wrap">
            <Header />
            <main id="main">
                <section id="mainCont">
                    <div className="container">
                        <div className="mainCont">
                            <div>HUMANS ARE</div>
                            <div className="box">PEOPLE</div> <div className="who">WHO</div> 
                            <div> LIVE</div>
                            <div>LONGING FOR PARAISE</div>
                        </div>                        
                    </div>
                </section>
            </main>
        </div>
    )
};
export default Main;