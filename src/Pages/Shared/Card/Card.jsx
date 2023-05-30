

const Card = ({ item }) => {
    console.log(item);
    const { image, name, recipe } = item;
    return (
        <div className="card card-compact w-full bg-base-100 ">
            <figure><img src={image} className="w-full"  /></figure>
            <div className="card-body bg-[#F3F3F3] text-center space-y-4">
                <h2 className="card-title justify-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn text-[#BB8506] bg-[#E8E8E8] border-0">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Card;