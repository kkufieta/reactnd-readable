import React, { PropTypes } from 'react'
import * as ReadableAPI from './ReadableAPI.jsx'
import { connect } from 'react-redux'

const PostPreview = ({ post }) => {
  const { id, timestamp, voteScore, title,
          author, body, category,
          commentCount, deleted } = post
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content text-darken-2">
            <span className="card-title">{ title }</span>
            <p>{ body }</p>
          </div>
          <div className="card-action">
            <p>{ author }</p>
            <p>{ voteScore }</p>
            <a href="#"><i className="material-icons">thumb_up</i></a>
            <a href="#"><i className="material-icons">thumb_down</i></a>
            <p>{ new Date(timestamp).toLocaleString() }</p>
            <p>Comments: { commentCount }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps ({ posts }) {
  return {
    posts
  }
}

export default connect(
  mapStateToProps
)(PostPreview)
