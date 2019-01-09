import React from 'react';

const Work = () => (
    <section id="work" className="section one-page-section">
        <div className="container">
            <div className="section-title">
                <h2>My Portfolio</h2>
            </div>

            <div className="row">
                <div className="col-xs-12">
                    <ul id="work-list" className="text-center">
                        <li className="main-color">
                            <a href="/" className="filter filter-active effect" data-filter="*">all</a>
                        </li>
                        <li className="main-color">
                            <a href="/" className="filter effect" data-filter=".web">web</a>
                        </li>
                        <li className="main-color">
                            <a href="/" className="filter effect" data-filter=".design">design</a>
                        </li>
                        <li className="main-color">
                            <a href="/" className="filter effect" data-filter=".photography">photography</a>
                        </li>
                        <li className="main-color">
                            <a href="/" className="filter effect" data-filter=".music">Music</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row filtr-container">

                <div className="col-sm-6 col-md-4 filtr-item design web">
                    <div className="single-work mb-30">
                        <a href="image/wok-1.jpg" className="popup-link">
                            <img className="effect" src="image/wok-1.jpg" alt="work-1" />
                            <div className="work-overlay effect">
                                <h3>Project Title</h3>
                                <p>WEB DEVELOPMENT</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 filtr-item music design">
                    <div className="single-work mb-30">
                        <a href="image/wok-2.jpg" className="popup-link">
                            <img className="effect" src="image/wok-2.jpg" alt="work-2" />
                            <div className="work-overlay effect">
                                <h3>Project Title</h3>
                                <p>MUSIC</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 filtr-item photography web" >
                    <div className="single-work mb-30">
                        <a href="image/wok-3.jpg" className="popup-link">
                            <img className="effect" src="image/wok-3.jpg" alt="work-3" />
                            <div className="work-overlay effect">
                                <h3>Project Title</h3>
                                <p>PHOTOGRAPHY</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 filtr-item web music" >
                    <div className="single-work mb-30">
                        <a href="image/wok-4.jpg" className="popup-link">
                            <img className="effect" src="image/wok-4.jpg" alt="work-4" />
                            <div className="work-overlay effect">
                                <h3>Project Title</h3>
                                <p>WEB DEVELOPMENT</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 filtr-item design photography" >
                    <div className="single-work mb-30">
                        <a href="image/wok-2.jpg" className="popup-link">
                            <img className="effect" src="image/wok-2.jpg" alt="work-2" />
                            <div className="work-overlay effect">
                                <h3>Project Title</h3>
                                <p>WEB DESIGN</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4 filtr-item photography" >
                    <div className="single-work mb-30">
                        <a href="image/wok-6.jpg" className="popup-link">
                            <img className="effect" src="image/wok-6.jpg" alt="work-6" />
                            <div className="work-overlay effect">
                                <h3>Project Title</h3>
                                <p>PHOTOGRAPHY</p>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
)

export default Work;