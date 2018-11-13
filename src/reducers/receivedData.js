import { addData } from "../actions/addData";
import { ADD_DATA } from "../constants/constants";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const defaultState = {
  products: []
};

const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        products: action.products
      };
    default:
      return state;
  }
};

export const store = createStore(dataReducer, applyMiddleware(thunk));

export const mapStateToProps = state => {
  return { products: state.products };
};

export const mapDispatchToProps = dispatch => {
  return {
    addData: () => {
      dispatch(addData());
    }
  };
};
