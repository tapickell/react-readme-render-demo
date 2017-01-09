import React, { Component } from 'react'
import util from 'util'

import Party from './Party'

// this gets and order(party) id from the params
// this will need to get that order data from the api
// to be displayed
// GET http://localhost:8080/party/:id
//
//{"_id":"584887bbad410309ff31ac0b","id":11,"host":"@jdoe","orders":[{"orderId":null,"orderType":"veggie","guestId":1},{"orderId":null,"orderType":"cheese","guestId":2},{"orderId":null,"orderType":"pepperoni","guestId":3},{"orderId":null,"orderType":"chese","guestId":4},{"orderId":null,"orderType":"chesseness","guestId":6},{"orderId":null,"orderType":"chesseness","guestId":6},{"orderId":null,"orderType":"chesseness","guestId":6},{"orderId":null,"orderType":"chesseness","guestId":6},{"orderId":null,"orderType":"chesseness","guestId":6},{"orderId":11,"orderType":"cheeze","guestId":1},{"orderId":11,"orderType":"Cheezburger","guestId":5}],"guests":[],"status":"approved"}
//

class OrderReview extends Component {
  constructor() {
    super()
    console.log("Constructor")
    this.state = { order: {} }
  }

  // right now this is a GET to the API
  // but it may be nice to setup something
  // with Socket.io so after this view is
  // initially rendered then updates can be
  // pushed from the backend as the ordering
  // is on going. Ordering continues until
  // host hits the button to go from review
  // to confirm which updates the status w/
  // a call to the API.
  componentWillMount() {
    console.log(`ComponentWillMount ENV ${JSON.stringify(process.env)}`)
    this.orderId = this.props.params.orderId
    //fetch(`${process.env.SPP_API}/party/${this.orderId}`, {
    fetch(`http://localhost:8080/party/${this.orderId}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      if(response.ok) {
        console.log("REPONSE OK")
      }
      return response.json()
    })
    .then(json => {
      console.log('JSON RESPONSE API', json)
      return json
    })
    .then(json => this.setState({ order: json }))
    .catch(console.log)
  }

  render() {
    console.log("render")
    if (!this.state.order) {
      return <div className="Party-loading">Loading Party Data...</div>
    }

    if (!this.state.order.host) {
      return <div className="Party-loading">No parties at this time</div>
    }

    return (
      <div>
        <div>OrderReview</div>
        <Party order={ this.state.order } button={ "Confirm" }/>
      </div>
    )
  }
}

export default OrderReview
