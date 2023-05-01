import React ,{useState,useEffect}from 'react'
import Carousel from '../component/carousel/Carousel'
import ItemCrad from '../component/ItemCard/ItemCrad'
import './Home.css'
import axios from 'axios'

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProduct=async()=>{
      const res = await axios.get('http://localhost:3001/api/product/')
      console.log(res)
      setProducts(res.data)
    }
    fetchProduct()
  }, [])

  return (
    <div>
      
      {/* <Carousel/> */}
    <div className='HomeContainer'>
      
      {
        products.map((p)=>(
          <div className='Fitem'>
            <ItemCrad product={p}/>
          </div>
        ))
      }
      
    </div>
    </div>
  )
}

export default Home