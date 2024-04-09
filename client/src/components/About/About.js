import React from 'react';
import './About.css';
import logoPng from '../../Assets/logo.png'
export const About = () => {
    const description = `Welcome to Thrift Tee, your ultimate destination for all things thrifted fashion and charitable giving! At Thrift Tee, we believe in sustainable fashion and giving back to the community. Our platform allows you to browse a wide selection of pre-loved clothing and apparel, curated from sellers who share our passion for eco-friendly and budget-friendly shopping. Whether you're looking for vintage gems, trendy pieces, or everyday essentials, you'll find a diverse range of options to suit your style and budget.What sets Thrift Tee apart is our commitment to making a positive impact beyond fashion. With every purchase made on our platform, a portion of the proceeds goes towards supporting the Salvation Army, a renowned charitable organization dedicated to helping those in need. Your fashion choices can now contribute to meaningful causes and create a ripple effect of goodness in the world.`
    return (
        <section id="About">
            <main className="main" maxwidth="md">
                <div className="about">
                <div className="_img"
                    style={{ 
                        background: "url(" + thrift-tee-logoPng + ")",
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
    );
};

export default About;