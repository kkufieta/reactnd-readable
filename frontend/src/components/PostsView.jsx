import React, { Component } from 'react';
// import * as h from './helper'
import { Route } from 'react-router-dom'
import CategoryList from './CategoryList.jsx';
import PostPreview from './PostPreview.jsx';
import SortPosts from './SortPosts.jsx';
import NewPost from './NewPost.jsx';

class PostsView extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s6">
          <SortPosts/>
          <PostPreview/>
        </div>
        <div className="col s6">
          <CategoryList/>
          <NewPost/>
        </div>
      </div>
    );
  }
}

export default PostsView;
