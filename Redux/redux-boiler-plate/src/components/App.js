import React from 'react';

import Posts from './posts/Posts';
import PostForm from './posts/PostForm';

import { Provider } from 'react-redux';
import store from '../store';

function App() {
  return (
    <Provider store={store}>
      <div>
          <PostForm />
          <hr />
          <Posts />
        </div>
    </Provider>
  );
}

export default App;
