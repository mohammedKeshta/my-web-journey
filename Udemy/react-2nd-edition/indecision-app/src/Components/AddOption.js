import React, { Component } from 'react'

class AddOption extends Component {
  state = {
    option: '',
    error: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    const error = this.props.handleAddOption(this.state.option.trim())
    this.setState(() => ({ error }))
  }

  render() {
    const { error, option } = this.state
    return (
      <div className="add-option">
        {error && <h1 className="add-option__error">{error}</h1>}
        <form className="add-option__form" onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="option"
            onChange={this.handleChange}
            onBlur={this.handleChange}
            onFocus={() => this.setState(() => ({ error: '', option: '' }))}
            value={option}
          />
          <button type="submit" className="button">
            Add Option
          </button>
        </form>
      </div>
    )
  }
}

export default AddOption
