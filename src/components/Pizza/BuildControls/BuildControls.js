import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
const controls  = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls= (props)=>(
    <div>
    <div className={classes.BuildControls}>
    <label>Total Price :<strong>{props.price}</strong>
</label>
    
        {
            
            controls.map(ctrl=>(
                <BuildControl
                 key={ctrl.label} 
                 label={ctrl.label}
                 toppingRemoved ={ ()=> props.toppingRemoved(ctrl.type)}
                 toppingAdded= {()=> props.toppingAdded(ctrl.type)}
                  />
            ))
        }
    </div>
    </div>
);

export default buildControls;