import React,{Component} from 'react';
import  classes  from "./Ingrediesnts.module.css";
import PropTypes from 'prop-types';

class Ingredient extends Component {
    render () {
        var ingredient = '';
        switch ( this.props.type ) {
            case ( 'bread-bottom' ):
                ingredient = <div >BreadBottom</div>;
                break;
            case ( 'bread-top' ):
                ingredient = (
                    <div >
                        BreadTop
                        <div ></div>
                        <div ></div>
                    </div>
                );
                break;
            case ( 'meat' ):
                ingredient = <div > Meat</div>;
                break;
            case ( 'cheese' ):
                ingredient = <div >Cheese</div>;
                break;
            case ( 'bacon' ):
                ingredient = <div >Bacon</div>;
                break;
            case ( 'salad' ):
                ingredient = <div >Salad</div>;
                break;
            default:
                ingredient = <div >Default</div>;
        }

        return ingredient;
    }
}

Ingredient.propTypes = {
type: PropTypes.string.isRequired
};

export default Ingredient;