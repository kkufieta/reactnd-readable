import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker.jsx';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { loadCategories, loadAllPosts } from './actions'
import thunk from 'redux-thunk'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

store.dispatch(loadCategories());
store.dispatch(loadAllPosts());

ReactDOM.render(
  <Provider store={ store }>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
