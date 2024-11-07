import './Navbar.css';
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow_icon.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt='logo pic' />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className='nav-right'>
        <select>
          <option value='usd'>USD</option>
          <option value='eur'>EUR</option>
          <option value='byn'>BYN</option>
        </select>
        <button>
          Sign Up <img src={arrow_icon} alt='icon pic' />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
