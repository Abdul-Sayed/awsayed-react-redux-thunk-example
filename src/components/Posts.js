import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from "uuid";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentDidUpdate(nextProps) {
    // nextProps.newPost && this.props.posts.unshift(nextProps.newPost);

    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={uuid.v4()}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <React.Fragment>
        <h1>Posts</h1>
        {postItems}
      </React.Fragment>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
