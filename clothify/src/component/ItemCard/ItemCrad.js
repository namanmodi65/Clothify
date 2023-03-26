import React from 'react'
import { Link } from 'react-router-dom'
import './ItemCard.css'
function ItemCrad() {
    return (
        <div>
            <div className="card ItemCard"  >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49uF8mqxrF0oXprwNSinCp6PblBw-MFAqrQ&usqp=CAU" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link href="#" className="btn btn-primary">Add to Card</Link>
                    <div > Qantity
                        <select >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCrad