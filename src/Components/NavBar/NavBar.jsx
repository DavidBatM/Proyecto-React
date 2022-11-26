
import "./NavBar.css"


import CartWidget from "../cartWidgets/CartWidget"

export const NavBar = ()=> {

    return(
        <div className="navbar-container">
            <div className="container-logo">
                <img className="logo-navbar" src="https://res.cloudinary.com/dov01tflh/image/upload/v1669488561/BM_LOGO_jlix9o.png" alt="" />
            </div>
            <ul className="navbar">
                <li className="navbar-item">Placas de Video</li>
                <li className="navbar-item">Gabinetes</li>
                <li className="navbar-item">Procesadores</li>
                <li className="navbar-item">Motherboards</li>
            </ul>
            <CartWidget />
        </div>
    )
}

