import '../components/About.scss';
import introduction from '../images/introduction.webp';
import education from '../images/education.webp';
import skill from '../images/skill.webp';
import hobby from '../images/hobby.webp';


export const About = () => {
    const skills = [
        { name: 'MERN', percentage: 80 },
        { name: 'C++', percentage: 70 },
        { name: 'PYTHON', percentage: 75 }
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
                            Hi, I'm Mithun Yadav, a passionate Full Stack Developer
                            with a focus on creating dynamic and responsive web applications.
                            I specialize in the MERN stack (MongoDB, Express.js, React.js, and
                            Node.js). I enjoy tackling complex problems and building efficient,
                            user-friendly solutions. I'm always eager to explore new technologies
                            and continuously enhance my development skills by working on innovative projects.
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
                            I completed my high school in 2019 from the CBSE board,
                            achieving 82.6% marks. Later, I completed my secondary
                            high schooling in 2021, specializing in PCM (Physics,
                            Chemistry, and Mathematics), with 70.6% marks, also
                            from the CBSE board.
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
                            In my free time I enjoy playing role-play games and watching isekai anime.
                            Both let me explore imaginative worlds and exciting adventures,
                            offering a fun escape from reality and sparking my creativity and engage
                            with complex storylines.

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
