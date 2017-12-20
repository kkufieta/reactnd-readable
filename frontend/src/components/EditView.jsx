import React from 'react'
import * as ReadableAPI from './ReadableAPI.jsx'
import './EditView.css'

class EditView extends React.Component {
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
        <form className="col s12">
          <div className="row">
            <div className="input-field col s8">
              <input value={ title } id="input_text" type="text" data-length="10"/>
              <label htmlFor="input_text">Title</label>
            </div>
            <div className="col s2">
            </div>
            <div className="col s1">
              <a className="waves-effect waves-light btn">
                <i className="material-icons left">save</i>
              </a>
            </div>
            <div className="col s1">
              <a className="waves-effect waves-light btn">
                <i className="material-icons left">close</i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea value={ body } id="textarea1" className="materialize-textarea" data-length="120"></textarea>
              <label htmlFor="textarea1">Body</label>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EditView
