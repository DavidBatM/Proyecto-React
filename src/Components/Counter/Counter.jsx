import { useState } from 'react'
import CustomButton from '../CustomButton/CustomButton'

const Counter = () => {
    
    const [counter, setCounter] = useState(0)

  return (
    <div>
        <h2>{counter}</h2>
        <CustomButton texto={"sumar"} counter={counter} setCounter={setCounter}/>
    </div>
  )
}
/*  hora 1, min 13 */
export default Counter