import React from "react";
import CoffeeImg from "../../img/coffeeLogo.png";

const CoffeeLogo = ({ width, height }) => {
    return <img src={CoffeeImg} alt="Coffee Logo" style={{ width, height }} />;
};

export default CoffeeLogo;