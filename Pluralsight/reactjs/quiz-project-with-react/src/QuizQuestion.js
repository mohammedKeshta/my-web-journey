import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      incorrectAnswer: false,
    }
  }

  handleClick(buttonText) {
    const {
      quiz_question: { answer },
      showNextQuestionHandler,
    } = this.props
    let isAnswer = !!(buttonText === answer)
    this.setState({ incorrectAnswer: !isAnswer })
    if (isAnswer) {
      showNextQuestionHandler()
    }
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        {this.state.incorrectAnswer && (
          <p className="error">Sorry, that's not right</p>
        )}
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => (
                <QuizQuestionButton
                  button_text={answer_option}
                  key={index}
                  clickHandler={this.handleClick.bind(this)}
                />
              )
            )}
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion
