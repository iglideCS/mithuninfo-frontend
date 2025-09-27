import '../components/Figma.scss';
import Figma from "../assets/figma/design";

export const FigmaDesign = () => {

    return (
        <section>
            <div className="main-container">
                {Figma.map((design, index) => {
                    const { title, designImgUrl, description, downloadUrl } = design;

                    return (
                        <div className="container-achievement" key={index}>
                            <div className="card">
                                <div className="img-achievement" >
                                    <img src={designImgUrl} alt={`Figam design for ${title}`} />
                                </div>
                                <div className="details-box">
                                    <h1>{title}</h1>
                                    <div className="description">
                                        <p><span>About: </span>{description}</p>
                                    </div>
                                    <div className="download-certificate">
                                        <a href={downloadUrl} download={title}>
                                            Download Design
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
