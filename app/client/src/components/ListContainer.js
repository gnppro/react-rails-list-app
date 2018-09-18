import React, { Component } from 'react'
import axios from 'axios'

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
      console.log(result.data)
      this.setState({
        lists: result.data
      })
    }).catch((err) => {
      console.log(err)
    });
  }

  render(){
    return(
      <div className="list-container">
        {this.state.lists.map (list => {
          return(
            <div className="single-list" key={list.id}>
              <h4>{list.title}</h4>
              <p>{list.excerpt}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ListContainer