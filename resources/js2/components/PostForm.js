import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/postAction';

class PostForm extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
          title: '',
          body: '',
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
  }

  onChange(e)
  {
      this.setState({
          [e.target.name] : e.target.value
      })
  }

  handleSubmit(e)
  {
    e.preventDefault();
    const post = {
        title: this.state.title,
        body: this.state.body
    }
    this.props.addPost(post);
  }
  render() {
    return (
      <div className="row justify-content-center">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label  className="col-form-label">Title</label>
                    <input type="text" className="form-control" name="title" value={this.state.title} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label  className="col-form-label">Body</label>
                    <textarea type="text" className="form-control" name="body" value={this.state.body} onChange={this.onChange}></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
      </div>
    )
  }
}

export default connect(null, {addPost})(PostForm);
