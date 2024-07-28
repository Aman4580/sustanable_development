import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import demoData from "../components/buy/Demodata/demo";
import FoodDetailsCard from "../components/buy/CropDetailsCard/CropDetailsCard";
import CartHidden from "../components/buy/CartHidden/CartHidden";
import { addToDatabaseCart, getDatabaseCart } from "../components/buy/Utilities/datbaseManager";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../components/buy/Header/Header";
import { Container } from "react-bootstrap";

const FoodDetails = () => {
  const { keys } = useParams();
  const findFood = demoData.filter((find) => find.keys === keys);
  const [findFoodDetails, setFindFood] = useState(findFood);
  const [cart, setCart] = useState([]);


  const notify = () => toast("Item added to cart!");

  useEffect(() => {
    // Load data from local storage
    const getSavedDataFromLS = getDatabaseCart();
    const itemKeys = Object.keys(getSavedDataFromLS);

    // Retrieve local storage data key and match with demoData key
    const cartProducts = itemKeys.map((key) => {
      const product = demoData.find((fd) => fd.keys === key);
      if (product) {
        product.quantity = getSavedDataFromLS[key];
        return product;
      }
      return null;
    }).filter(product => product !== null);

    setCart(cartProducts);
  }, []);


  const handleAddToCart = (foodItem) => {
    const productToBeAdded = foodItem.keys;
    const sameProduct = cart.find(item => item.keys === productToBeAdded);
    let newCart;

    if (sameProduct) {
      notify();
      const count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      newCart = cart.map(item => item.keys === productToBeAdded ? sameProduct : item);
    } else {
      notify();
      foodItem.quantity = 1;
      newCart = [...cart, foodItem];
    }

    setCart(newCart);
    addToDatabaseCart(foodItem.keys, foodItem.quantity);
  };

  return (
    <>
      <Header />
      <br />
      <Container>
        <div className="py-5">
          <div className="food-details-container float-left">
            {findFoodDetails.map((details) => (
              <FoodDetailsCard
                key={details.keys}
                handleAddToCart={handleAddToCart}
                findFoodDetails={details}
              />
            ))}
          </div>
          <div style={{ display: 'none' }}>
            <div className="cart-hidden-container float-right">
              <CartHidden cart={cart} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FoodDetails;
