
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';

const ProductList = (props) => {
  const [productList, setProductList] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  const fetchData = async () => {
    const response = await fetch(
      'https://682755e76b7628c5290ff8b1.mockapi.io/api/v1/products/products'
    );
    const products = await response.json();
    setProductList(products);
    setAllProducts(products); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterButtonClick = () => {
    const filtered = allProducts.filter((product) => product.rating > 4);
    setProductList(filtered);
  };

  const handleSearchButton = () => {
    const filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setProductList(filtered);
  };

  return (
    <section className='products'>
      <h1>Trending Products</h1>

      <div className='search-filter' style={{ marginBottom: '20px' }}>
        <input
          type='search'
          placeholder='Search for products...'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' ,gap :'10px' , marginRight: '10px' }}
        />
        <button onClick={handleSearchButton} className='filter-button'>Search</button>
        <button onClick={handleFilterButtonClick} className='filter-button'>
          Filter Top Rated Products
        </button>
      </div>

      <div className='products-grid'>
        {productList.map((product) => (
          <div id={`product-${product.id}`} key={product.id}>
            <ProductCard product={product} onAddToCart={props.onAddToCart} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
