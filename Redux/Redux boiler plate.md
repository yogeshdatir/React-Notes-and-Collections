# <u>a React-Redux boiler-plate</u> 

### (with Redux-thunk as a middleware)

> #### Steps to add reducers:
>
> 1. store.js
> 2. reducers (rootReducer and others)
> 3. wrap App.js with Provider
> 4. add actions and types
> 5. use redux in components with connect() method.

## Detail Guide to create a React-Redux boiler-plate:

1. Install redux and necessary libraries.
   
   `npm i redux react-redux redux-thunk redux-devtools-extension`
   
   - [React Redux](https://github.com/reduxjs/react-redux) is the official [React](https://reactjs.org/) binding for [Redux](https://redux.js.org/). It lets your React components read data from a Redux store, and dispatch actions to the store to update data.
   - [Redux Thunk](https://github.com/reduxjs/redux-thunk): With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extends the store's abilities, and let you write async logic that interacts with the store.
   - [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension): to enable easy debugging and time travel.
   
2. Create src/store.js.
	
   ```react
   import { createStore, applyMiddleware } from 'redux';
   import { composeWithDevTools } from 'redux-devtools-extension';
   import thunk from 'redux-thunk';
   import rootReducer from './reducers';
    
   const initialState = {};
    
   const middleware = [thunk];
    
   const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
   );
    
   export default store;
   ```

3. Create reducers/index.js.

   ```react
   import { combineReducers } from 'redux';
   
   export default combineReducers({});
   ```

4. Wrap all root component - App with Provider.

   ```react
   import React from 'react';
   
   import { Provider } from 'react-redux';
   import store from '../store';
   
   function App() {
     return (
       <Provider store={store}>
         <>This is App Component</>
       </Provider>
     );
   }
   
   export default App;
   ```

   

5. Create actions/types.js.

   ```react
   export const FETCH_POSTS = 'FETCH_POSTS';
   export const NEW_POST = 'NEW_POST';
   ```

6. Create actions/clientActions.js.

   ```react
   import { FETCH_POSTS, NEW_POST } from './types';
   
   export const fetchPosts = () => dispatch => {
     fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res => res.json())
       .then(posts =>
         dispatch({
           type: FETCH_POSTS,
           payload: posts
         })
       );
   };
   
   export const createPost = postData => dispatch => {
     fetch('https://jsonplaceholder.typicode.com/posts', {
       method: 'POST',
       headers: {
         'content-type': 'application/json'
       },
       body: JSON.stringify(postData)
     })
       .then(res => res.json())
       .then(post =>
         dispatch({
           type: NEW_POST,
           payload: post
         })
       );
   };
   ```

7. Create an reducer ./reducers/clientReducer.js.

   ```react
   import { FETCH_POSTS, NEW_POST } from '../actions/types';
   
   const initialState = {
     items: [],
     item: {}
   };
   
   export default function(state = initialState, action) {
     switch (action.type) {
       case FETCH_POSTS:
         return {
           ...state,
           items: action.payload
         };
       case NEW_POST:
         return {
           ...state,
           item: action.payload
         };
       default:
         return state;
     }
   }
   ```

8. Add the reducer entry in the root reducer ./reducers/index.js.

   ```react
   import { combineReducers } from 'redux';
   import clientReducer from './clientReducer';
   
   export default combineReducers({
     posts: clientReducer
   });
   ```

9. Use redux in components.

   ```react
   import React, { Component } from 'react';
   import PropTypes from 'prop-types';
   import { connect } from 'react-redux';
   import { fetchPosts } from '../../actions/clientActions';
   
   class Posts extends Component {
     componentWillMount() {
       this.props.fetchPosts();
     }
   
     componentWillReceiveProps(nextProps) {
       if (nextProps.newPost) {
         this.props.posts.unshift(nextProps.newPost);
       }
     }
   
     render() {
       const postItems = this.props.posts.map(post => (
         <div key={post.id}>
           <h3>{post.title}</h3>
           <p>{post.body}</p>
         </div>
       ));
       return (
         <div>
           <h1>Posts</h1>
           {postItems}
         </div>
       );
     }
   }
   
   Posts.propTypes = {
     fetchPosts: PropTypes.func.isRequired,
     posts: PropTypes.array.isRequired,
     newPost: PropTypes.object
   };
   
   const mapStateToProps = state => ({
     posts: state.posts.items,
     newPost: state.posts.item
   });
   
   export default connect(mapStateToProps, { fetchPosts })(Posts);
   ```

   src/components/PostForm.js

   ```react
   import React, { Component } from 'react';
   import PropTypes from 'prop-types';
   import { connect } from 'react-redux';
   import { createPost } from '../../actions/clientActions';
   
   class PostForm extends Component {
     constructor(props) {
       super(props);
       this.state = {
         title: '',
         body: ''
       };
   
       this.onChange = this.onChange.bind(this);
       this.onSubmit = this.onSubmit.bind(this);
     }
   
     onChange(e) {
       this.setState({ [e.target.name]: e.target.value });
     }
   
     onSubmit(e) {
       e.preventDefault();
   
       const post = {
         title: this.state.title,
         body: this.state.body
       };
   
       this.props.createPost(post);
     }
   
     render() {
       return (
         <div>
           <h1>Add Post</h1>
           <form onSubmit={this.onSubmit}>
             <div>
               <label>Title: </label>
               <br />
               <input
                 type="text"
                 name="title"
                 onChange={this.onChange}
                 value={this.state.title}
               />
             </div>
             <br />
             <div>
               <label>Body: </label>
               <br />
               <textarea
                 name="body"
                 onChange={this.onChange}
                 value={this.state.body}
               />
             </div>
             <br />
             <button type="submit">Submit</button>
           </form>
         </div>
       );
     }
   }
   
   PostForm.propTypes = {
     createPost: PropTypes.func.isRequired
   };
   
   export default connect(null, { createPost })(PostForm);
   ```

   Update the App.js

   ```react
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
   ```

   

