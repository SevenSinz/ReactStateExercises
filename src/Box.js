import React, {Component} from 'react';
import './Box.css';


/** Single Box in lottery. */

class Box extends Component {
  render() {
    let bgColor = {
      background: this.props.color
    }
    return (
        <div className="Box" style={bgColor}>{ this.props.color }</div>
    )
  }
}


export default Box;