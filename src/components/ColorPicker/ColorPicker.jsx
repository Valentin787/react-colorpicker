import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ColorPicker.css'


class ColorPicker extends Component{
  
  static propTypes = {
    value: PropTypes.array.isRequired,
    activeOptionsInd:PropTypes.number
  }

  state = {
    value: this.props.colors,
    activeOptionsInd:this.props.number,
  }
  handleClick = (index) => {
   this.setState({activeOptionsInd:index})
  }
  makeOptionsClasess = (index) => {
  const finalArr = ['button']

    if (this.state.activeOptionsInd === index) {
      finalArr.push('button__Active')
    }
      return finalArr.join(' ')
  }

  render() {
    const { value ,activeOptionsInd} = this.state;

    return (
      <div className="container">
      <ul className="list">
        {value.map(({label,color}, index) =>
        {
          const classOptionsName = this.makeOptionsClasess(index)
          
          return (
            <li key={label}>
            <button
              onClick={() => this.handleClick(index)}
              className={classOptionsName}
              style={{ backgroundColor: color }}>{activeOptionsInd === index ? label : " "}</button>
            </li>)
        }
      )}
      </ul>
    </div>    
    )
  }
}




ColorPicker.propTypes = {}

export default ColorPicker