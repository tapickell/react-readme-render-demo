## Project Ferret Surprise
#### This is for the Admin UI for the SPP project

###### Admin App / Order Placing
* Host types `/pizzaparty`, bot sends them a URL to administer the order
  * [ ] Host user logs into Admin portal with SSO SAML service
    * User is auth for admin portal by a setting/group ?? thats checked via API

* Host hits `Confirm Order` button when ordering time is over
  App shows list of orders to be placed. Host can delete or modify orders.
  * [ ] redirect to order review page on `Confirm`

Host hits `Place Order`
  * DM is sent to management with URL to Approve or Reject order.
  * [ ] Req sent to API that pings Bot with URL for approval

* [ ] Mgmt user logs into Admin portal with SSO SAML service
  * User is auth for admin portal by a setting/group ?? thats checked via API

If order is approved by mgmt, then corporate credit card is used to place order
* [ ] Approve will submit to API for processing
  * [ ] API will update UI on order status as data is recieved from dominos module
  * [ ] Bot sends message to channel “PIZZAS ARE ON THE WAY TMNT.gif”
If order is denied, DM is sent to Host with denial
* [ ] Deny order does not submit via api
  * [ ] Bot sends DM  to host user w/ denial



Host login directs to /order/:orderId/confirm
on confirm directs to /order/:orderId/review
on place directs to /

Mgmt login directs to /order/:orderId/approval
on approve or deny directs to /
