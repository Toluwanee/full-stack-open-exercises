const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}


const Content = (props) => {
  console.log(props)
  return(
    <div>
      <p>
      {props.parts}
      </p>

    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
        Number of exercises {props.parts}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total />
    </div>
  )
}

export default App