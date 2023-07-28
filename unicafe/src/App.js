import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistic = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </>
    )
  }
  var ave = 0;
  if (!(props.good === 0 && props.neutral === 0 && props.bad === 0)) {
    ave = (props.good - props.bad)/props.total
  }
  var pos = 0
  if (!(props.good === 0 && props.neutral === 0 && props.bad === 0)) {
    pos = props.good / props.total * 100
    pos = pos + ' %'
  }

  return (
    <>
    <h1>statistics</h1>
    <table>
    <StatisticLine text="good" value={props.good} />
    <StatisticLine text="neutral" value={props.neutral} />
    <StatisticLine text="bad" value={props.bad} />
    <StatisticLine text="all" value={props.total} />
    <StatisticLine text="average" value={ave} />
    <StatisticLine text="positive" value={pos} />
    </table>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {
    const newVal = good + 1
    setGood(newVal)
  }
  const increaseNeutral = () => {
    const newVal = neutral + 1
    setNeutral(newVal)
  }
  const increaseBad = () => {
    const newVal = bad + 1
    setBad(newVal)
  }
  const total = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={increaseGood} />
      <Button text="neutral" onClick={increaseNeutral} />
      <Button text="bad" onClick={increaseBad} />
      <Statistic total={total} good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App