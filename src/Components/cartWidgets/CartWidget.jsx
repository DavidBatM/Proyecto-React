import React from 'react'
import { BsFillCartFill } from "react-icons/bs"
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="container-cart">
        <BsFillCartFill size={30}/>
    </div>
  )
}

export default CartWidget

