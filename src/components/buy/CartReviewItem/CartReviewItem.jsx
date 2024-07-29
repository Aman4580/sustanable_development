import React from "react";
import PropTypes from "prop-types";
import "./CartReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const CartReviewItem = (props) => {
  const { title, quantity, keys, img } = props.foodsToReview;
  return (
    <div className="container text-center mt-3">
      <div className="row">
        <div className="col-md-4 crd">
          <img src={img} alt={title} />
        </div>
        <div className="col-md-8">
          <h5>
            {title}&nbsp;&nbsp; <br /> Quantity: {quantity}{" "}
            <button
              onClick={() => props.removeItem(keys)}
              className="btn btn-link p-0"
              aria-label="Remove item"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </h5>
        </div>
      </div>
      <hr />
    </div>
  );
};

CartReviewItem.propTypes = {
  foodsToReview: PropTypes.shape({
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    keys: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartReviewItem;
