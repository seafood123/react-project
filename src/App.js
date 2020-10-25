import React, { Component, Fragment } from 'react';
import logo from './logo192.png';
import MyName from './hello/MyName';
import Counter from './hello/Counter';

import PhoneForm from './phoneBook/PhoneForm';
import PhoneInfoList from './phoneBook/PhoneInfoList';

class App extends Component {

  id = 2;

  state = {
    information: [
      {
        id: 0,
        name: '박대기',
        phone: '010-4401-3411'
      },
      {
        id: 1,
        name: '김민준',
        phone: '010-0000-0001'
      },
    ]
  }

  handleCreate = (data) => {
    const { information } = this.state;
    console.log(data);
    this.setState({
      information: information.concat({
        id: this.id++,
        ...data
      })
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id ? { ...info, ...data } : info
      )
    })
  }

  render() {
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    }
    const { information } = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList data={information} onRemove={this.handleRemove}
          onUpdate={this.handleUpdate} />
      </div>
    )
  }
}

export default App;