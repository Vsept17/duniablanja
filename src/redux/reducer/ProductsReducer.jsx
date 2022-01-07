import * as actions from "../action/actionTypes";

const initialState = {
  products: [],
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case actions.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((item) => item.getId !== action.payload.getId),
      };

    default:
      return state;
  }
};

export default ProductsReducer;
