import Header from './Components/Header';
import Produk from './Components/Produk';
import Footer from './Components/Footer';
import { useState } from 'react';

const App = () => {
  const products = [
    { id: 1, name: 'T-Shirt', price:'50.000', color: 'White', stok: 1500, kategori: 'Casual', image: 'src/assets/Mittelschweres_Standard-T-Shirt-removebg-preview.png' },
    { id: 2, name: 'Jeans', price: '50.000', color: 'Blue', stok: 2500, kategori: 'Casual', image: 'src/assets/ti1660849337tlcd0dce8fca267bf1fb86cf43e18d5598-removebg-preview.png' },
    { id: 3, name: 'Jacket', price: '100.000', color: 'Black', stok: 1500, kategori: 'Casual', image: 'src/assets/Oversized_bomber_jacket-removebg-preview.png' },
    { id: 4, name: 'Dress', price: '500.000', color: 'Green', stok: 500, kategori: 'Casual', image: 'src/assets/Dark_Green_Dotted_Velvet_Square_Neck_Flying_Sleeve_Midi_Vintage_Dress_-_Black___S-removebg-preview.png' },
    { id: 5, name: 'Abaya', price: '70.000', color: 'White', stok: 1000, kategori: 'Casual', image: 'https://i.pinimg.com/236x/58/5e/de/585ede5994a2a62ac4f105b5267de1de.jpg' },
    { id: 6, name: 'Sweater', price: '150.000', color: 'Red', stok: 2000, kategori: 'Casual', image: 'src/assets/Girls_Red_Crewneck_Knit_Sweater-removebg-preview.png' },
    { id: 7, name: 'Shorts', price: '50.000', color: 'Gray', stok: 1500, kategori: 'Casual', image: 'src/assets/GAP_HERITAGE_-_Shorts_-_light_heather_grey-removebg-preview (1).png' },
    { id: 8, name: 'Jumpsuit', price: '300.000', color: 'Purple', stok: 1500, kategori: 'Casual', image: 'src/assets/Fisdy_-_Sofisticados_pantalones_palazzo_de_talle_alto_con_pliegues_en_V_para_un_ajuste_favorecedor_-_LQ555-zi-removebg-preview.png' },
    { id: 9, name: 'Tuxedo', price: '500.000', color: 'Brown', stok: 500, kategori: 'Formal', image: 'src/assets/Formal_Chocolate_Brown_Two_Piece_Suit_for_Men-Tailored_Suit_-_The_Rising_Sun_store__Vardo-removebg-preview.png' },
    { id: 10, name: 'Skirt', price: '50.000', color: 'Pink', stok: 1500, kategori: 'Casual', image: 'src/assets/cbce92b1-c726-4307-a929-30bf5bbde91e-removebg-preview (1).png' },
  ];

  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [troli, setTroli] = useState(null);
const [search, setSearch] = useState('');

  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1);
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleTroli = () => {
    setTroli(cartItems);
  };

  return (
    <div>
      <Header cartCount={cartCount} onCartClick={handleTroli} search={search} setSearch={setSearch} />
      
      <Produk products={products} onAddToCart={handleAddToCart} search={search}/>
      <Footer />
      {troli && troli.length > 0 && (
        <div className="popup">
          <h3>Cart Items:</h3>
          {troli.map(item => (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <img src={item.image} alt={item.name} />
              <p>Harga:Rp. {item.price}</p>
            </div>
          ))}
          <button onClick={() => setTroli(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default App;

// import { useState } from 'react';
// import Header from './Header';
// import Produk from './Produk';

// const App = ({ products }) => {
//   const [cartCount, setCartCount] = useState(0);

//   const handleAddToCart = (product) => {
//     setCartCount(cartCount + 1);
//     // Add additional cart handling logic here
//   };

//   return (
//     <div className="app">
//       <Header 
//         cartCount={cartCount} 
//         onCartClick={() => {/* Handle cart click */}} 
//         search={search} 
//         setSearch={setSearch} 
//       />
//       <Produk products={products} onAddToCart={handleAddToCart} search={search} />
//     </div>
//   );
// };

// export default App;
