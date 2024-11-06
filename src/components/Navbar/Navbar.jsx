import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo pic' />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Navbar;
