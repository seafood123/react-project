import React, {Component} from 'react';

const MyName = ({name, style}) => {
    return(
        <div style={style}>
            안녕하세요. <b> {name} </b> 이에요~.
        </div>
    )
}

export default MyName;