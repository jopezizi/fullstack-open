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
      <Button text= "good" handler= {increasegood}/>
      <Button text= "neutral" handler= {increaseneutral}/>
      <Button text= "bad" handler= {increasebad}/>

      <Statistics good={good} neutral={neutral} bad={bad}/>  
    </div>
  )
}

const Button = (props) => {
  return (
      <button onClick={props.handler}>
        {props.text}
      </button>
  )
}



const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad

  if (all==0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={(props.good * 1 + props.neutral * 0 + props.bad * (-1))/(all)} />
      <StatisticLine text="positive" value={(props.good / (all))+' %'}/>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

export default App