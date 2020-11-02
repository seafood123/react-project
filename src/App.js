import React, { Component, Fragment } from 'react';
import axios from "axios";
import Listpage from "./page/lp";

class App extends Component {
  state = {
    loading : false,
    ItemList : []
  };

  loadItem = async() => {
    axios
      .get("./SearchJson.json")
      .then(({data}) => {
        this.setState({
          loading : true,
          ItemList : data.Item
        });
      })
      .catch(e => {
        console.error(e);
        this.setState({
          loading: false
        })
      })
  }
  
  componentDidMount(){
    this.loadItem();
  }

  render(){
    const {ItemList} = this.state;
    return(
      <div>
        <Listpage Itemcard = {ItemList}/>
      </div>
    )
  }

}

export default App;