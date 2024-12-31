import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
// dev tools
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger'
import { getUsers } from './actions/users.actions';
import { getPosts } from './actions/post.actions';
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk , logger))
)
store.dispatch(getUsers())

store.dispatch(getPosts());
ReactDOM.render(
  <React.StrictMode>
   
     <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>,
   document.getElementById('root')
);


reportWebVitals();
