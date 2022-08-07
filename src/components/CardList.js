import React from "react";
import Card from "./Card";



const CardList = ({monstersArr}) => {
    return (
        <div>
            {monstersArr.map((monster, i) => {
                return (
                    <Card
                        key={i}
                        hash={monster.hash}
                        name={monster.name}
                        email={monster.email}/>
                )
            })
            }
        </div>
    );
}

export default CardList