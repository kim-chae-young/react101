import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Footer from '../components/Footer';

function AboutText({title, desc, image, image2x}){
    return (
        <div>
            <div className="aiLeft">
                <img src={image} srcSet={image2x} alt={title} />
            </div>
            <div className="aiRight">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </div>
        
    )
}
const aboutMe = [
    {
        id:1,
        title:'저는 약속을 중요시 합니다.',
        desc: '항상 부득이한 일이 아니고서는 약속을 지키려고 합니다.학교를 다닐 때도 초등학교부터 대학교까지 16년동안 아파서 병원에 가지 않는 이상 지각을 한적이 한번도 없고 항상 일찍 가서 기다리곤 했습니다. 자신이 한 약속에 책임을 다하는 사람이 사회생활을 할 때도 맡은일에 대해서 책임을 다하는 사람이라고 생각합니다. 때문에 이런한 성격을 가지고 앞으로도 내가 맡은 일을 끝까지 끌고 갈 생각입니다.',
        image: '../img/20181104_113405.jpg',
        image2x: '../img/20181104_113405@2.jpg 2x, ../img/20181104_113405@3.jpg 3x'
    },{
        id:2,
        title:'포기를 모르는 사람.',
        desc: '성격검사를 해도 끝까지 항상 계획적이고  사람이라고 나옵니다. 마찬가지고 한가지 안풀리는 것이 있으면 계속 생각나고 그거먼저 해결해야 속이 풀리기 때문에 항상 끝까지 책임을 지는 성격입니다. 2018년 3학년 때 단기어학연수를 다녀올 기회가 있었는데 처음엔 떨어졌지만 두번째도 지원을 해 면접을 봤고 2019년 1월 결국 동계방학 단기 어학연수를 다녀올 수 있었습니다. 비록 영어는 능숙하지 못했지만 짧은 기간이라도 해외연수를 다녀온것이 저한테는 많은 생각을 하게 했습니다. 이러한 저의 이런 성격으로 맡은 일은 끝까지 맡고 싶습니다.',
        image: '../img/20190414_150952_556.jpg',
        image2x: '../img/20190414_150952_556@2.jpg 2x, ../img/20190414_150952_556@3.jpg 3x'
    },{
        id:3,
        title:'이 길을 선택한 이유',
        desc: '저는 예전부터 컴퓨터를 가까이 했었고 학원도 다니면서 여러 종류의 자격증을 취득할수 있었습니다. 그 결과로 전공도 멀티미디어 컨텐츠과로 선택하면서 디자인과 코딩을 배울수 있었고 최근 국비학원까지 다니게 되면서 흥미가 생겨 최근까지도 자격증 공부를 하게 되었고 앞으로 더 성장을 하는 기회로 삼고 싶습니다.',
        image: '../img/20201002_135216_406.jpg',
        image2x: '../img/20201002_135216_406@2.jpg 2x, ../img/20190414_150952_556@3.jpg 3x'
    }
]

function About(){
    return (
        <div id="wrap">
            <Header color="white" />
            <main id="main">
                <section id="aboutcont">
                    <div className="container">
                        <div className="titleWrap">
                            <Title text={['about','me','About me']}/>                            
                        </div>
                        <div className="aboutcont">
                            {aboutMe.map((txt)=>(
                                <AboutText key={txt.id} title= {txt.title} desc={txt.desc} image={txt.image} image2x={txt.image2x}/>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
};
export default About;