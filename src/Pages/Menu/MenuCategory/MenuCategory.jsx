import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, coverImg, desc }) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title} desc={desc}></Cover>}
            <div className="mt-8 grid md:grid-cols-2 gap-5 mb-12 mx-4 md:mx-0">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center mb-10">
                <button className="btn bg-transparent  border-0 border-b-2 border-black text-black hover:text-yellow-500 mt-6 mx-auto">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuCategory;