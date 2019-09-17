import React from "react";
import propTypes from "prop-types";

import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
class PostsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    // call action
    this.props.createPost(post);
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label> <br />
            <input type="text" name="title" onChange={this.onChange} />
          </div>
          <br />
          <div>
            <label>body:</label> <br />
            <textarea type="text" name="body" onChange={this.onChange} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
    
  }
}

PostsForm.propTypes = {
  createPost: propTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostsForm);
