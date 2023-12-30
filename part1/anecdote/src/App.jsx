import { useState } from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>
        next anecdote
      </button>

      <button onClick={props.handleVote}>
        vote
      </button>

      

    </div>
  )
}

const Display = (props) => {
  return(
    <div>
      <h2>Anecdote with most votes</h2>
      <p>
        {props.anecdotes}
      </p>
      <p>
        has {props.votes} votes
      </p> 
    </div>
  )
}

const App = () => {
  const [selected, setSelected] = useState(0)
  const [votes, countVotes] = useState(0)
  const [zeroArray, setZeroArray] = useState([0,0,0,0,0,0,0,0])
  const [index, setIndex] = useState(0)


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
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

    const handleNextAnecdote = () => {
    const updateAnecdote = getRandomInt(8)
    setSelected(updateAnecdote)
    console.log('current anecdote', updateAnecdote)

    
}


  const anecdotesCopy = [...anecdotes]
  let zeroArrayCopy = [...zeroArray]
  const handleDisplayedVoteCount = () => {
    if(anecdotes[selected] === anecdotesCopy[selected]){   
      zeroArrayCopy[selected] += 1
      setZeroArray(zeroArrayCopy)

      const updatedVotes = votes + 1
      countVotes(updatedVotes)
      console.log('Total vote count', updatedVotes)


    // let maxNumber = Math.max(...zeroArrayCopy)
    let indexOfMax = zeroArrayCopy.indexOf(Math.max(...zeroArrayCopy))
    setIndex(indexOfMax)
    }
    else{
      console.log('points:', points[selected])
    }

  }

  return (
    <div>
      {anecdotes[selected]}
      <Button handleClick={handleNextAnecdote} handleVote={handleDisplayedVoteCount}/>
      <Display anecdotes={anecdotes[index]} votes = {zeroArrayCopy[index]}/>     
    </div>
  )
}

export default App