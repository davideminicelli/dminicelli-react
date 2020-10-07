import React from "react";
import "../Styles/About.scss"

const About = () => {
    return (
        <section id="about-section">
            <h1>About me</h1>
            <div id="about-body">
                <h2>Background</h2>
                    <p>
                        I moved to the UK seven years ago from Italy, where I worked both in retail and as a photo editor.
                        I have worked in the retail industry for many years, before I decided to pursue my passion and become a web developer. 
                    </p>
            
                    <p>
                        This has fortunately proven to be a strength, since it has given me a client-focused perspective.
                        The client's needs are my north star whenever I’m working on a website.
                    </p>
            
                    <p>
                    I'm a self taught developer, and although I never lose sight of the fundamentals (<em>HTML</em>, <em>CSS</em>, <em>Javascript</em>)
                    I'm constantly studying to enrich my skillset: I'm currently studying <em>React</em>, and I'm using it in my latest projects.
                    I've also learned the basics of git and GitHub, npm, Adobe XD. 
                    </p>
            
                    <p>
                    In my years working in a graphic design studio I've also learned Photoshop, Illustrator, Cinema 4D. 
                    </p>
                
                <h2>Hobbies</h2>
                <p>Photography, hiking, reading, board games and video games.</p>
            </div>
        </section>
    )
}

export default About