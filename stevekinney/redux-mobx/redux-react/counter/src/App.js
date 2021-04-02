import { connect } from 'react-redux'
import './App.css'
import { decrementCount, incrementCount, resetCount } from './redux/actions'

function App(props) {
  return (
    <main className="Counter">
      <p className="count">{props.counter}</p>
      <section className="controls">
        <button onClick={props.incrementCount}>Increment</button>
        <button onClick={props.decrementCount}>Decrement</button>
        <button onClick={props.resetCount}>Reset</button>
      </section>
    </main>
  )
}

const mapStateToProps = (state) => ({
  counter: state.value,
})

const mapDispatchToProps = {
  incrementCount,
  decrementCount,
  resetCount,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
