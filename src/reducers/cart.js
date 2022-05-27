import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = [{
  id: 'article1',
  name: 'Mac book pro',
  price: 1500.00,
  image: 'https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2020/11/apple-macbook-pro-13-2020-m1-frandroid.png?resize=580,580',
  quantity: 0
}, {
  id: 'article2',
  name: 'Mac book air',
  quantity: 0
}];

const addProductInCart = createAction('addProductInCart');
const cartReducer = createReducer(initialState, {
  [addProductInCart]: (state, action) => {
    const { product } = action;

    return state.concat(product);
  }
});

export default cartReducer;
