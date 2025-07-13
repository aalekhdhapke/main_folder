import React from "react";
import "./products.css"; 
import Button from "./button";
import Boxes from "./boxes";
 export default class Products extends React.Component {
    render() {
        return (
            <div>
         <h2 className="products-heading">PRODUCTS PAGE</h2>
            <div className="products-container"> 
                <div className="product-card-one">
                <img src=" https://blaupunktaudio.in/cdn/shop/files/bh41-bluetooth-wireless-over-ear-headphone-blue-1-.0.2.jpg?v=1723532548" alt="Product 1" />
                    </div>
                    <div className="product-card-two">
                        <h3>Bluetooth Wireless Over-Ear Headphone</h3>
                        <p>Price: ₹1,999</p>
                        <h4 className="product-brand">Brand: Boat</h4>
                        <h4 className="product-name">Wireless Over-Ear Headphone</h4>
                        <h4 className="product-review">Review: 4.5/5</h4>

                      <h3 className="product-description">Pebble Elite Pro Black Bluetooth and Wired headphones. These are over-ear headphones with a padded headband and earcups, designed for both wireless and wired use. The headphones are shown in a 3/4 view against a white background. The color is a dark blue..</h3>        
                     <Button/>

                    </div>
            </div>

<Boxes/>
            </div>
        );
    }
 }