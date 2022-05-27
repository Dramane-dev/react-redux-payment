import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';

// Routes
import RoutesConfig from './routes-config';

import store from './store';

const App = () => (
  <React.StrictMode>
    <Provider store={store}>
      <RoutesConfig />
    </Provider>
  </React.StrictMode>
);

render(<App />, document.getElementById('app'));
