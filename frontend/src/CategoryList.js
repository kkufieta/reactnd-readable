import React from 'react'
import * as ReadableAPI from './ReadableAPI'

class CategoryList extends React.Component {
  state = {
    categories: [],
  }

  // Load all the books once React has mounted
  componentDidMount() {
    ReadableAPI.getCategories().then((categories) => {
      this.setState({categories})
    })
  }

  render() {
    const { categories } = this.state
    return (
      <div className="collection">
        {categories.map((category) =>
          <a href="#" className="collection-item" key={category.name}>
            <span>{category.name}</span>
          </a>
        )}
      </div>
    )
  }
}

export default CategoryList
