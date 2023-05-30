import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="p-4 featured-item my-24">
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Check it out"}
            ></SectionTitle>
            <div className="md:flex justify-evenly items-center pb-16 pt-10 md:gap-12 md:px-48">
                <div className="">
                    <img className="" src={featureImg} alt="" />
                </div>
                <div className="text-white">
                    <p>August 20, 2023</p>
                    <p className="uppercase mb-2">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn bg-transparent  border-0 border-b-2 border-white hover:text-yellow-500 mt-6">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;