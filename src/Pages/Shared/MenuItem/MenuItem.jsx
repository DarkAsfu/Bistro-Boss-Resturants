

const MenuItem = ({item}) => {
    console.log(item);
    const {name, image, price, recipe} = item;
    return (
        <div className="flex space-x-4">
            <img className="h-[90px] w-[80px] md:w-[90px] rounded-e-full rounded-b-full" src={image} alt="" />
            <div>
                <h3 className="uppercase text-[#151515] font-[cinzel] font-normal text-xl">{name}------------</h3>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;