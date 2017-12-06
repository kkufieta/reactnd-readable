import React, { Component } from 'react';
import * as ReadableAPI from './ReadableAPI'
import logo from './logo.svg';
import * as h from './helper'
import './App.css';

class App extends Component {
  componentDidMount() {
    ReadableAPI.getCategories().then((data) => {
      console.log(data)
    })
    ReadableAPI.getPostsFromCategory('react').then((data) => {
      console.log(data)
    })
    ReadableAPI.getAllPosts('react').then((data) => {
      console.log(data)
    })
    /* ReadableAPI.setPost(h.uuidv4(), Date.now(),
                        'hello this is kat',
                        'kats are awesome', 'kat', 'react')
      .then((data) => {
      console.log(data)
    })
    */
    ReadableAPI.getPost("8xf0y6ziyjabvozdd253nd")
      .then((data) => {
                          console.log(data)
                        })
    ReadableAPI.voteOnPost("8xf0y6ziyjabvozdd253nd", "upVote")
      .then((data) => {
        console.log(data)
      })
    ReadableAPI.editPost("8xf0y6ziyjabvozdd253nd", 'dogs', 'dogs are awesome')
      .then((data) => {
        console.log(data)
      })

    ReadableAPI.deletePost("8xf0y6ziyjabvozdd253nd")
      .then((data) => {
        console.log(data)
      })
    ReadableAPI.getComments("d66055d1-33ba-4159-b1e2-05247d911275")
      .then((data) => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
