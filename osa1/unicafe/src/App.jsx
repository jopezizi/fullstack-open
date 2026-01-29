import { useState } from 'react'

const App = () => {
  const parts = {
      headers: {
        1: 'give feedback',
        2: 'statistics'
      },
  }

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increasegood = () => setGood(good + 1)
  const increaseneutral = () => setNeutral(neutral + 1)
  const increasebad = () => setBad(bad + 1)
  
  return (
    <div>
      <h1>{parts.headers[1]}</h1>
      <button onClick={increasegood}>
        good
      </button>
      <button onClick={increaseneutral}>
        neutral
      </button>
        <button onClick={increasebad}>
        bad
      </button>
      <h1>{parts.headers[2]}</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>  
    </div>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  
  if (all==0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {all}</p>
      <p>average {(props.good * 1 + props.neutral * 0 + props.bad * (-1))/(all)}</p>
      <p>positive {props.good / (all)} %</p>
    </div>
  )
}
export default App