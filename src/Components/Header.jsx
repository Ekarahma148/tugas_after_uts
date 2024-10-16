import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';

const Header = ({ cartCount, onCartClick, search, setSearch }) => {
  return (
    <header>
      <h1>My Product List</h1>
      <div className='search'>
        <input
          type="text"
          placeholder="cari disini"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='search-input'
        />
        <Search />
      </div>
      <h4 onClick={onCartClick} style={{ cursor: 'pointer' }}>
        <ShoppingCart /> {cartCount}
      </h4>
    </header>
  );
};

export default Header;
