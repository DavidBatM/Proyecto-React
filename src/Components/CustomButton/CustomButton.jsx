import { useState } from "react"

const CustomButton = ({texto, counter, setCounter})=>{   
       
    /*  // const[variable, funcion] 
    const [counter , setCounter] = useState(0)
    // minuto 40,3 del video  */

    const sumar = ()=>{
        setCounter( counter + 1)
       //  counter = counter + 1  esto no va a funcionar

    } 

    return(
        <>
            <button onClick={sumar}>{texto}</button>
            {/*  <button onClick={count}>{texto}</button> */}
            {/* <h2>{counter}</h2> */}
        </>        
    )
}

export default CustomButton