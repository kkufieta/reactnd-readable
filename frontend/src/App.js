import React, { Component } from 'react';
// import * as h from './helper'
import CategoryList from './CategoryList'
import PostPreview from './PostPreview'
import SortPosts from './SortPosts'
import Post from './Post'
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
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h3>Unicorn Forest</h3>
          </div>
        </div>
        <div className="row">
          <div className="col s6">
            <SortPosts/>
            <PostPreview/>
          </div>
          <div className="col s6">
            <CategoryList/>
          </div>
        </div>
        <div className="row">
          <Post/>
        </div>
      </div>
    );
  }
}

export default App;
