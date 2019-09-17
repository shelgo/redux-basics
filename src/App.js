import React from 'react';
import './App.css';
import Posts from './components/posts';
import PostsForm from './components/postsForm';
import {Provider} from 'react-redux';
import store from './store/store';




function App() {
  return (
    <Provider store={store}>
    <div className="App">

    <PostsForm/>
    <hr/>
      <Posts/>
    </div>
    </Provider>
  );
}

export default App;
