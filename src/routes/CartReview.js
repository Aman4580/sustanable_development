import React, { useEffect, useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
} from "../components/buy/Utilities/datbaseManager";
import demoData from "../components/buy/Demodata/demo";
import CartReviewItem from "../components/buy/CartReviewItem/CartReviewItem";
import CartHidden from "../components/buy/CartHidden/CartHidden";
import { Form, Button, Container } from "react-bootstrap";
import Header from "../components/buy/Header/Header";

const CartReview = () => {
  const [cart, setCart] = useState([]);
  
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

  const removeItem = (productKey) => {
    const newRemoveCart = cart.filter((pd) => pd.keys !== productKey);
    setCart(newRemoveCart);
    removeFromDatabaseCart(productKey);
  };

  return (
    <>
      <Header />
      <br />
      <Container>
        <div className="py-5" style={{ backgroundColor: "white" }}>
          <div className="row">
            <div className="col-md-4">
              <Form>
                <Form.Group>
                  <Form.Label className="my-2">Address</Form.Label>
                  <Form.Control type="text" placeholder="Bhubaneswar, Odisha" required />
                  <Form.Label className="my-2">Phone</Form.Label>
                  <Form.Control type="tel" placeholder="+91" required />
                  <Form.Label className="my-2">Delivery Details</Form.Label>
                  <Form.Control as="textarea" rows="3" required />
                </Form.Group>
                <Button className="btn btn-danger my-3" size="lg" block type="submit">Save & Continue</Button>
              </Form>
            </div>
            <div className="col-md-5">
              <div>
                {cart.map((pd) => (
                  <CartReviewItem
                    key={pd.keys}
                    removeItem={removeItem}
                    foodsToReview={pd}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-3">
              <CartHidden cart={cart} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartReview;
