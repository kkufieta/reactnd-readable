import React from 'react'
import * as ReadableAPI from './ReadableAPI'

class PostPreview extends React.Component {
  state = {
    id: '',
    timestamp: -1,
    voteScore: -1,
    title: '',
    author: '',
    body: '',
    category: '',
    commentCount: '',
    deleted: false
  }

  componentDidMount() {
    ReadableAPI.getPost("8xf0y6ziyjabvozdd253nd")
      .then((data) => {
        this.setState(state => {
          state.id = data.id
          state.timestamp = new Date(data.timestamp).toLocaleString()
          state.voteScore = data.voteScore
          state.title = data.title
          state.author = data.author
          state.body = data.body
          state.category = data.category
          state.commentCount = data.commentCount
          state.deleted = true
        })
        console.log(this.state)
        this.forceUpdate();
    })
  }

  render() {
    const { id, timestamp, voteScore, title,
            author, body, category,
            commentCount, deleted } = this.state
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
              <p>{ timestamp }</p>
              <p>Comments: { commentCount }</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostPreview
