import type { CSSProperties } from "react";

function About() {

    return (

        <div className="about">
            <div className="descSection">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    <div className="descChild"></div>
                    <div className="desc">
                        <h3 className="reveal-text">
                            <span style={{ "--i": 0 } as CSSProperties}>About Me</span>
                        </h3>
                        <br />
                        <h4 className="reveal-text">
                             Hi again! I'm Sara. I’m currently a Junior at the{" "}
                            <span style={{ "--i": 1, "--var1": "#ffebdc", "--var2": "#dcfaff" } as CSSProperties}>
                                University of Florida
                            </span> {" "}
                            majoring in computer science and minoring in digital arts and sciences.{" "}
                            <br /><br />
                            Previously I was a UI/UX intern at Good Days, a nonprofit focused on Chronic Disease. I also am currently the Public Relations Director for the Society of PC Building at UF, as well as a member of the Beta Tau chapter of Sigma Kappa.
                            <br /><br />
                            My current interest lies in how a front end can best display all a backend has to offer without becoming harder to use. This especially ties in to my love for accessibility design, something I came to know through my internship at Good Days.
                            <br /><br />
                            Outside of my studies and coding I love collecting vinyl records and old technology (especially CRTs and floppy disks), as well as crocheting, doodling, and really any kind of creative work. I also love making silly websites and stickers!
                            <br /><br />
                            Please don’t hesitate to reach out!
                        </h4>
                    </div>
                </div>
            </div>
            <div className="characterSection">
                <p>Stickers</p>
            </div>
        </div>);
};

export default About;