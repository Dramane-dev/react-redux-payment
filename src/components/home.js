import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Home = () => {
  const options = {
    'client-id': 'AWhya26xj6ErgK4WaH5Dem81T5IhjwNiCd-hpBJCvSYmfQ7SedEZAm6XiHva0CnUsm53NOXTifvrI1Y1'
  };

  const createOrder = (data, actions) => actions.order.create({
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: '100',
        breakdown: {
          item_total: {
            currency_code: 'USD',
            value: '100'
          }
        }
      },
      items: [{
        name: 'Mac mini',
        description: 'Incredible mac',
        unit_amount: {
          currency_code: 'USD',
          value: '50'
        },
        quantity: '2'
      }]
    }]
  });
  const onApprove = (data, actions) => actions.order.capture().then(() => {
  });

  const style = {
    layout: 'vertical',
    color: 'blue',
    shape: 'rect',
    label: 'paypal'
  };

  return (
    <>
      <h1>Welcome to the home page</h1>
      <PayPalScriptProvider options={options}>
        <PayPalButtons
          style={style}
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </PayPalScriptProvider>
    </>
  );
};

export default Home;
