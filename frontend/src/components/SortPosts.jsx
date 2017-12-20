import React from 'react'
import * as ReadableAPI from './ReadableAPI.jsx'

class SortPosts extends React.Component {
  state = {
    sortList: [
      'Most Favorite',
      'Least Favorite',
      'Newest',
      'Oldest'
    ],
    chosen: 0
  }

  render() {
    const { sortList, chosen } = this.state
    return (
      <div className="row">
        <div className="col s12">
          <a className='dropdown-button btn' href='#' data-activates='dropdown1'> {sortList[chosen] }</a>
          <ul id='dropdown1' className='dropdown-content'>
            <li className="divider"></li>
              {sortList.map((filter) =>
                <li key={filter}><a href="#!">{filter}</a></li>
              )}
          </ul>
        </div>
      </div>
    )
  }
}

export default SortPosts
