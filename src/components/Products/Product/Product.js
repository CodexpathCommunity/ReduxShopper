import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-G4iFnW3QVgKU27KVfipgbG-jzE1SEnP5yg&usqp=CAU"
        alt=""
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>Title: Cross-Jibbitz </p>
        <p className={styles.details__desc}>
          Description: jibbitx for crocs allow you to personalize your creos
          with style; Cross shoes sold seperately.
        </p>
        <p className={styles.details__price}>$ 10.00</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/someID`}>
          <button className={`${styles.buttons__btn} ${styles.buttons__view}`}>
            View Item
          </button>
        </Link>
        <button className={`${styles.buttons__btn} ${styles.buttons__add}`}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
