import '../components/About.scss';
import introduction from '../images/introduction.webp';
import education from '../images/education.webp';
import skill from '../images/skill.webp';
import hobby from '../images/hobby.webp';


export const About = () => {
      const skills = [
        {name: "Figma", percentage: 90},
        { name: 'MERN', percentage: 85 },
        { name: 'C++', percentage: 60 }
    ];
    return (
        <section>
            <div className="container-introduction">
                <div className="introduction-image-box">
                    <img src={introduction} alt="introduction" />
                </div>

                <div className="introduction-text-box">

                    <div className="introduction-heading" >
                        <h1>Introduction</h1>
                    </div>

                    <div className="introduction-para" >
                        <p>
                            Hi, I'm Mithun Yadav, a passionate Full Stack Developer and UI/UX wireframe and prototype designer
                            with a focus on creating dynamic and responsive web applications & desgin.
                            I specialize in the MERN stack & prototyping and wireframing via Figma. I just love creating and desgining something new from scratch.
                        </p>
                    </div>
                </div>
            </div>

            {/* education */}

            <div className="container-introduction">
                <div className="education-text-box">
                    <div className="education-heading" >
                        <h1>Education</h1>
                    </div>

                    <div className="education-para" >
                        <p>
                           I am currently in the final year of my B.Tech, maintaining an aggregate of 70%. Prior to this, I completed my Intermediate in 2021 with the CBSE board, specializing in PCM, and secured 70.6% and  High School in 2019 from the CBSE board with 82.6% marks.
                        </p>
                    </div>
                </div>
                <div className="education-image-box">
                    <img src={education} alt="education"  />
                </div>
            </div>

            {/* skills */}

            <div className="container-skill">
                <div className="skill-image-box">
                    <img src={skill} alt="skill"  />
                </div>

                <div className="skill-text-box">
                    <div className="skill-heading" >
                        <h1>Skills</h1>
                    </div>

                    <div className="skill-para">
                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <div className="skill-box" key={index} >
                                    <div className="skill-title" >{skill.name}</div>
                                    <div className="skill-circle" >
                                        <svg>
                                            <circle cx="70" cy="70" r="70" />
                                            <circle 
                                                cx="70" 
                                                cy="70" 
                                                r="70" 
                                                style={{
                                                    strokeDashoffset: `calc(440 - (440 * ${skill.percentage}) /100)`
                                                }}
                                            />
                                        </svg>
                                        <div className="percent">
                                            <h2>{skill.percentage}<span>%</span></h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Hobby */}

            <div className="container-hobby">
                <div className="hobby-text-box">

                    <div className="hobby-heading">
                        <h1>Hobby</h1>
                    </div>

                    <div className="hobby-para" >
                        <p>
                          In my free time I play cricket or I do watch anime.

                        </p>
                    </div>
                </div>
                <div className="hobby-image-box">
                    <img src={hobby} alt="hobby" />
                </div>
            </div>
        </section>
    )
}
