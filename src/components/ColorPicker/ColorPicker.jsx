import React, { Component, PureComponent } from 'react'
import PropTypes from 'prop-types'
import './ColorPicker.css'


class ColorPicker extends PureComponent{
  
  static propTypes = {
    value: PropTypes.array.isRequired,
    activeOptionsInd:PropTypes.number
  }

  state = {
    value: this.props.colors,
    activeOptionsInd:this.props.number,
  }

  // SHOULD/COMPONENT/UPDATE 
  //Мы либо используем метод shouldComponentUpdate либо PureComponent при обьявлении класса ^

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(`nextProps`, nextProps);
  //   // console.log(`nextState`, nextState);
  //   const { activeOptionsInd } = this.state;

  //   return nextState.activeOptionsInd !== activeOptionsInd
  // }

  // CLICK 

  handleClick = (index) => {
   this.setState({activeOptionsInd:index})
  }

  // MAKE CLASSES

  makeOptionsClasess = (index) => {
  const finalArr = ['button']

    if (this.state.activeOptionsInd === index) {
      finalArr.push('button__Active')
    }
      return finalArr.join(' ')
  }
  
  // RENDER

  render() {
    console.log(`Re-render @ ${Date.now()}`);
    const { value, activeOptionsInd } = this.state;
    const { colors } = this.props;
    // const { label } = colors[activeOptionsInd]
    

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