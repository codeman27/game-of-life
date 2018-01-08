import React, { Component } from 'react'
import _ from 'lodash'

class Grid extends Component {
  state = {
    columns: 50,
    rows: 30,
  }

  render() {
    return (
      <div className='grid-container'>
        <table className='grid'>
          <tbody>
          {_.times(this.state.rows, (rowIndex) => (
            <tr
              key={`r${rowIndex}`}>
              {_.times(this.state.columns, (colIndex) => (
                <td
                  key={`r${rowIndex}c${colIndex}`}
                  onClick={() => console.log(`c${colIndex}r${rowIndex}`)}>
                </td>))}
            </tr>))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Grid
