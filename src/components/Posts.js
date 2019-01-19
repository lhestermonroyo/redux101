import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';
import {Card, CardBody, CardHeader} from 'reactstrap';
import PostForm from './PostForm';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    } 
  }
  render() {
    const postItems = this.props.posts.map(post => (
      <Card key={post.id} className="mb-2">
        <CardHeader style={{textTransform: "uppercase"}}>{post.title}</CardHeader>
        <CardBody>
          <p>{post.body}</p>
        </CardBody>
      </Card>
    ));
    return (
      <div>
        <h1 className="text-center display-4">Welcome to Redux101</h1>
        <hr></hr>
        <PostForm></PostForm>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts);