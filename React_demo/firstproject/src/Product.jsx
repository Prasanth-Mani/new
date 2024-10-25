
function Product({ product,addItem }) {
    

    return (

        <>
            <div className="col mb-3">
                <div class="card" style={{ width: "16rem" }}>
                    <img src={product.image} />
                    <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <h6>Rs {product.price}</h6>
                        <button onClick={() => {
                            addItem(product) 
                            }} class="btn btn-primary">Add To cart</button>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Product