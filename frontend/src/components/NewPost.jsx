import React, { Component } from 'react';
import './App.css';

class NewPost extends Component {
  render() {
    return (
      <div>
        <a className="btn-floating tooltipped btn-large waves-effect waves-light teal lighten-2" data-position="right" data-delay="50" data-tooltip="New Post">
          <i className="material-icons">add</i>
          <p>New Post</p>
        </a>
      </div>
    );
  }
}

export default NewPost;

