import { useState } from 'react'

const MostVote = (props) => {
  var max = props.dataVote[0], index = 0
  for (var i = 1; i < props.anecdotes.length; i++) {
    console.log(i)
    if (props.dataVote[i] > max) {
      max = props.dataVote[i]
      index = i
    }
  }
  return (
    <div>{props.anecdotes[index]} has {max} votes </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const arrVotes = Array(anecdotes.length).fill(0)
  const [dataVote, setData] = useState(arrVotes)

  const nextAnecdotes = () => {
    var newVal = selected
    if (selected < anecdotes.length - 1) {
      newVal = selected + 1
    }
    setSelected(newVal)
  }
  const newVote = () => {
    const newArr = [...dataVote]
    newArr[selected]++
    setData(newArr)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]} has {dataVote[selected]} votes
      </div>
      <button onClick={newVote}>Vote</button>
      <button onClick={nextAnecdotes}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <MostVote anecdotes={anecdotes} dataVote={dataVote} selected={selected} />
    </>
  )
}

export default App