import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {createPost} from '../actions/postActions';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    
    const post = {
      title: this.state.title,
      body: this.state.body
    }

    if(this.props.createPost(post)) {
      this.setState({
        title: '',
        body: ''
      });
    }
  }
  render() {
    return (
      <div>
        <Form className="mb-4" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label>Title:</Label>
            <Input type="text" onChange={this.handleChange} value={this.state.title} name="title"></Input>
          </FormGroup>
          <FormGroup>
            <Label>Body:</Label>
            <Input type="textarea" onChange={this.handleChange} value={this.state.body} name="body"></Input>
          </FormGroup>
          <Button color="primary">Add Post</Button>
        </Form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(PostForm);