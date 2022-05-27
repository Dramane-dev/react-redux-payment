import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Col,
  Button,
  Card,
  Container,
  Row
} from 'react-bootstrap';
// const Product = ({ product }) => {
//   const {
//     name,
//     description,
//     price,
//     currencyCode,
//     image
//   } = product;

//   return (
//       <div className='container'>
//           <img alt='This is an a product' src={image}/>
//           <div className='product-informations'>
//             <p className='product-title'>{name}</p>
//             <p>{description}</p>
//             <p>{price} - {currencyCode}</p>
//           </div>
//       </div>
//   );
// };
const Product = ({ product }) => {
  const dispatch = useDispatch();
  const {
    name,
    description,
    price,
    currencyCode,
    image
  } = product;

  const handleClickAddProductInCart = () => {
    dispatch({
      type: 'addProductInCart',
      product: {
        id: 'product3',
        name: 'Mac book air',
        description: 'Coder en toute tranquilité',
        price: 1500.00,
        currencyCode: 'USD',
        image: 'https://www.apple.com/newsroom/images/product/mac/standard/Apple_new-macbookair-wallpaper-screen_11102020_big.jpg.large.jpg',
        quantity: 1
      }
    });
  };
  return (
    <Col xs={3}>
      <Card>
        <Card.Img variant='top' src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{`${price} ${currencyCode}`}</Card.Text>
          <Button variant='primary' onClick={handleClickAddProductInCart}>Ajouter au panier</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <Container>
          <Row>
            {products.map((product) => <Product key={product.id} product={product} />)}
          </Row>
      </Container>
    </>
  );
};
export default Products;
