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
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App