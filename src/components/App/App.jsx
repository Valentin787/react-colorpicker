import React, { Component } from 'react'
import ColorPicker from '../ColorPicker'
import Paper from '../Paper'
import colors from '../../data/colorPicker.json'
import s from './App.module.css'



class App extends Component{
 
  
  render() {
     return (
       <main className={s.main}>
         <Paper title="Color__Picker">
           <ColorPicker colors={colors} number={-1} />
         </Paper>
         
      </main>
  )
  }
}

// const App = () => {
 
// }

export default App