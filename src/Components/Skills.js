import React from "react";
import Skillset from "./Skillset"
import "../Styles/Skills.scss";

const groupedSkills = [
    {"title": "Coding <../>",
    "skills": ["WAI-ARIA and accessibility best practices",
        "CSS3 (including Grid and Flexbox)",
        "Javascript ES6",
        "React.js",
        "Styled-Components",
        "Use of Restful APIs",
        "Git"
        ]
    },
    
    {
        "title": "Graphics ( ❧ )",
        "skills": [
            "Adobe Photoshop",
            "Adobe Illustrator",
            "Adobe XD",
            "Cinema 4D (3d Modeling and Rendering)"
        ]
    },
    
    {
        "title": "Coming Soon =>",
        "skills": [
            "Redux",
            "Node.js"
        ]
    }
]


const mappedSkills = groupedSkills.map(
    category => {
        return (
            <Skillset setName={category.title} skillList={category.skills} />
        )
    }
) 




const Skills = ()=> { 
    return (
        <section id="skills-section">
            <h1>Skills</h1>
            <main id="skills-group">
                {mappedSkills}
            </main>
        </section>
    )
}

export default Skills;