
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import ListProductsCategory from './components/ListProductsCategory.jsx';
import ProductList from './components/ProductList.jsx';
import Footer from './components/Footer.jsx';
import { useState } from 'react';


function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      // If product already in cart, increase quantity
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Else add new product with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
      <Header 
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} 
        cart={cart}
        setCart={setCart}
      />
      <HeroSection />
      <ListProductsCategory />
      <ProductList onAddToCart={handleAddToCart} />
      <Footer />
    </>
  );
}

export default App;