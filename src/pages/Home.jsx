import '../components/Home.scss';
import character from '../images/character.webp';
import { NavLink } from 'react-router-dom';


export const Home = () => {
    return (
        <section>
            <div className="container-home">
                <div className="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Hi, I'm</h1>
                        <h1 className="hero-title">MITHUN YADAV</h1>
                        <p className="hero-text">
                            A Full Stack Developer & UI/UX Designer with a passion for
                            building responsive and good looking applications which can
                            provide best user experience.
                        </p>
                        <NavLink to="/about" className="cta-button">
                            KNOW MORE
                        </NavLink>
                        <a className='resume-button' href="https://drive.google.com/uc?export=download&id=1fKbZAOn8seh1xC2fX0OTCwa0_n1X7vpi" download="resume.pdf">
                    VIEW RESUME
                    </a>

                    </div>
                    <div className="hero-image-container">
                        <img src={character} alt="Beautiful woman with crown" />
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="decorative-dots dot-1"></div>
                <div className="decorative-dots dot-2"></div>
                <div className="decorative-circle"></div>
            </div>
        </section>
    );
};
