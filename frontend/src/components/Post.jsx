import React from 'react'
import * as ReadableAPI from './ReadableAPI.jsx'
import './Post.css';

class Post extends React.Component {
  state = {
    id: '',
    timestamp: -1,
    voteScore: -1,
    title: '',
    author: '',
    body: '',
    category: '',
    commentCount: '',
    deleted: false,
    comments: []
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
        this.forceUpdate()
        return data
      })
      .then((data) =>
            {return ReadableAPI.getComments(data.id)})
      .then((data) => {
        this.setState(state => {
          state.comments = data
        })
        console.log(this.state)
        this.forceUpdate()
      })
  }

  render() {
    const { id, timestamp, voteScore, title,
            author, body, category,
            commentCount, deleted, comments} = this.state
    return (
      <div className="row">
        <div className="col s12">
          <div className="card">
            <div className="card-content text-darken-2 row">
              <div className="col s10">
                <span className="card-title">{ title }</span>
              </div>
              <div className="col s2">
                <a className='edit-delete-button dropdown-button btn' href='#' data-activates='dropdown2'>
                  <i className="material-icons">more_vert</i>
                </a>
                <ul id='dropdown2' className='dropdown-content'>
                  <li><a href="#!"><i className="material-icons">create</i></a></li>
                  <li><a href="#!"><i className="material-icons">delete</i></a></li>
                </ul>
              </div>
              <div className="row col s12">
                <p>{ body }</p>
              </div>
            </div>
            <div className="card-action">
              <p>{ author }</p>
              <p>{ voteScore }</p>
              <a href="#"><i className="material-icons">thumb_up</i></a>
              <a href="#"><i className="material-icons">thumb_down</i></a>
              <p>{ timestamp }</p>
            </div>
            {comments.map((comment) =>
              <div key={comment.id}>
                <div className="card blue lighten-5">
                  <div className="card-content row">
                    <div className="col s10">
                      <p>{ comment.body }</p>
                    </div>
                    <div className="col s2">
                      <a className='edit-delete-button dropdown-button btn' data-activates={'dropdown' + comment.id}>
                        <i className="material-icons">more_vert</i>
                      </a>
                      <ul id={'dropdown' + comment.id} className='dropdown-content'>
                        <li><a href="#!"><i className="material-icons">create</i></a></li>
                        <li><a href="#!"><i className="material-icons">delete</i></a></li>
                      </ul>
                    </div>

                  </div>
                  <div className="card-action">
                    <p>{ comment.author }</p>
                    <p>{ comment.voteScore }</p>
                    <a href="#"><i className="material-icons">thumb_up</i></a>
                    <a href="#"><i className="material-icons">thumb_down</i></a>
                    <p>{ comment.timestamp }</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Post
