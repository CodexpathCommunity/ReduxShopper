import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/shopping/shopping-actions";
import styles from "./SingleItem.module.css";

const SingleItem = ({ currentItem, addToCart }) => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={currentItem.image}
        alt={currentItem.desc}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>Title: {currentItem.title}</p>
        <p className={styles.details__description}>
          Description {currentItem.desc}{" "}
        </p>
        <p className={styles.details__price}>$ {currentItem.price} </p>

        <button
          onClick={() => addToCart(currentItem.id)}
          className={styles.details__addBtn}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};
const mapDispatchToProp = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(SingleItem);
