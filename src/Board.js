import React, {Component} from 'react';
import './Board.css';
import Box from './Box.js';
import colors from './colors.js';


/** A Board can be any number of Boxes, all with random colors. */

class Board extends Component {
  static defaultProps = {
    numBoxes: 16
    // colors eventually
  };

  constructor(props) {
    super(props);
    this.state = { boxes: Array.from({ length: props.numBoxes }) };
    this.handleClick = this.handleClick.bind(this);
  }

  /** generate a random number */
  randNum() {
    return Math.floor(Math.random());
  }
  
  randColor() {
   let idx = this.randNum() * this.colors.length;
   return colors[idx];
  }

  boardGen() {
    this.setState(curState => ({
      nums: curState.boxes.map(
          n => this.randColor())
    }));
  }

  randBox() {
    let idx = this.randNum() * this.boxes.length;
    let copy = [...this.state.boxes];
    copy[idx] = this.randColor();
    this.setState({boxes: copy});}


//   this.setState(st => ({
//     boxes: st.boxes.map(boxes => ({
//         boxes[idx] === [idx]
//           ? { ...boxes, done: true }
//           : boxes
//     })
//   });

  handleClick(evt) {
    this.randBox();
  }

  render() {
    return (
        <section className="Board">
          <div>
            {this.state.boxes.map(c => <Box color={c}/>)}
          </div>
          <button onClick={this.handleClick}>Change One Box</button>
        </section>
    );
  }
}


export default Board;