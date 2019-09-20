import React from 'react';
import { Provider } from 'react-redux';
import store from './store'
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import './App.css';

function App() {
  // Pass store as props to provider and wrap App in Provider
  return (
    <Provider store={store}>
      <React.Fragment>
        <PostForm />
        <hr />
        <Posts />
      </React.Fragment>
    </Provider>
  );
}

export default App;
