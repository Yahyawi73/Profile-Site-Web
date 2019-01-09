import React from 'react';

const Home = () => {
    return (
        <section id="home" className="home-1 parallax one-page-section">
            <div className="page-table">
                <div className="table-cell text-center">
                    <div className="avatar-hero">
                        <img src="image/home-avatar.jpg" alt="avatar-hero" />
                    </div>
                    <h1>Hi, I'm Norman Doe</h1>
                    <h2 className="typer-title">let's work together </h2>
                    <a href="#about" className="scroll home-s-btn hor-center"><span className="dot center"></span></a>
                </div>
            </div>
            <div id="particles-js"></div>
        </section>
    )
}

export default Home;

