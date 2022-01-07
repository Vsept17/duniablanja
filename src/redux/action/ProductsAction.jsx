import * as actions from "./actionTypes";

export const addProduct = (payload) => {
  return {
    type: actions.GET_PRODUCT,
    payload,
  };
};

export const deleteProduct = (getId) => {
  return {
    type: actions.DELETE_PRODUCT,
    payload: getId,
  };
};
