import React, { Component } from 'react'
import Grid from './components/Grid'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='title'>CONWAY'S</h1>
          <h1 className="App-title">GAME OF LIFE</h1>
        </header>
        <Grid />
      </div>
    )
  }
}

export default App
