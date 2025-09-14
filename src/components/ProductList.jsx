// import ProductCard from './ProductCard';
// // import products from '../data/products';
// import { useEffect, useState } from 'react';

// const ProductList = () => {
//   let [productList, setProductList] = useState([]);
//   let [searchText, setSearchText] = useState("");

//   const fetchData = async () => {
//     const response = await fetch(
//       'https://682755e76b7628c5290ff8b1.mockapi.io/api/v1/products/products'
//     );
//     const products = await response.json();
//     setProductList(products);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     console.log('Hello');
//   }, []);

//   function handleFilterButtonClick() {
//     productList = productList.filter((product) => product.rating > 4);
//     setProductList(productList);
//   }
//   const handleSearchButton = () => {
//     const filtered = searchText.filter((product) =>
//       product.name.toLowerCase().includes(searchText.toLowerCase())
//     );
//     setProductList(filtered);
//   };
//   return (
//     <section className='products'>
//       <h1>Trending Products</h1>
//       {/* 
//         div className=search-filter
//             search input : onChange((e) => setSearchText(e.target.value))
//             button with name Search: onClick={handleSearchFilter}

//         div
//       */}
//       <input type='search' placeholder='Search for products...' onChange={(e) => setSearchText(e.target.value)}
//           style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }} />
//       <button onclick={handleSearchButton} className='filter-button'>Search</button>
//       <button onClick={handleFilterButtonClick} className='filter-button'>
//         Filter Top Rated Products
//       </button>

//       <div className='products-grid'>
//         {productList.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductList;

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
    setAllProducts(products); // Store the full list
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
          <ProductCard key={product.id} product={product} onAddToCart={props.onAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
