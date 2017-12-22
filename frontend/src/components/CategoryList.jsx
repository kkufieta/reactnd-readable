import React from 'react';
import * as ReadableAPI from './ReadableAPI.jsx';
import { connect } from 'react-redux'

class CategoryList extends React.Component {
  render() {
    const { categories } = this.props

    return (
      <div className="collection">
        <h5 className="collection-item"> Categories </h5>
        {categories['categories'].map((category) =>
          <a href="#" className="collection-item" key={category.name}>
            <span>{ category.name }</span>
          </a>
        )}
      </div>
    )
  }
}

function mapStateToProps ({ categories }) {
  return {
    categories
  }
}

// function mapDispatchToProps (dispatch) {
  // return {
    // getCategories: () => dispatch(loadCategories())
  // }
// }

export default connect(
  mapStateToProps
 //  mapDispatchToProps
)(CategoryList)
