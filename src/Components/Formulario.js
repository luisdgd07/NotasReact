import React,{Component} from 'react';
import {todos} from './../task.json';
class Formulario extends Component{
    constructor(){
        super();
        this.state={
            titulo:'',
            responsable:'',
            descripcion:'',
            prioridad:'baja'
        };
        this.oninput=this.oninput.bind(this);
        this.onsubmit=this.onsubmit.bind(this);
    }
    oninput(e){//agregar
        const{value,name}= e.target;
        this.setState({
            [name]:value
        })
            this.message='';
    }
    onsubmit(e){
        e.preventDefault();
        
        if(this.state.titulo==''||this.state.responsable==''||this.state.descripcion==''){
            this.message='Complete los campos';
            const{value,name}= e.target;
            this.setState({
                [name]:value
            })
        }else{
        this.props.onAddTodo(this.state);
        this.message='';
        }
    }
    render(){
        return(
            <div className="card card mt-4">
                <form className="card-body" onSubmit={this.onsubmit}>
                    <div className="form-group">
                        <input type="text" name="titulo" 
                        onChange={this.oninput}
                        className="form-control" placeholder="Titulo"/>
                    </div>

                    <div className="form-group">
                        <input type="text" onChange={this.oninput} name="responsable" className="form-control" placeholder="Responsable"/>
                    </div>
   
 
                    <div className="form-group">
                        <input type="text" onChange={this.oninput} name="descripcion" className="form-control" placeholder="Descripción"/>
                    </div>
                     
                    <div className="form-group">
                        <select name="prioridad" onChange={this.oninput} ><option>Baja</option>
                        <option>Media</option>
                        <option>Alta</option>
                        </select>
                    </div>
                    <div className="form-group">
                    <input type="submit" onChange={this.oninput} name="descripcion" className="form-control btn btn-success" />
                    </div>
                    <div className="form-group">
                        <p onChange={this.onChange} >{this.message}</p>
                    </div>
                </form>
            </div>
        )
    }
    
}
export default Formulario;