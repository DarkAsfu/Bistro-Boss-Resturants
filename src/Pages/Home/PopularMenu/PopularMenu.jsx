
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    
    const [menus] = useMenu();
    const popular = menus.filter(item => item.category === 'popular');

    return (
        <section>
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
            >
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-5 mb-12 mx-4 md:mx-0">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;