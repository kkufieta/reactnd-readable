const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server
let token = localStorage.token
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8)
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// GET /categories
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
  .then(res => res.json())
  .then(data => data.categories)

// GET /:category/posts
export const getPostsFromCategory = (category) =>
  fetch(`${api}/${category}/posts`, { headers })
  .then(res => res.json())
  .then(data => data)

// GET /posts
export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
  .then(res => res.json())
  .then(data => data)

// POST /posts
export const setPost = (id, timestamp, title, body,
                        author, category) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
        ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, timestamp, title, body,
                           author, category})
  }).then(res => res.json())
  .then(data => data)

// GET /posts/:id
export const getPost = (postId) =>
  fetch(`${api}/posts/${postId}`, { headers })
  .then(res => res.json())
  .then(data => data)

// POST /posts/:id
// vote: String: Either "upVote" or "downVote"
export const voteOnPost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
        ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option})
  }).then(res => res.json())
  .then(data => data)

// PUT /posts/:id
export const editPost = (id, title, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: {
        ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  }).then(res => res.json())

// DELETE /posts/:id
export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: {
        ...headers
    }
  }).then(res => res.json())

// GET /posts/:id/comments
export const getComments = (postId) =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
  .then(res => res.json())
  .then(data => data)

// POST /comments
export const setComment = (id, timestamp, body, author, parentId) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
        ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id, timestamp, body, author, parentId})
  }).then(res => res.json())
  .then(data => data)

// GET /comments/:id
export const getComment = (commentId) =>
  fetch(`${api}/comments/${commentId}`, { headers })
  .then(res => res.json())
  .then(data => data)

// POST /comments/:id
export const voteOnComment = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
        ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id})
  }).then(res => res.json())
  .then(data => data)

// PUT /comments/:id
export const editComment = (id, timestamp, body) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: {
        ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ timestamp, body })
  }).then(res => res.json())

// DELETE /comments/:id
export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: {
        ...headers
    }
  }).then(res => res.json())
