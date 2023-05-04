import React from 'react'
import './Card.css'
import {useCard,useCardDispatch} from '../component/ContextReducer'

function Crad() {
  let dispatch = useCardDispatch()
  let data = useCard()

  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }

  const handleCheckOut = async()=>{
    let userEmail = localStorage.getItem("userEmail");
    // console.log(data,localStorage.getItem("userEmail"),new Date())
    let response = await fetch("http://localhost:3001/api/orders/orderData", {
      // credentials: 'include',
      // Origin:"http://localhost:3000/login",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString()
      })
    });
    console.log("JSON RESPONSE:::::", response.status)
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  // const handleCheckOut = async () => {
  //   let user = localStorage.getItem("user");
  //   let userEmail = localStorage.getItem('userEmail')
  //   // console.log(data,localStorage.getItem("userEmail"),new Date())
  //   let response = await fetch("http://localhost:3001/api/orders/orderData", {
  //     // credentials: 'include',
  //     // Origin:"http://localhost:3000/login",
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       order_data: data,
  //       email: userEmail,
  //       order_date: new Date().toDateString()
  //     })
  //   });
  //   console.log("JSON RESPONSE:::::", response.status)
  //   if (response.status === 200) {
  //     dispatch({ type: "DROP" })
  //   }
  // }
  let totalPrice = data.reduce((total, product) => total + product.price, 0)
  // console.log(data)

  return (
    <div>
      <div class="cart-container">
        <table class="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {data.map((product, index) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.qyt}</td>
              <td>{product.price}</td>
            </tr>
            ))}
            <tr>
              <td colspan="3">Total Price: {totalPrice}/-</td>
              {/* <td>Total Price: {totalPrice}/-</td> */}
            </tr>
          </tbody>
        </table>
        <button class="checkout-btn" onClick={handleCheckOut}>Checkout</button>
      </div>

    </div>
  )
}

export default Crad