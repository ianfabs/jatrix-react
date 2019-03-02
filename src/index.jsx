/**
 * termynal.js
 * A lightweight, modern and extensible animated terminal window, using
 * async/await.
 *
 * @author Ian Fabs <ianfabs@outlook.com>
 * @author Jay Aguiar
 * @version 1.0.1
 * @license MIT
 */
import React from "react";
/** React components that creates a Typing span */
export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: '',
      inc: 0,
      ninc: 0,
      alph: " abcdefghijklmnopqrstuvwxyz1234567890",
      full: [],
    };
  }
  componentDidMount() {
    this.writeText((this.props.text || this.props.children), this.props.fps, this.props.caps, this.props.done);
  }
  render() {
    return (
      <span>
        {this.state.display}
      </span>
    );
  }
  writeText(text, fps=40, caps=false, done=()=>{}) {  
    const logic = () => {
      if(this.state.alph[this.state.inc-1] === text.charAt(this.state.ninc).toLowerCase()){
        this.setState({ninc: this.state.ninc+1});
        this.setState({inc: 0});
      }
      //Adds a letter to the full array
      this.state.full[this.state.ninc] = caps ? this.state.alph[this.state.inc].toUpperCase() : this.state.alph[this.state.inc];
      // set display to be as much of the word as possible
      this.setState({ display: this.state.full.reduce((a,b)=>a+b)} );
      //inc++;
      this.setState({inc: this.state.inc+1});
      
      if(this.state.ninc < text.length) this.writeText(text, fps, caps, done);
      else done();
    };
    setTimeout(logic, fps);
  }
}