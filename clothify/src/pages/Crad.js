import React from 'react'
import './Card.css'
function Crad() {
  return (
    <div>
      <div class="cart-container">
        <table class="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product 1</td>
              <td>$10.00</td>
              <td>2</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td>Product 2</td>
              <td>$20.00</td>
              <td>1</td>
              <td>$20.00</td>
            </tr>
            <tr>
              <td colspan="3">Subtotal:</td>
              <td>$40.00</td>
            </tr>
            <tr>
              <td colspan="3">Shipping:</td>
              <td>$5.00</td>
            </tr>
            <tr>
              <td colspan="3">Total:</td>
              <td>$45.00</td>
            </tr>
          </tbody>
        </table>
        <button class="checkout-btn">Checkout</button>
      </div>

    </div>
  )
}

export default Crad