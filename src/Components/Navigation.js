import React,{Component} from 'react';
import {todos} from './../task.json';
class Navigation extends Component{
    constructor(){
        super();
        this.state={
          //Titulo:'App tareas',
          //ntareas:10
          todos
        }
      }
    render(){
    return(<nav className="navbar navbar-light  bg-light"><a href="" >Tareas
    <span className="badge badge-pill badge-success ml-2">{this.props.cantidad}</span>
    </a></nav>);
    
    }
}
export default Navigation;