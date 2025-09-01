import { Parallax } from 'react-parallax';
import './cover.css'
const Cover = ({ img, title, description }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div
                className="hero h-[700px]">
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md coverFont ">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 coverFont ">
                            {description}
                        </p>

                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Cover;