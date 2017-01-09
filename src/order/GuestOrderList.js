import { ListGroup } from 'react-bootstrap'
import React from 'react'

import GuestOrder from './GuestOrder'

function GuestOrderList({ orders }) {
  return <ListGroup fill>
    { orders.map((order, index) => <GuestOrder key={ index } order={ order } />)}
  </ListGroup>
}

export default GuestOrderList
