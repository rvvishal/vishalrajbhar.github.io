
import logo from "../assets/profile.png"

import "../styles/about.css"


function About() {
    return (
        <><section id="about">
            <div className="about-grid">
                <div className="about-photo">
                    <img src={logo} alt="profile" />
                </div>
                <div className="about-content">
                    <p class="label">About me</p>
                    <h2>Crafting digital experiences that connect</h2>
                    <p>Hi, I'm Vishal Rajbhar — a product designer focused on UI/UX, mobile apps, and web design. I bridge the gap between beautiful aesthetics and meaningful usability.</p>
                    <p>With a strong eye for detail and a passion for clean, functional design, I turn complex problems into elegant digital solutions — from concept to pixel-perfect delivery.</p>
                    <div className="dummy-layer">

                    </div>
                    <div class="skills-list">
                        <span class="skill-chip">UI/UX Design</span>
                        <span class="skill-chip">Figma</span>
                        <span class="skill-chip">Web Design</span>
                        <span class="skill-chip">Mobile Apps</span>
                        <span class="skill-chip">Prototyping</span>
                        <span class="skill-chip">Branding</span>
                        <span class="skill-chip">Real Estate</span>
                    </div>
                </div>
            </div>
        </section><div className="section-gap2">
                <hr className="section-divider2" />
            </div></>
        
    );
}

export default About;