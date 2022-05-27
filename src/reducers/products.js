import { createReducer } from '@reduxjs/toolkit';

const initialState = [{
  id: 'product1',
  name: 'Mac book pro',
  description: 'Travailler efficacement',
  price: 1500.00,
  currencyCode: 'USD',
  image: 'https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2020/11/apple-macbook-pro-13-2020-m1-frandroid.png?resize=580,580'
}, {
  id: 'product2',
  name: 'Mac book air',
  description: 'Coder en toute tranquilité',
  price: 1500.00,
  currencyCode: 'USD',
  image: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg'
}];

const productReducer = createReducer(initialState, {});

export default productReducer;
