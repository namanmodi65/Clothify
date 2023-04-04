import React from 'react'
import './AddItem.css'
function AddItem() {
  return (
    <div>
        <h1>Add Item</h1>
        <form className='form'>
		<label for="item_name">Item Name:</label>
		<input type="text" id="item_name" name="item_name" required/>

		<label for="item_price">Item Price:</label>
		<input type="number" id="item_price" name="item_price" min="0" step="0.01" required/>

		<label for="item_image">Item Image:</label>
		<input type="file" id="item_image" name="item_image" accept="image/*" required/>
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