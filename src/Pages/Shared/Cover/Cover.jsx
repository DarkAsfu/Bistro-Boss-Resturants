import { Parallax } from 'react-parallax';
const Cover = ({ img, title, desc }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[600px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-center text-neutral-content px-8 md:px-36">
                    <div className="bg-slate-900 bg-opacity-40 px-10 py-8 md:px-64 md:py-24 ">
                        <h1 className="mb-5 text-5xl font-bold uppercase font-[cinzel] ">{title}</h1>
                        <p className="mb-5 uppercase font-semibold text-xs tracking-widest">{desc}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;