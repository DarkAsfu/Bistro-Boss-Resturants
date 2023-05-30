const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 md:mx-auto text-center py-8 mx-4">
            <p className="text-[#D99904] pb-2 italic text-xl">---{subHeading}---</p>
            <h2 className="text-3xl uppercase border-y-4 py-4 font-[inter]">{heading}</h2>
        </div>
    );
};

export default SectionTitle;