import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Row,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
import '../scss/cart.scss';

const Cart = ({ article }) => {
  const {
    name,
    quantity
  } = article;

  return (
    <ListGroupItem>
      <div className='article-container'>
        <img alt='this is an article' src='https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg' />
        <div className='article-title'>
          {name}
        </div>
        <div className='add-button'>+</div>
        <div className='article-quantity'>
          {quantity}
        </div>
        <div className='remove-button'>-</div>
      </div>
    </ListGroupItem>
  );
};

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <Container>
        <Row>
          <ListGroup>
            {cart.map((article) => <Cart key={article.id} article={article}/>)}
          </ListGroup>
        </Row>
      </Container>
    </>
  );
};
export default ShoppingCart;
