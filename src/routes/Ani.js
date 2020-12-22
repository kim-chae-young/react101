import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';
function AniInfo({title, source}){
    return (
        <div className="ani">
            <div className="ani-left">
                <div className="view">
                    <iframe src={source} title={title}></iframe>  
                    <h3>{title}</h3>
                </div>                        
            </div>            
        </div>
    )
}

const AniData = [
    {
        id:'1',
        source:'https://kim-chae-young.github.io/dothome1/effect/react/animation01.html',
        title:'EFFECT ANIMATION 01'
       
    },{
        id:'2',
        source:'https://kim-chae-young.github.io/dothome1/effect/react/animation02.html',
        title:'EFFECT ANIMATION 02'
        
    },{
        id:'3',
        source:'https://kim-chae-young.github.io/dothome1/effect/react/animation03.html',
        title:'EFFECT ANIMATION 03'
    },{
        id:'4',
        source:'https://kim-chae-young.github.io/dothome1/effect/react/animation04.html',
        title:'EFFECT ANIMATION 04'
    },{
        id:'5',
        source:'https://kim-chae-young.github.io/dothome1/effect/react/animation05.html',
        title:'EFFECT ANIMATION 04'
    },{
        id:'6',
        source:'https://kim-chae-young.github.io/dothome1/effect/react/animation06.html',
        title:'EFFECT ANIMATION 04'
    },{
        id:'7',
        source:'https://kim-chae-young.github.io/dothome1/effect/react/animation07.html',
        title:'EFFECT ANIMATION 04'
    },{
        id:'8',
        source:'https://kim-chae-young.github.io/dothome1/effect/react/animation08.html',
        title:'EFFECT ANIMATION 04'
    },{
        id:'9',
        source:'https://kim-chae-young.github.io/dothome1/effect/react/animation09.html',
        title:'EFFECT ANIMATION 04'
    }
]
function Ani(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="anicont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['animation','book','animation book']}/>   
                        </div>
                        <div className="anicont">
                            {AniData.map((site) => {
                                // console.log(site.source[0])
                                return <AniInfo 
                                    key={site.id}                                   
                                    source={site.source}
                                    title={site.title}
                                />
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
};
export default Ani;