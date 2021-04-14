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
      return {};
    case actionTypes.REMOVE_FROM_CART:
      return {};
    case actionTypes.ADJUST_QTY:
      return {};
    case actionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};

export default shopReducer;
