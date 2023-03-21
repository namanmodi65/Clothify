import React from 'react'

function Carousel() {
    return (
        <div>
            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{"objectFit":"contain !important"}}>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i2.wp.com/www.differencebetween.com/wp-content/uploads/2011/06/Difference-Between-Cloths-and-Clothes-3.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfJ8Bw6uAlWs6i0ReDQiW71Hlxbyy6AydjYbkP34TYtouN7Z4l7BVq1xovQyYobOtiQE&usqp=CAU" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhYCZV0DbthDRllcDklK4lH97S7KvU-Aejkzs_dgS5jbZxg4LbD7Si_gp1dfT2WXMphw&usqp=CAU" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Carousel