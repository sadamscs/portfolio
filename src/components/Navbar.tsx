import { useState } from "react";

type NavbarProps = {
    page: string;
    setPage: (page: string) => void;
};

const needleAngles: Record<string, number> = {
    home: 130,
    about: 18,
    projects: 42,
    experience: 65,
};

function Navbar({ page, setPage }: NavbarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const needleRotate = needleAngles[page] ?? -5;
    const needleStyle = { "--needle-rotate": `${needleRotate}deg` } as { [key: string]: string };
    const itemClass = (item: string) => `nav-item${page === item ? " active" : ""}`;

    return (
        <nav>
            <button onClick={() => setPage("home")}>
                <div className="nav-left">
                    <span className="hover-reveal">Sara Adams</span>
                </div>
            </button>

            <div className="nav-record"></div>
            <div className="nav-needle" style={needleStyle} />

            <button className="nav-toggle" onClick={() => setMobileOpen(v => !v)}>
                &#9776;
            </button>
            <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
                <p style={{ color: "#6565FF" }} onClick={() => setMobileOpen(false)}>x</p>
                <p onClick={() => setPage("about")} style={{ cursor: 'pointer' }}>About Me</p>
                <p onClick={() => setPage("projects")} style={{ cursor: 'pointer' }}>My Projects</p>
                <p onClick={() => setPage("experience")} style={{ cursor: 'pointer' }}>My Experience</p>
            </div>

            <div className="nav-links">
                <div className={itemClass("about")}>
                    <div className="arc-container">
                        <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                            <path id="curve-about"
                                d="M 300,200  m -110, 0  a 110,110 0 1,0 220,0  a 110,110 0 1,0 -220,0"
                                fill="transparent" />
                            <path
                                className="underline"
                                d="M 300,200  m -110, 0  a 110,110 0 1,0 220,0  a 110,110 0 1,0 -220,0"
                            />
                            <text onClick={() => setPage("about")} style={{ cursor: 'pointer' }}>
                                <textPath href="#curve-about" startOffset="24%" textAnchor="middle">
                                    About Me
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>

                <div className={itemClass("projects")}>
                    <div className="arc-container">
                        <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                            <path id="curve-projects"
                                d="M 300,200  m -160, 0  a 160,160 0 1,0 320,0  a 160,160 0 1,0 -320,0"
                                fill="transparent" />
                            <path
                                className="underline"
                                d="M 300,200  m -160, 0  a 160,160 0 1,0 320,0  a 160,160 0 1,0 -320,0"
                            />
                            <text onClick={() => setPage("projects")} style={{ cursor: 'pointer' }}>
                                <textPath href="#curve-projects" startOffset="21%" textAnchor="middle">
                                    My Projects
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>

                <div className={itemClass("experience")}>
                    <div className="arc-container">
                        <svg viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                            <path id="curve-experience"
                                d="M 300,200  m -210, 0  a 210,210 0 1,0 420,0  a 210,210 0 1,0 -420,0"
                                fill="transparent" />
                            <path
                                className="underline"
                                d="M 300,200  m -210, 0  a 210,210 0 1,0 420,0  a 210,210 0 1,0 -420,0"
                            />
                            <text onClick={() => setPage("experience")} style={{ cursor: 'pointer' }}>
                                <textPath href="#curve-experience" startOffset="20%" textAnchor="middle">
                                    My Experience
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;