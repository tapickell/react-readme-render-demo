import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'

import './index.css'

const mockData = [
  {
    id: '1',
    repo: 'https://github.com/tapickell/haskell-learning',
  },
  {
    id: '2',
    repo: 'https://github.com/tapickell/tap-diff',
  },
  {
    id: '3',
    repo: 'https://github.com/tapickell/FixPragmaticeBookshelfInGoogleDrive',
  },
]

class Dashboard extends Component {
  render() {
    if (!mockData) {
      return <div className="Party-loading">Loading Screencast Data...</div>
    }

    if (mockData.length === 0) {
      return <div className="Party-loading">No Screencasts at this time</div>
    }

    return (
       <div className="Party">
         <Table striped bordered condensed hover>
           <thead>
             <tr>
               <th>ID</th>
               <th>repo</th>
             </tr>
           </thead>
           <tbody>
             {
               //this will come from props later
               mockData.map((party, i) => {
                 return <tr key={i}>
                   <td>{ party.id }</td>
                   <td>{ party.repo }</td>
                   <td><Button bsStyle="success">Confirm</Button></td>
                 </tr>
               })
             }
          </tbody>
         </Table>
       </div>
    )
  }
}

export default Dashboard
