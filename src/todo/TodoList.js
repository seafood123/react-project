import React, {Component} from 'react';

const today = (new Date().getMonth() +1)+ "/" + new Date().getDate();

class TodoList extends Component{

    state = {
        today : today,
    }

    render(){
        const {today} = this.state;
        return(
            <div>
                오늘은 {today} 입니다.
            </div>
        )
    }
}

export default TodoList;