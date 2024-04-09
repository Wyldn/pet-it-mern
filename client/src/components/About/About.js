import React from 'react';
import './About.css';
import logoPng from '../../Assets/logo.png'
import MainBody from '../MainBodyLayOut/MainBody'


export const About = () => {
    const description = `Welcome to Thrift-tee, the place where 
     you can make a difference. whether u can donate or purchase clothes and would be donated to the salvation army. Join now and make a difference!`
    return (
        <MainBody>
            <section id="About">
                <main className="main" maxwidth="md">
                    <div className="about">
                    <div className="_img"
                        style={{ 
                            background: "url(" + logoPng + ")",
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: 'turquoise',
                        }}
                    >
                    </div>
                        <div className="_content_wrapper">
                            <h2>
                                {description}
                            </h2>
                        </div>
                    </div>
                </main>
            </section>
        </MainBody>
    );
};

export default About;