import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'

import './index.css'

const mockPartyData = [
  {
    id: '1',
    host: '@jdoe',
    orders: [1, 3, 4],
    guests: ['@a', '@b', '@c'],
    status: 'pending',
  },
  {
    id: '2',
    host: '@mhollwy',
    orders: [2, 5, 9, 10],
    guests: ['@d', '@e', '@f', '@g'],
    status: 'approved',
  },
  {
    id: '3',
    host: '@alice',
    orders: [6, 7, 8],
    guests: ['@h', '@i', '@j'],
    status: 'denied',
  },
]

class Party extends Component {
  render() {
    if (!mockPartyData) {
      return <div className="Party-loading">Loading Party Data...</div>
    }

    if (mockPartyData.length === 0) {
      return <div className="Party-loading">No parties at this time</div>
    }

    return (
       <div className="Party">
         <Table striped bordered condensed hover>
           <thead>
             <tr>
               <th>ID</th>
               <th>Host</th>
               <th>Orders</th>
               <th>Guests</th>
               <th>Status</th>
               <th>Action</th>
             </tr>
           </thead>
           <tbody>
             {
               //this will come from props later
               mockPartyData.map((party, i) => {
                 return <tr key={i}>
                   <td>{ party.id }</td>
                   <td>{ party.host }</td>
                   <td>{ party.orders.length }</td>
                   <td>{ party.guests.length }</td>
                   <td>{ party.status }</td>
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

export default Party
