import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

let { quiz_questions } = require('./quiz_data.json')

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz_position: 1,
    }
  }

  showNextQuestion() {
    this.setState({
      quiz_position: this.state.quiz_position + 1,
    })
  }

  handleResetClick() {
    this.setState({
        quiz_position: 1,
      })
  }

  render() {
    const isQuizEnd = !!(this.state.quiz_position - 1 === quiz_questions.length)
    return (
      <div>
        {isQuizEnd ? (
          <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />
        ) : (
          <QuizQuestion
            quiz_question={quiz_questions[this.state.quiz_position - 1]}
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
          />
        )}
      </div>
    )
  }
}

export default Quiz
