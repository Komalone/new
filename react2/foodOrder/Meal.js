import React, { Fragment } from "react";
import AvailableMeal from "./AvailableMeals";
import MealSummary from "./MealSummary";

const Meal=()=>{
    return <Fragment>
        <MealSummary/>
        <AvailableMeal/>
    </Fragment>
}

export default Meal;