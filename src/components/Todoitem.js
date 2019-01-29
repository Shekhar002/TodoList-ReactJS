import React, { Component } from 'react'

import PropTypes from 'prop-types';
export class Todoitem extends Component {
  getStyle=()=>{
   return{
     background: '#f4f4f4',
     padding: '10px',
     borderBottom: '1px #ccc dotted',
     textDecoration: this.props.todo.completed ? 'line-through': 'none'
   }
  }
  render() {
    const{ id,title } = this.props.todo;
    return (
      <div>
        <div style={this.getStyle()}>
        <p>
        <input type="checkbox" onChange={this.props.markDone.bind(this,id)} />{' '}
        {title}
        <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>Delete</button>
        </p>
        </div>
      </div>
    )
  }
}
Todoitem.propTypes={
  todo: PropTypes.object.isRequired
}
const btnStyle = {
  background:'DodgerBlue',
  color: 'white',
  border: 'none',
  padding: '5px 9px',
  
  cursor: 'pointer',
  float: 'right'
}
export default Todoitem
