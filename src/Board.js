import React, {Component} from 'react';
import './Board.css';
import Box from './Box.js';
import colors from './colors.js';


/** A Board can be any number of Boxes, all with random colors. */

class Board extends Component {
  static defaultProps = {
    numBoxes: 16,
    colors: colors
  };

  constructor(props) {
    super(props);
    this.state = { 
        boxes:  Array.from({ length: props.numBoxes })
                .map(n => this.randColor()) };

    this.handleClick = this.handleClick.bind(this);
  }

  /** generate a random number */
  randNum(range) {
    return Math.floor(Math.random() * range);
  }
  
  // Chooses a random color from colors array.
  randColor() {
   let idx = this.randNum(this.props.colors.length);
   return colors[idx];
  }


// Currently unused.
//   boardGen() {
//     this.setState(curState => ({
//       boxes: curState.boxes.map(n => this.randColor())
//     }));
//   }

  // Choose a random box whose color to change.
  randBox() {
    let idx = this.randNum(this.state.boxes.length);
    let copy = [...this.state.boxes];
    copy[idx] = this.randColor();
    this.setState({boxes: copy});}

// Currenlty unusewd
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