import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Card from "../../Shared/Card/Card";

const ChefRecomendation = () => {
    const [recomendation, setRecomendation] = useState([])
    useEffect( () => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const recomend  = data.filter(r => r.category === 'salad');
            setRecomendation(recomend)
        })
    }, [])
    console.log(recomendation);
    return (
        <div>
            <SectionTitle 
                heading={"CHEF RECOMMENDS"}
                subHeading={"Should Try"}
            >
            </SectionTitle>
            <div className="grid md:grid-cols-3 mb-10 gap-8 mx-4 md:mx-0">
                {
                    recomendation.map(item => <Card key={item._id} item={item}></Card>)
                }
            </div>
        </div>
    );
};

export default ChefRecomendation;