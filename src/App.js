import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation';
import Formulario from './Components/Formulario';
import {todos} from './task.json';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo
        </p>
        <p>Hola</p>
        
      </header>
    </div>
  );
}*/
class App extends Component{

  //{this.state.Titulo}-{this.state.ntareas}

  constructor(){
    super();
    this.state={
      //Titulo:'App tareas',
      //ntareas:10
      todos
    };
    this.addtodo=this.addtodo.bind(this);
  }
  addtodo(todo){
    this.setState({
      todos:[...this.state.todos,todo]
    })
    
  }
  addtodo(todo){
/*     this.setState({
      todos:[...this.state.todos,todo]
    })
     */
    this.setState({
      todos:[...this.state.todos,todo]
    })
  }
  elimina(index){
    //if(window.confirm('Desea eliminar la tarea')){
      this.setState({
        todos: this.state.todos.filter((e,i)=>{
          return i !== index
        })
      })
    //}
  }
render() {
  const todos=this.state.todos.map((todo,i)=>{
    return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>
                {todo.titulo}
              </h3>
              <span className="badge badge-pill badge-danger ml-2">{todo.prioridad} </span>
            </div>
          <div className="card-body">
            <p>
              {todo.descripcion}
            </p>
            <p>
              <mark>{todo.responsable}</mark>
            </p>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger" onClick={this.elimina.bind(this,i)}>
          Eliminar
          </button>
                    <button className="btn btn-warning" onClick={this.elimina.bind(this,i)}>
          Editar
          </button>
        </div>
        </div>
        </div>
    )
  })
  return (
    
    <div className="App">
    
    <Navigation cantidad={this.state.todos.length}/>
    <div className="container ">
      <div className="row md-4"><Formulario onAddTodo={this.addtodo}/> {todos}</div>
    </div>
    
    {/*   <header>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header> */}
      
    </div>
  );
  }
}
export default App
/*function App2(){
  return <p>hola 2</p>
}
//export default App2;
class Hello extends React.Component {
  constructor(props){
    //Since we are extending the default constructor,
    //handle default activities first.
    super(props);
    //Extract the first-name from the prop
    let firstName = this.props.name.split(" ")[0];
    //In the constructor, feel free to modify the
    //state property on the current context.
    this.state = {
    name: firstName
    }
    }
  render() {
  return( <h1>Hello, {this.props.name}!</h1>
  )
  }
  }
  //export default Hello;
  const MyComponent = props => {
    return <h1>Hello, {props.name}!2</h1>;
    };
  export default MyComponent*/
//export default App;

