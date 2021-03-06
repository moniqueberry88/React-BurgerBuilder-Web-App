import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';

const burger = props => {
    let transformIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}></BurgerIngredient>
        });
    }).reduce((prev, cur) => {
        return prev.concat(cur);
    }, [])
    console.log(transformIngredients);
    if(transformIngredients.length === 0){
        transformIngredients = <p>You Can Begin Adding Your Ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;