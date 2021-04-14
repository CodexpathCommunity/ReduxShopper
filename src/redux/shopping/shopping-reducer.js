import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-G4iFnW3QVgKU27KVfipgbG-jzE1SEnP5yg&usqp=CAU",
      title: " Cross-Jibbitz ",
      desc:
        "jibbitx for crocs allow you to personalize your creos with style; Cross shoes sold seperately.",
      price: "10.00",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-G4iFnW3QVgKU27KVfipgbG-jzE1SEnP5yg&usqp=CAU",
      title: " Cross-Jibbitz ",
      desc:
        "jibbitx for crocs allow you to personalize your creos with style; Cross shoes sold seperately.",
      price: "10.00",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-G4iFnW3QVgKU27KVfipgbG-jzE1SEnP5yg&usqp=CAU",
      title: " Cross-Jibbitz ",
      desc:
        "jibbitx for crocs allow you to personalize your creos with style; Cross shoes sold seperately.",
      price: "10.00",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-G4iFnW3QVgKU27KVfipgbG-jzE1SEnP5yg&usqp=CAU",
      title: " Cross-Jibbitz ",
      desc:
        "jibbitx for crocs allow you to personalize your creos with style; Cross shoes sold seperately.",
      price: "10.00",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === action.payload.id);
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [
              ...state.cart,
              {
                ...item,
                qty: 1,
              },
            ],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
