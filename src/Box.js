import React, {Component} from 'react';
import './Box.css';


/** Single Box in lottery. */

class Box extends Component {
  render() {
    return (
        <div className="Box">{ this.props.color }</div>
    )
  }
}


export default Box;