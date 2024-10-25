import "bootstrap/dist/css/bootstrap.min.css"
import Product from "./Product"
import Cart from "./Cart"
import { useState } from "react"


function App() {

  const [total, setTotal] = useState(0)
  const [items, setItems] = useState([])

  const addItem = (product) => {
    setItems([...items, product])
    setTotal(total + product.price)
  };

  const products = [
    {
      name : "Mountain Bike X200",
      price : 499,
      image : "https://image.geo.de/33668690/t/a3/v2/w1440/r1/-/wald-look-71368535.jpg"
    },
    {
      name : "Road Racer Pro",
      price : 1199,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQOVGoprkO7jXj9ldXjeiMjB9rJJfAnZuwKMDmDMq42zvDO5vRJ_WzjmHwUdpFq2Cx7S8&usqp=CAU"
    },
    {
      name : "City Cruiser 300",
      price : 349,
      image : "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg?t=st=1728909305~exp=1728912905~hmac=7b132002ea50fa2c445f82ba87e3051644e496193b9d2ad86a0ef118ac61b7d8&w=1800"
    },
    {
      name : "Electric Mountain Bike ",
      price : 1799,
      image : "https://fastly.picsum.photos/id/866/200/250.jpg?hmac=sG8uarVyM4jPtCMmoF_h50NZdUOZn7IMS2k941AwKGQ"
    },
    {
      name : "Bicycle Helmet ",
      price : 59,
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_7eKxzdEoi-Bgra9kP5iTzBs2Ooy8U1eSA&s"
    },
    {
      name : "Cycling Gloves ",
      price : 24,
      image : "https://fastly.picsum.photos/id/866/200/250.jpg?hmac=sG8uarVyM4jPtCMmoF_h50NZdUOZn7IMS2k941AwKGQ"
    },
    {
      name : "Multi-Tool Kit",
      price : 29,
      image : "https://fastly.picsum.photos/id/866/200/250.jpg?hmac=sG8uarVyM4jPtCMmoF_h50NZdUOZn7IMS2k941AwKGQ"
    },
    {
      name : "Bike Lock",
      price : 39,
      image : "https://fastly.picsum.photos/id/866/200/250.jpg?hmac=sG8uarVyM4jPtCMmoF_h50NZdUOZn7IMS2k941AwKGQ"
    },
    {
      name : "Water Bottle",
      price : 14,
      image : "https://fastly.picsum.photos/id/866/200/250.jpg?hmac=sG8uarVyM4jPtCMmoF_h50NZdUOZn7IMS2k941AwKGQ"
    },
    {
      name : "LED Bike Lights",
      price : 34,
      image : "https://fastly.picsum.photos/id/866/200/250.jpg?hmac=sG8uarVyM4jPtCMmoF_h50NZdUOZn7IMS2k941AwKGQ"
    }
  ];

  return (
    <>
      <div className="container-fluid bg-primary">
        <div className="row">
          <div className="col-lg-8">
            <h1>Products</h1>
            <hr />
            <div className="d-flex flex-wrap">
              {
                products.map((product) => {
                  return <Product product={product} addItem={addItem}/>
                })
              }
            </div>

          </div>
          <div className="col-lg-4">
            <h1>Cart</h1>
            <hr />
            <Cart total={total} items={items} />
          </div>
         </div>
      </div>



    </>
  )
}

export default App