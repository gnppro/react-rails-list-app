import React, { Component } from 'react'
import axios from 'axios'
import List from './List';
import NewListForm from './NewListForm';

class ListContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      lists: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/lists.json')
    .then((result) => {
      // console.log(result.data)
      this.setState({
        lists: result.data
      })
    }).catch((err) => {
      console.log(err)
    });
  }

  addNewList = (title, excerpt) => {
    axios.post('/api/v1/lists', { list: {title, excerpt} })
    .then((result) => {
      console.log(result)
      const lists = [ ...this.state.lists, response.data ]
      this.setState({lists})
    }).catch((err) => {
      console.log(err)
    });
  }

  render(){
    return(
      <div className="list-container">
        {this.state.lists.map (list => {
          return(
            <List list={list} key={list.id}/>
          )
        })}
        <NewListForm onNewList={this.addNewList} />
      </div>
    )
  }
}

export default ListContainer