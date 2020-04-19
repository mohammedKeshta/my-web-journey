import React, { Component } from 'react'
import Header from './Header'
import Action from './Action'
import AddOption from './AddOption'
import Options from './Options'
import ModalOption from './ModalOption'

class IndecisionApp extends Component {
  state = {
    subtitle: 'Put your life in the hand of a computer.',
    options: this.props.options,
    selectedOption: undefined,
  }

  componentDidMount() {
    try {
      const jsonStr = localStorage.getItem('options')
      const options = JSON.parse(jsonStr)
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch (e) {
      console.error(e.message)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  handleOnRemove = (id) => {
    this.setState((prevState) => ({
      options: typeof id === 'string' ? prevState.options.filter((option) => option !== id) : [],
    }))
  }

  handlePick = () => {
    const { options } = this.state
    const randomIndex = Math.floor(Math.random() * options.length)
    const option = options[randomIndex]
    this.setState(() => ({
      selectedOption: option,
    }))
  }

  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }

  handleAddOption = (option) => {
    const { options } = this.state

    if (!option) {
      return 'Enter valid value to add item'
    } else if (options.indexOf(option) > -1) {
      return 'This item already exist please enter another option'
    }

    this.setState((prevState) => {
      return { options: [...prevState.options, ...[option]] }
    })
  }

  render() {
    const { subtitle, options, selectedOption } = this.state
    const hasOptions = options.length === 0

    return (
      <>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action handlePick={this.handlePick} hasOptions={hasOptions} />
          <AddOption handleAddOption={this.handleAddOption} />
          <Options options={options} handleOnRemove={this.handleOnRemove} />
          <ModalOption closeModal={this.handleCloseModal} selectedOption={selectedOption} />
        </div>
      </>
    )
  }
}

IndecisionApp.defaultProps = {
  options: [],
}

export default IndecisionApp
