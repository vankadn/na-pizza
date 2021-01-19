import React from 'react';
import classes from "./Layout.module.css";
import Auxiliary from '../hoc/Auxilary'

const layout =(props)=>(
    <Auxiliary>
<div>
    Toolbar ,Sidebar, Backdrop
</div>
{/* <PizzaBuilder></PizzaBuilder> */}
<main className={classes.Content}>
    {props.children   }
</main>
</Auxiliary>
);

export default layout;