import type { CSSProperties } from "react";

function Home() {

    return (

        <div className="home">
            <div className="left">
                <h1 className="reveal-text">
                    <span style={{ "--i": 0 } as CSSProperties}>Hey, I’m</span><br />
                    <span style={{ "--i": 1 } as CSSProperties}>Sara!</span>
                </h1>
                <hr />
                <h4>Coding creatively to make a change</h4>
                <hr />
                <a className="home-links" href="portfolio/src/assets/Sara_Resume_6-13-26.pdf" download="Sara_Adams_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                <a className="home-links" href="https://www.linkedin.com/in/saraadamscs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="home-links" href="https://github.com/sadamscs" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="home-links" href="mailto:sa.adams.027@gmail.com">My Email</a>
            </div>
            <div className="right">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    <div className="descChild"></div>
                    <div className="desc">
                        <h4 className="reveal-text">
                            I’m a Junior at the{" "}
                            <span style={{ "--i": 2, "--var1": "#ffebdc", "--var2": "#dcfaff" } as CSSProperties}>
                                University of Florida
                            </span> {" "}
                            majoring in computer science and minoring in digital arts and sciences.{" "}
                            <br /><br />
                            In my free time I love doodling, crocheting, and making silly websites! I also love collecting old technology and vinyl records.
                            <br /><br />
                            Please don’t hesitate to reach out!
                        </h4>
                    </div>
                </div>
            </div>
        </div>);
};

export default Home;