
import { useEffect, useState } from 'react';

function Header({ cartCount, cart }) {
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

      <div className='header-right'>
        <input type='search' placeholder='Search for products...' />
        <button onClick={handleButtonClick} className='login-btn'>
          {btnValue}
        </button>
        <button 
          className='cart-btn' 
          style={{ position: 'relative', marginLeft: '16px', background: '#fc6ebcff', border: 'none', cursor: 'pointer', borderRadius: '20px', padding: '8px 16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          onClick={() => setShowCart(!showCart)}
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcUpKJi6hD6A9UKoxMKJfNuDPx5Iv5yi-ug&s" alt="Cart" style={{width:'24px',height:'24px',borderRadius:'50%',verticalAlign:'middle',background:'#fff',padding:'2px'}} />
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
                  <li key={item.id} style={{marginBottom:'12px',borderBottom:'1px solid #eee',paddingBottom:'8px'}}>
                    <span style={{fontWeight:'bold'}}>{item.name}</span> <br/>
                    <span>Qty: {item.quantity}</span> <br/>
                    <span>Price: ₹{item.price/100}</span>
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