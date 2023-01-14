import React from 'react'
/* import CustomButton from '../CustomButton/CustomButton' */

import botoncito from "../CustomButton/CustomButton"
/* Al estar importado por defecto yo lo puedo importar con cualquier nombre */
import { useState, useEffect } from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ( {greeting} ) => {

  const [ isDark, setIsDark] = useState( false )
  //FLAG O BANDERA
  const tooggleMode = ()=>{

    /* if(isDark === true){

      setIsDark(false)
    }else if(isDark === false){
      setIsDark(true)
    } */
    setIsDark( !isDark )
  }
  console.log(isDark)
  //Callback funcion que recibe otra funcion
  useEffect( ()=>{
    console.log("hola primer efecto");
 } )

  return (
    <div className={isDark ? "container-items-dark" : "container-items-light"}>
      <h2>{greeting}</h2> 
      {/* <CustomButton texto={"logout"}/> */}
      <button onClick={tooggleMode}>{isDark ? "cambiar a modo claro":"cambiar a modo oscuro"}</button>
    </div>
  )
}
/* 1 hora 29m */
export default ItemListContainer