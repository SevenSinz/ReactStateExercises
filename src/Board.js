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
        boxes: this.getRandomColors()  
      };

    this.handleClick = this.handleClick.bind(this);
  }

  // returns array of 16 random colors
  getRandomColors() {
    return Array.from({ length: this.props.numBoxes })
           .map(n => this.randColor())
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

  // Choose a random box whose color to change.
  randBox() {

    let idxToChange = this.randNum(this.state.boxes.length);

    this.setState(st => ({
      boxes: st.boxes.map((b, idx) => (idx === idxToChange) ? this.randColor() : b )
    }))

    // // to solve in another way!
    // this.setState(st => { 
    //   let copy = [...this.state.boxes];
    //   copy[idxToChange] = this.randColor();
      
    //   return {boxes: copy}
    // })
  }

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