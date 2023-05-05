import React, { useEffect, useState } from 'react'
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:3001/api/orders/myOrderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })
    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>

            <div className='container'>
                <div className='row'>

                    {orderData !== {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                    {arrayData.Order_date ? <h4 className='text-success'>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </h4> :
                                                        <div class="card">
                                                            <div class="card-body">
                                                                <h5 class="card-title">{arrayData.name}</h5>
                                                                <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                                                <p class="card-text">Quantity :- {arrayData.qty}</p>
                                                                <p class="card-link">Price :- ₹{arrayData.price}/- </p>
                                                            </div>
                                                        </div>
                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>


            </div>

            {/* <Footer /> */}
        </div>
    )
}