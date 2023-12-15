import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}



const Statistics = (props) => {
  return(
    <div>
    {props.text} {props.count}
    </div>
    
  )
  
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //const [all, setAll] = useState(0)

  const handleGood = () => {
    setGood(good + 1) 
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1) 
  }

  const handleBad = () => {
    setBad(bad + 1) 
  }

  let all = good + bad + neutral
  console.log(all)
  let average = all/3
  console.log('average', average)
  let positive = (good / all) * 100


  return (
    <div>
      <h2>give feedback</h2>
      
      <Button handleClick={handleGood} text='Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>
      <h2>statistics</h2>
      <Statistics text='good' count={good}/>
      <Statistics text='neutral' count={neutral}/>
      <Statistics text='bad' count={bad}/>
      <Statistics text='all' count={all}/>
      <Statistics text='average' count={average}/>
      <Statistics text='positive' count={positive}/>
      


    </div>
  )
}

export default App