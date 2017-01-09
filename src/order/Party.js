import { Panel } from 'react-bootstrap'
import React from 'react'

import GuestOrderList from './GuestOrderList'

//{"id":11,"host":"@jdoe","orders":[],"guests":[],"status":"approved"}
function Party({ order }) {
  return <Panel className="party" header={ order.host }>
    <GuestOrderList orders={ order.orders } />
  </Panel>

}

export default Party

