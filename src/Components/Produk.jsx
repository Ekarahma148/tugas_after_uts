import { HeartIcon, InfoIcon } from 'lucide-react';
import { useState } from 'react';

const Produk = ({ products, onAddToCart, search }) => {
  const [liked, setLiked] = useState({});
  const [info, setInfo] = useState(null);

  const handleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleInfo = (product) => {
    setInfo(product);
  };

  const filterData = products.filter((pro) =>
    pro.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className='clote-list'>
        {filterData.map((product) => (
          <div className='clote' key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} /><br />
            <HeartIcon onClick={() => handleLike(product.id)} style={{ fill: liked[product.id] ? 'red' : 'white' }} />
            <InfoIcon onClick={() => handleInfo(product)} />
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
        {info && (
          <div className="popup">
            <h3>{info.name}</h3>
            <img src={info.image} alt={info.name} />
            <p>Harga: Rp. {info.price}</p>
            <p>Warna: {info.color}</p>
            <p>Stok: {info.stok}</p>
            <p>Kategori: {info.kategori}</p>
            <button onClick={() => setInfo(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Produk;
