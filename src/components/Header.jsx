import logo from '../logo.svg';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="header-text">
        <h3>Meducin320</h3>
        <h4><b>Your Comfort is our Responsibility</b></h4>
      </div>
    </header>
  );
}

export default Header;
