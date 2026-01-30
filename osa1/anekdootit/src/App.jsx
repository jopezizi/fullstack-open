import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const next = () => {
    setSelected (current => {
    let random = Math.floor(Math.random() * anecdotes.length)
    if (random == current) {
      random = (current + 1) % anecdotes.length
    }
      return random
  })
  }
  
  const [votes, setVotes] = useState(
    new Array(anecdotes.length).fill(0)
  )

  const vote = () => {
    setVotes (current => {
    const copy = [...current]
    copy[selected] += 1
    return copy
  })
} 
  return (
    <div>
      <p>
        {anecdotes[selected]}
        <br />
        has {votes[selected]} votes
        <br />
      <Button handler = {vote} text='vote'/>
      <Button handler = {next} text='next anecdote'/>
            </p>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick = {props.handler}>
      {props.text}
    </button>
  )
}
export default App

