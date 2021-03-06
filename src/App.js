import React from 'react';
import PostForm from './components/PostForm';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PostForm />
    </Provider>
  );
}

export default App;
