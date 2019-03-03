import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

class Posts extends Component {

  componentWillMount()
  {
      this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps)
  {
    if (nextProps.newPost) {
        this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => <p>{post.title}</p>)
    return (
      <div>
        <h2>Hello</h2>
        {postItems}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts);
