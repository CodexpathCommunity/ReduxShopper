import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>Title {item.title}</p>
        <p className={styles.details__desc}>Description {item.desc}</p>
        <p className={styles.details__price}>{item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id="qty" name="qty" value={item.qty} />
        </div>
        <button className={styles.actions__deleteItemBtn}>
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
