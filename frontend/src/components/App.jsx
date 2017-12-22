import React, { Component } from 'react';
// import * as h from './helper'
import { connect } from 'react-redux'
import { addRecipe, removeFromCalendar, loadCategories } from '../actions'
import CategoryList from './CategoryList.jsx';
import { Route } from 'react-router-dom'
import PostPreview from './PostPreview.jsx';
import SortPosts from './SortPosts.jsx';
import Post from './Post.jsx';
import EditView from './EditView.jsx';
import NewPost from './NewPost.jsx';
import PostsView from './PostsView.jsx';
import './App.css';

class App extends Component {
  componentDidMount() {
    /*
    ReadableAPI.getCategories().then((data) => {
      console.log(data)
    })
    ReadableAPI.getPostsFromCategory('react').then((data) => {
      console.log('get posts: ', data)
    })
    ReadableAPI.getAllPosts('react').then((data) => {
      console.log(data)
    })
    ReadableAPI.setPost(h.uuidv4(), Date.now(),
                        'hello this is kat',
                        'kats are awesome', 'kat', 'react')
      .then((data) => {
      console.log(data)
    })
    ReadableAPI.getPost("8xf0y6ziyjabvozdd253nd")
      .then((data) => {
        console.log('getPost: ', data)
                        })
    ReadableAPI.voteOnPost("8xf0y6ziyjabvozdd253nd", "upVote")
      .then((data) => {
        console.log('voteOnPost: ', data)
      })
    ReadableAPI.editPost("8xf0y6ziyjabvozdd253nd", 'dogs', 'dogs are awesome')
      .then((data) => {
        console.log('editPost: ', data)
      })

    ReadableAPI.deletePost("8xf0y6ziyjabvozdd253nd")
      .then((data) => {
        console.log('deletePost: ', data)
      })
    ReadableAPI.getComments("d66055d1-33ba-4159-b1e2-05247d911275")
      .then((data) => {
        console.log('getComments: ', data)
      })
    */
  }

  render() {
    const { categories, getCategories } = this.props

    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3>Unicorn Forest / Category</h3>
          </div>
        </div>
        <Route exact path="/" render={() => (
          <PostsView/>
        )}/>
        <Route path="/post-id" render={({ history }) => (
          <div className="row">
            <Post/>
          </div>
        )}/>
        <Route path="/edit-id" render={({ history }) => (
          <div className="row">
            <EditView/>
          </div>
        )}/>
      </div>
    );
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: () => dispatch(loadCategories())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
