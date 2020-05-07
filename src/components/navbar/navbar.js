import React, { Component } from "react"
import '../navbar/navbar.css'


class Navbar extends Component {


    render(){
        return (
            <div>
                <nav className="nav">
                    <a href="#" className="nav-item is-active" active-color="orange">Home</a>
                    <a href="#" className="nav-item" active-color="green">About</a>
                    <a href="#" className="nav-item" active-color="blue">Testimonials</a>
                    <a href="#" className="nav-item" active-color="red">Blog</a>
                    <a href="#" className="nav-item" active-color="rebeccapurple">Contact</a>
                    <span className="nav-indicator"></span>
                </nav>
            </div>
        )
    }

   
}

export default Navbar