import { useState } from 'react'

const Button = (props) => {

  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


// const Statistics = (props) => {
//    return (
//     <div>
//     {props.text} {props.count}
//     </div>
//   ) 
// }

const StatisticsLine = (props) => {
  return (
   <div>
    <table>
      <th>
      {props.text} {props.count}
      </th>
    </table>
   </div>
 ) 
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [type,setType]= useState("")

  const handleGood = () => {
    setGood(good + 1) 
    setAll(allClicks + 1)
    setType("good")
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(allClicks + 1)
    setType("neutral")
  }

  const handleBad = () => {
    setBad(bad + 1) 
    setAll(allClicks + 1)
    setType("bad")
  }

  let all = good + bad + neutral
  let average = all/3
  let positive = (good / all) * 100

  if(allClicks === 0) {
    return (
      <div>
        <h2>give feedback</h2>
        <Button handleClick={handleGood} text='Good' />
        <Button handleClick={handleNeutral} text='Neutral' />
        <Button handleClick={handleBad} text='Bad' />
        <h2>statistics</h2>
        <div>
          No feedback given
        </div>
      </div>
    );
  }
const StatisticsCurrentType =()=>{ switch(type){
  case "good":
    return  <StatisticsLine text='good' count={good} allClicks={allClicks} 
    />
  case "neutral":
    return  <StatisticsLine text='neutral' count={neutral} allClicks={allClicks} 
    />
    case "bad":
    return  <StatisticsLine text='bad' count={bad} allClicks={allClicks} 
    />
  default:
    return<></>

}
}

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGood} text='Good'/>
      <Button handleClick={handleNeutral} text='Neutral'/>
      <Button handleClick={handleBad} text='Bad'/>
      <h2>statistics</h2>
      {/* <StatisticsLine text='good' count={good} allClicks={allClicks} 
      />
      <StatisticsLine text='neutral' count={neutral} allClicks={allClicks}/>
      <StatisticsLine text='bad' count={bad} allClicks={allClicks}/>
       */}
       <StatisticsLine text='all' count={all} allClicks={allClicks}/>
      <StatisticsLine text='average' count={average} allClicks={allClicks}/>
      <StatisticsLine text='positive' count={positive} allClicks={allClicks}/>
      <StatisticsLine allClicks={allClicks}/>
      {StatisticsCurrentType()}


    </div>
  )
}

export default App