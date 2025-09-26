import '../components/Home.scss';
import character from '../images/character.webp';
import { NavLink } from 'react-router-dom';


export const Home = () => {
    return (
        <section>
            <div className="container-home">
                <div className="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">MITHUN YADAV</h1>
                        <p className="hero-text">
                        Hi, I'm a Full Stack Developer with a passion for 
                        building responsive web applications. 
                        </p>
                        <NavLink to="/about" className="cta-button">
                            KNOW MORE
                        </NavLink>
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
