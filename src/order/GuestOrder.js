import { ListGroupItem } from 'react-bootstrap'
import React from 'react'

// {"orderId":11,"orderType":"Cheezburger","guestId":5}
// maybe it would be nice to translate this guestId
// to a guest name to display here
function GuestOrder({ order }) {
  return <ListGroupItem>
    { order.orderType }
    { order.guestId }
  </ListGroupItem>
}

export default GuestOrder
