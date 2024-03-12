import { useState } from 'react'

const showCount = () => {
  const [counter, setCounter] = useState(0);

  const sum = () => {
    setCounter(counter + 1);
  }

  const sub = () => {
    setCounter(counter - 1);
  }

  return(
    <div>
      <h1>Contador</h1>
      <button onClick={sum}>Sumar</button>
      <button onClick={sub}>Restar</button>
      <h2>{counter}</h2>
    </div>
  )
}

export default showCount;