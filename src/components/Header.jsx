
import { useEffect, useState } from 'react';

function Header({ cartCount, cart, products, searchText, setSearchText, onSearchResultClick, onRemoveFromCart }) {
  const [btnValue, setBtnValue] = useState('Login');
  const [btnValue2, setBtnValue2] = useState('2nd Button');
  const [showCart, setShowCart] = useState(false);

  function handleButtonClick() {
    btnValue === 'Login' ? setBtnValue('Logout') : setBtnValue('Login');
  }

  
  console.log('Hello, I am inside Header component');

  useEffect(() => {
    console.log('Hello, I am inside useEffect()');
  }, [btnValue, btnValue2]);

  useEffect(() => {
    console.log('Hello, I am inside useEffect() with dependency');
  }, []);

  return (
    <header>
      <div className='logo'>E-commerce App</div>

      <div>
        <nav>
          <ul className='menu'>
            <li className='menu-item'>
              <a href='/'>Home</a>
            </li>
            <li className='menu-item'>
              <a href='/men'>Men</a>
            </li>
            <li className='menu-item'>
              <a href='/women'>Women</a>
            </li>
            <li className='menu-item'>
              <a href='/kids'>Kids</a>
            </li>
            <li className='menu-item'>
              <a href='/accessories'>Accessories</a>
            </li>
            <li className='menu-item'>
              <a href='/sale'>Sale</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='header-right' style={{position:'relative'}}>
        <input
          type='search'
          placeholder='Search for products...'
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              const match = products.find(p => p.name.toLowerCase().includes(searchText.toLowerCase()));
              if (match) {
                onSearchResultClick(match.id);
              }
            }
          }}
          style={{ padding: '10px', fontSize: '16px', marginRight: '10px', borderRadius: '10px', border: '1px solid #ddd', outline: 'none' }}
        />
        {searchText && (
          <div className='search-results-window' style={{
            position: 'absolute',
            top: '45px',
            left: 0,
            background: '#fff',
            color: '#222',
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
            zIndex: 1000,
            minWidth: '260px',
            padding: '12px',
            maxHeight: '260px',
            overflowY: 'auto'
          }}>
            <h4 style={{marginTop:0,marginBottom:'10px'}}>Search Results</h4>
            {products.filter(p => p.name.toLowerCase().includes(searchText.toLowerCase())).length === 0 ? (
              <p>No products found.</p>
            ) : (
              <ul style={{listStyle:'none',padding:0,margin:0}}>
                {products.filter(p => p.name.toLowerCase().includes(searchText.toLowerCase())).map(product => (
                  <li key={product.id}
                      style={{display:'flex',alignItems:'center',marginBottom:'10px',borderBottom:'1px solid #eee',paddingBottom:'8px',cursor:'pointer'}}
                      onClick={() => onSearchResultClick(product.id)}
                  >
                    <img src={product.image} alt={product.name} style={{width:'40px',height:'40px',borderRadius:'8px',marginRight:'10px',objectFit:'cover'}} />
                    <div>
                      <span style={{fontWeight:'bold'}}>{product.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        <button onClick={handleButtonClick} className='login-btn'>
          {btnValue}
        </button>
        <button 
          className='cart-btn' 
          style={{ position: 'relative', marginLeft: '16px', background: 'transparent', border: '1px solid pink',border:'none',borderRadius:'15px', cursor: 'pointer', padding: '2px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setShowCart(!showCart)}
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcUpKJi6hD6A9UKoxMKJfNuDPx5Iv5yi-ug&s" alt="Cart" style={{width:'35px',height:'35px',borderRadius:'50%',verticalAlign:'middle',background:'#fff',padding:'2px',objectFit:'cover'}} />
          {cartCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: '#222',
              color: '#fff',
              borderRadius: '50%',
              padding: '2px 7px',
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>{cartCount}</span>
          )}
        </button>
        {showCart && (
          <div className="cart-modal" style={{
            position: 'absolute',
            top: '60px',
            right: '30px',
            background: '#fff',
            color: '#222',
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
            zIndex: 1000,
            minWidth: '260px',
            padding: '18px'
          }}>
            <h4 style={{marginTop:0}}>Cart</h4>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul style={{listStyle:'none',padding:0}}>
                {cart.map(item => (
                  <li key={item.id} style={{marginBottom:'12px',borderBottom:'1px solid #eee',paddingBottom:'8px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div>
                      <span style={{fontWeight:'bold'}}>{item.name}</span> <br/>
                      <span>Qty: {item.quantity}</span> <br/>
                      <span>Price: ₹{item.price/100}</span>
                    </div>
                    <button onClick={() => onRemoveFromCart(item.id)} style={{marginLeft:'10px',background:'#ee3098ff',color:'#fff',border:'none',borderRadius:'6px',padding:'4px 10px',cursor:'pointer'}}>Remove</button>
                  </li>
                ))}
              </ul>
            )}
            <button onClick={() => setShowCart(false)} style={{marginTop:'10px',background:'#f31295ff',color:'#fff',border:'none',borderRadius:'6px',padding:'6px 16px',cursor:'pointer'}}>Close</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;