import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component{
    static defaultProps = {
        abcd : "Angular",
    }
    static propTypes = {
        abcd : PropTypes.string,
    }

    state = {
        num : 0
    }

    render(){
        return(
            <Fragment>
                안녕하세요. {this.props.abcd}
                <br/>
                여기는 state 값이 표현됩니다.
                {this.state.num}
                <button onClick={()=>{
                        this.setState({
                            num:this.state.num + 1
                        })
                }}></button>
                
            </Fragment>
        )
    }
}

export default MyComponent;