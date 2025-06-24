const ProductCard=(props)=>{
    const product=props.product;
    return(
        <div className='product-card'>
            <img src={product.image} alt=''/>
            <h3>{product.name}</h3>
            <div className="product-info">
                <p >{product.price/100}/-</p>
                <p>{product.rating}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};
export default ProductCard;