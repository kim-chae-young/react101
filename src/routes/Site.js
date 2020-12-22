import axios from 'axios'
import React from 'react'
import Header from '../components/Header';
import Title from '../components/Title'
import Footer from '../components/Footer'

function Portfolio({id, link, title, image, category}){
    return (
        <li>
            <a href={link} target="_blank" rel="noreferrer">
            <div className="site">
                <div className="siteImg">
                    <img src={image} alt={title} />
                </div>
                <div className="siteText">
                    <h2>{title}</h2>
                    <p>{category}</p>
                </div>
            </div>
            </a>
        </li>
    )  
}


class Site extends React.Component {
    state = {
        isLoading: true,
        ports: []
    };

    getSite = async () => {
        const {
            data: {
                data: {ports},
            },
        } = await axios.get("https://kim-chae-young.github.io/dothome1/site.json")
        //console.log(refers)
        this.setState({ ports, isLoading: false });
    }

    componentDidMount(){
        setTimeout(() => {
            this.getSite();
        }, 3000);
    }
    
    render () {
        const { isLoading, ports } = this.state;
        return (
            <div id="wrap">
                <Header />
                { isLoading ? (
                    <div className="loading">
                        <div class="box dot4">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                        </div>
                    </div>
                ) : (
                    <main id="main">
                        <section id="siteCont">
                            <div className="container">
                                <div className="titleWrap">
                                    <Title text={['site','book','site book']} />
                                </div>
                                <div className="siteCont">
                                    <ul>
                                        {ports.map((info) => (
                                            <Portfolio 
                                                key={info.id}
                                                id={info.id}
                                                link={info.link}
                                                title={info.title}
                                                image={info.image}
                                                category={info.category}
                                            />
                                        ))}
                                    </ul>
                                    
                                </div>
                            </div>
                        </section>
                    </main>
                )}                
                <Footer />
            </div>
        )
    }
}

export default Site