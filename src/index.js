import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(rootReducer);
console.log(store);

render(
  <Root store={store} />,
  document.getElementById('root')
);

registerServiceWorker();
