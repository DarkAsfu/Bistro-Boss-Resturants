import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menus] = useMenu();
    const offered = menus.filter(item => item.category === 'offered');
    const dessert = menus.filter(item => item.category === 'dessert');
    const pizza = menus.filter(item => item.category === 'pizza');
    const salad = menus.filter(item => item.category === 'salad');
    const soup = menus.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            <Cover img={menuImg} title={'OUR MENU'} desc={'would you like to try a dish?'}></Cover>
            {/* offereed item */}
            <SectionTitle
                heading={"TODAY'S OFFER"}
                subHeading={"Don't miss"}
            >
            </SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory items={dessert} coverImg={desertImg} title={"desert"} desc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            
            {/* Pizza */}

            <MenuCategory items={pizza} coverImg={pizzaImg} title={"pizza"} desc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>

            <MenuCategory items={salad} coverImg={saladImg} title={"salads"} desc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>

            <MenuCategory items={soup} coverImg={soupImg} title={"soup"} desc={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
        </div>
    );
};

export default Menu;