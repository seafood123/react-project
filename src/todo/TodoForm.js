import React , {Component} from 'react';

class TodoForm extends Component{

    state = {
        todo : '',
    }

    handleClick = (e) => {
        this.props.onChange(this.state);
    }

    handleChange = (e) => {
        this.setState({
            todo : e.target.value,
        })
    }

    render(){
        
       return(
            <div>
                <input  placeholder = "할 일을 적어주세요!" 
                        name = "todoInput"
                        onChange = {this.handleChange}/>
                <button onClick={this.handleClick}>SAVE</button>
            </div>
        )
    }
}

export default TodoForm;