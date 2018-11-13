import { ADD_DATA, D_URL } from "../constants/constants";
import axios from "axios";

const receivedData = products => ({
  type: ADD_DATA,
  products: products
});

export const addData = () => {
  return async dispatch => {
    let data = await axios.get(D_URL);
    let products = [];
    data.data.forEach(d => {
      d.subcategories.forEach(dd => {
        dd.items.forEach(ddd => {
          products.push(ddd);
        });
      });
    });

    dispatch(receivedData(products));
  };
};
