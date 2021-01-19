
import React,{ Component } from 'react';
import   Auxiliary   from "../../components/hoc/Auxilary";
import Pizza from '../../components/Pizza/Pizza';
import BuildControls from '../../components/Pizza/BuildControls/BuildControls';


const  TOPPING_PRICES={
    salad:0.5,
    bacon:0.8,
    cheese: 0.5,
    meat: 1.8
};

class PizzaBuilder extends Component{
    state = {
        toppings:{
            salad:1,
            bacon:1,
            cheese: 2,
            meat: 2
        },
        totalPrice: 4
    }

    removeToppingsHandler = (type) =>{
        const oldCount = this.state.toppings[type];
          if(oldCount >= 1){
            const  updatedCount = oldCount- 1;
            const upgradedToppings = {
                ...this.state.toppings
            };
            upgradedToppings[type] = updatedCount;
            const additionalPrice = TOPPING_PRICES[type];
            const newTotalPrice = this.state.totalPrice - additionalPrice;
            this.setState({totalPrice: newTotalPrice, toppings: upgradedToppings});
          }
          else{ 
              alert(`no toppings of type ${type}`)
          }
           
    }

  

    addToppingHandler = (type)=>{
           const oldCount = this.state.toppings[type];
           const  updatedCount = oldCount+ 1;
           const upgradedToppings = {
               ...this.state.toppings
           };
           upgradedToppings[type] = updatedCount;
           const additionalPrice = TOPPING_PRICES[type];
           const newTotalPrice = this.state.totalPrice + additionalPrice;
           this.setState({totalPrice: newTotalPrice, toppings: upgradedToppings});
    }
    render(){
        return(<Auxiliary>
            <Pizza toppings= {this.state.toppings}/>
            <div>Pizza Controls</div>
            <BuildControls
            price ={ this.state.totalPrice}
             toppingRemoved = {this.removeToppingsHandler}
             toppingAdded = { this.addToppingHandler}
            ></BuildControls>
        </Auxiliary>);
    }

}

export default PizzaBuilder;