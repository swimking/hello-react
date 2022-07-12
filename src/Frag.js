import React from "react";
import './app.css'
const Fragment = (props)=>{
    return(
        <div className="container">
            <ul>
                <li>{props.name}</li>
                <li>Age</li>
                <li>sex</li>
                <li>address</li>
            </ul>
        </div>  
    )
}
class Car extends React.Component{
    constructor(){
        super()
        this.state ={color:'red'}
    }
    render(){
        return <div>
                    <p>Hello</p>

                </div>
    }
       
    
}
export default Fragment