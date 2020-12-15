import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({ id, title, rating, price, image }) {
    const [{basket}, dispatch] = useStateValue();

    console.log(id, title, image, price, rating);

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                    <h5>{rating}</h5>
                </p>
                <button onClick={removeFromBasket}>Remove from Cart</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct;