import React, { Component } from 'react';
import uuidv1 from 'uuid';
import { addArticle } from '../redux/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({ addArticle: article => dispatch(addArticle(article)) });

class ConnectedForm extends Component {
  state = {
    title: ''
  };

  handleChange = event => {
    event.preventDefault();
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default Form;
