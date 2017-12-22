import React, { Component } from 'react';
// import * as h from './helper'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import CategoryList from './CategoryList.jsx';
import PostPreview from './PostPreview.jsx';
import SortPosts from './SortPosts.jsx';
import NewPost from './NewPost.jsx';

class PostsView extends Component {
  render() {
    const { posts } = this.props

    console.log(posts)
    return (
      <div className="row">
        <div className="col s6">
          <SortPosts/>
          {posts['posts']
            .map((post) =>
              <PostPreview post={post}/>
            )}
        </div>
        <div className="col s6">
          <CategoryList/>
          <NewPost/>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ posts }) {
  return {
    posts
  }
}

export default connect(
  mapStateToProps
 //  mapDispatchToProps
)(PostsView)
