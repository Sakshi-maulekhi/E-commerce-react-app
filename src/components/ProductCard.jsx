const ProductCard = (props) => {
    const { product, onAddToCart } = props;
    return (
        <div className='product-card'>
            <img src={product.image} alt='' />
            <h3>{product.name}</h3>
            <div className="product-info">
                <p>{product.price / 100}/-</p>
                <p>{product.rating}</p>
                        <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">
                            <img src="https://media.istockphoto.com/id/1994666187/vector/add-to-cart.jpg?s=612x612&w=0&k=20&c=3dKQh6logiBchMqmGQUnBgeI6D2cMkE-ikGi7Li-t1o=" alt="Add to Cart" style={{width:'24px',height:'24px',verticalAlign:'middle',marginRight:'8px'}} />
                            Add to Cart
                        </button>
            </div>
        </div>
    );
};
export default ProductCard;