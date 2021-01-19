import React from 'react';
import classes from './Pizza.css';

import Ingredient from './Ingredients/Ingrediesnts';

const pizza = (props)=>{
                
const toper =  Object.keys(props.toppings)
                .map(topKey=>{
                    return [...Array(props.toppings[topKey])].map((_,i)=>{
                     return    <Ingredient key  ={topKey+ i} type={topKey}/>;
                    });
                })
                .reduce((arr,el)=>{
                    return arr.concat(el)
                },[]);
    return(
        <div className= {classes.Pizza}>
         
{ toper}

        </div>
    );

}

export default pizza;