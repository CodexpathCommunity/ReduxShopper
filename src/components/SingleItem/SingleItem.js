import React from "react";
import styles from "./SingleItem.module.css";

const SingleItem = () => {
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-G4iFnW3QVgKU27KVfipgbG-jzE1SEnP5yg&usqp=CAU"
        alt=""
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>Title</p>
        <p className={styles.details__description}>Description</p>
        <p className={styles.details__price}>$ 10.00</p>

        <button className={styles.details__addBtn}>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleItem;
