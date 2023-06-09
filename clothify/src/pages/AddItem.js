import React, { useRef ,useState} from 'react'
import axios from 'axios'
import './AddItem.css'
function AddItem() {
	const [selectImage, setSelectImage] = useState("")
	const [imageUrl, setImageUrl] = useState("")
	const itemNameRef = useRef()
	const itemPriceRef = useRef()
	const itemCategoriesRef = useRef()

	let text = "";

	const handleUpload = ()=>{
		const formData = new FormData
		formData.append('file',selectImage)
		formData.append('upload_preset','qskeskyv')

		axios.post('https://api.cloudinary.com/v1_1/dquivuztl/image/upload',formData).then((response)=>{
			text = response.data.url
			console.log(response.data)
		})
	}

	const handleSubmit= async(e)=>{
		e.preventDefault()
		try {
		  	const res = await axios.post('http://localhost:3001/api/product/', {
			name: itemNameRef.current.value,
			price: itemPriceRef.current.value,
			photo: text,
			categories:itemCategoriesRef.current.value
		})
		  console.log(res)
		} catch (error) {
		  console.log(error)
		}
	  }

  return (
    <div>
        <h1>Add Item</h1>
        <form className='form' onSubmit={handleSubmit}>
		<label for="item_name">Item Name:</label>
		<input type="text" id="item_name" name="item_name" ref={itemNameRef} required/>

		<label for="item_price">Item Price:</label>
		<input type="number" id="item_price" name="item_price" min="0" step="0.01" ref={itemPriceRef} required/>

		<label for="item_price">Categories</label>
		<input type="text" id="item_price" name="item_price" min="0" step="0.01" ref={itemCategoriesRef} required/>

		<label for="item_image">Item Image:</label>
		<input type="file" id="item_image" name="item_image" accept="image/*" onChange={(e)=>{setSelectImage(e.target.files[0])}} />
		<button type="button" className="btn btn-link" onClick={handleUpload}>Upload image </button>
		<img id="image-preview"/>
		<input type="submit" value="Add Item"/>
	</form>

    </div>
  )
}

export default AddItem













// import React from 'react'
// import './AddItem.css'
// function AddItem() {
//   return (
//     <div>
//         <h1>Add Item</h1>
// 	<form className='form'>
// 		<label for="item_name">Item Name:</label>
// 		<input type="text" id="item_name" name="item_name" required/>

// 		<label for="item_price">Item Price:</label>
// 		<input type="number" id="item_price" name="item_price" min="0" step="0.01" required />

// 		<input type="submit" value="Add Item"/>
// 	</form>
//     </div>
//   )
// }

// export default AddItem