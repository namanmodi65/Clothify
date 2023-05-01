import React,{useState} from 'react'
import {useCard,useCardDispatch} from '../ContextReducer'
import { Link } from 'react-router-dom'
import './ItemCard.css'
function ItemCrad({ product }) {
    let dispatch = useCardDispatch()
    let data = useCard()
    // let items = product.p
    const [qyt, setQyt] = useState(1)
    const [size, setSize] = useState()


    const handleAddToCard = async()=>{
        await dispatch({type:'ADD',id:product._id,name:product.name,price:product.price,qyt:qyt})
        console.log(data)
        // e.preventDefault()
        // console.log('AddToCard Clicked')
    }

    return (
        <div>
            <div className="card ItemCard"  >
                <img src={!product.photo?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTKFbJGEuDCSj0xU5t5HoU6G6WqRJ44WTNOA&usqp=CAU':product.photo} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{product.name}</h3>
                    <h5 className="card-text"> ₹{product.price}</h5>
                    <p className="card-text"> categories:-{product.categories}</p>
                    <div > Qantity
                        <select className='Select' onChange={(e)=>setQyt(e.target.value)}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                        </select>
                    </div>
                    <hr></hr>
                    <Link href="#" className="btn btn-primary" onClick={handleAddToCard} >Add to Card</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemCrad