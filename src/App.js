
import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ListProductsCategory from './components/ListProductsCategory.jsx';
import ProductList from './components/ProductList.jsx';
import Footer from './components/Footer.jsx';
import productsData from './data/products.js';

function App() {
  const [cart, setCart] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
    
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
      <Header
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        cart={cart}
        setCart={setCart}
        products={products}
        searchText={searchText}
        setSearchText={setSearchText}
        onSearchResultClick={id => {
          const el = document.getElementById(`product-${id}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          setSearchText('');
        }}
        onRemoveFromCart={id => {
          setCart(prevCart => {
            return prevCart
              .map(item =>
                item.id === id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              )
              .filter(item => item.quantity > 0);
          });
        }}
      />
      <HeroSection />
      <ListProductsCategory />
      <ProductList onAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}

export default App;