const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      <h3>{product.name}</h3>

      <div className="product-row">
        <span className="price">₹{product.price / 100}/-</span>
        <span className="rating">⭐ {product.rating}</span>
        <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">
          <img
            src="https://media.istockphoto.com/id/1994666187/vector/add-to-cart.jpg?s=612x612&w=0&k=20&c=3dKQh6logiBchMqmGQUnBgeI6D2cMkE-ikGi7Li-t1o="
            alt="Add to Cart"
          />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
