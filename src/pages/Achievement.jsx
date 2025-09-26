import { useAuth } from "../store/auth";
import '../components/Achievement.scss';

export const Achievement = () => {
    const { achievements } = useAuth();

    return (
        <section>
            <div className="main-container">
                {achievements.map((curElem, index) => {
                    const { achievement, description, provider, project, course, duration, certificateImage } = curElem;

                    // Use local file path to display the certificate
                    const certificateImagePath = `/certificates/${certificateImage}`;

                    return (
                        <div className="container-achievement" key={index}>
                            <div className="card">
                                <div className="img-achievement" >
                                    <img src={certificateImagePath} alt={`Certificate for ${achievement}`} />
                                </div>
                                <div  className="details-box">
                                    <h1>{achievement}</h1>
                                    {/* <div className="course">
                                        <p><span>Course: </span>{course}</p>
                                    </div> */}
                                    <div className="provider">
                                        <p><span>From: </span>{provider}</p>
                                    </div>
                                    {/* <div className="duration">
                                        <p><span>Duration: </span>{duration}</p>
                                    </div>
                                    <div className="project">
                                        <p><span>Project: </span>{project}</p>
                                    </div> */}
                                    <div className="description">
                                        <p><span>About: </span>{description}</p>
                                    </div>
                                    <div className="download-certificate">
                                        <a href={certificateImagePath} download={certificateImage}>
                                            Download Certificate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
