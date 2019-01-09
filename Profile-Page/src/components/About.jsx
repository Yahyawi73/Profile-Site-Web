import React from 'react';

const About = () => {
    return (
        <section id="about" className="section one-page-section">
            <div className="container">
                <div className="row">

                    <div className="col-xs-12 col-md-6">
                        <div className="about-content">
                            <h2>Hi There! I'm Norman Doe</h2>
                            <p>I am a professional web designer from Manchester, England. I create beautiful professional websites using best practice accessibility. I enjoy turning complex problems into simple, beautiful and intuitive interface designs.</p>

                            <div className="row">
                                <div className="col-sm-6">
                                    <ul>
                                        <li><span><i className="fa fa-envelope"></i> Email : </span>Norman@gmail.com</li>
                                        <li><span><i className="fa fa-map-marker"></i> Location : </span>4373, El Centro, CA.</li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul>
                                        <li><span><i className="fa fa-calendar"></i> Date of birth : </span>8 Juin 1995</li>
                                        <li><span><i className="fa fa-phone"></i> Phone : </span>+1-202-555-0138</li>
                                    </ul>
                                </div>
                            </div>

                            <ul className="social-list">
                                <li><a href="#effect" className="effect"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#effect" className="effect"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#effect" className="effect"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#effect" className="effect"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#effect" className="effect"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#effect" className="effect"><i className="fa fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-6 skills-section done">

                        <div className="progress-bar-linear">
                            <p className="progress-bar-text">HTML5, CSS3</p>
                            <div className="progress-cont">
                                <span className="main-color progress-bar-text">98%</span>
                            </div>
                            <div className="progress-bar-skills">
                                <div className="progress-bar-line main-color-bg" data-percent="98"></div>
                            </div>
                        </div>
                        <div className="progress-bar-linear">
                            <p className="progress-bar-text">ADOBE PHOTOSHOP</p>
                            <div className="progress-cont">
                                <span className="main-color progress-bar-text">92%</span>
                            </div>
                            <div className="progress-bar-skills">
                                <div className="progress-bar-line main-color-bg" data-percent="92"></div>
                            </div>
                        </div>
                        <div className="progress-bar-linear">
                            <p className="progress-bar-text">PHP &amp; MySQL</p>
                            <div className="progress-cont">
                                <span className="main-color progress-bar-text">86%</span>
                            </div>
                            <div className="progress-bar-skills">
                                <div className="progress-bar-line main-color-bg" data-percent="86"></div>
                            </div>
                        </div>
                        <div className="progress-bar-linear">
                            <p className="progress-bar-text">WORDPRESS</p>
                            <div className="progress-cont">
                                <span className="main-color progress-bar-text">94%</span>
                            </div>
                            <div className="progress-bar-skills">
                                <div className="progress-bar-line main-color-bg" data-percent="94" ></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>)
}
export default About;