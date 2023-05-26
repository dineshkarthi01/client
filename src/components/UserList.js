import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';

const products = [
  { id: 1, name: 'Product 1', price: 10, image: '/products/Gold.jpg' },
  { id: 2, name: 'Product 2', price: 20, image: '/products/2.jpg' },
  { id: 3, name: 'Product 3', price: 15, image: '/products/3.jpg' },
  { id: 4, name: 'Product 4', price: 25, image: '/products/4.jpg' },
  { id: 5, name: 'Product 4', price: 25, image: '/products/5.jpg' },
  { id: 6, name: 'Product 4', price: 25, image: '/products/6.jpg' },
  { id: 7, name: 'Product 4', price: 25, image: '/products/7.jpg' },
  { id: 8, name: 'Product 4', price: 25, image: '/products/8.jpg' },
  { id: 9, name: 'Product 4', price: 25, image: '/products/9.jpg' },
  { id: 10, name: 'Product 4', price: 25, image: '/products/10.jpg' },
  { id: 11, name: 'Product 4', price: 25, image: '/products/11.jpg' },
  { id: 12, name: 'Product 4', price: 25, image: '/products/12.jpg' },
  { id: 13, name: 'Product 4', price: 25, image: '/products/13.jpg' },
  { id: 14, name: 'Product 4', price: 25, image: '/products/14.jpg' },
  { id: 15, name: 'Product 4', price: 25, image: '/products/15.jpg' },
  { id: 15, name: 'Product 4', price: 25, image: '/products/16.jpg' },
  { id: 17, name: 'Product 4', price: 25, image: '/products/17.jpg' },
  { id: 18, name: 'Product 4', price: 25, image: '/products/18.jpg' },
  { id: 19, name: 'Product 4', price: 25, image: '/products/19.jpg' },
  { id: 20, name: 'Product 4', price: 25, image: '/products/20.jpg' },
  { id: 21, name: 'Product 4', price: 25, image: '/products/21.jpg' },
  { id: 22, name: 'Product 4', price: 25, image: '/products/22.jpg' },
  { id: 23, name: 'Product 4', price: 25, image: '/products/23.jpg' },
  { id: 24, name: 'Product 4', price: 25, image: '/products/24.jpg' },
  { id: 25, name: 'Product 4', price: 25, image: '/products/25.jpg' },
  { id: 26, name: 'Product 4', price: 25, image: '/products/26.jpg' },
  { id: 27, name: 'Product 4', price: 25, image: '/products/27.jpg' },
  { id: 28, name: 'Product 4', price: 25, image: '/products/28.jpg' },
  { id: 29, name: 'Product 4', price: 25, image: '/products/29.jpg' },
  { id: 30, name: 'Product 4', price: 25, image: '/products/30.jpg' },
  { id: 31, name: 'Product 4', price: 25, image: '/products/31.jpg' },
  { id: 32, name: 'Product 4', price: 25, image: '/products/32.jpg' },
  { id: 33, name: 'Product 4', price: 25, image: '/products/33.jpg' },
  { id: 34, name: 'Product 4', price: 25, image: '/products/34.jpg' },
  { id: 35, name: 'Product 4', price: 25, image: '/products/35.jpg' },
  { id: 36, name: 'Product 4', price: 25, image: '/products/36.jpg' },
  { id: 37, name: 'Product 4', price: 25, image: '/products/37.jpg' },
  { id: 38, name: 'Product 4', price: 25, image: '/products/38.jpg' },
  { id: 39, name: 'Product 4', price: 25, image: '/products/39.jpg' },
  { id: 40, name: 'Product 4', price: 25, image: '/products/40.jpg' },
  { id: 41, name: 'Product 4', price: 25, image: '/products/41.jpg' },
  { id: 42, name: 'Product 4', price: 25, image: '/products/42.jpg' },
  { id: 43, name: 'Product 4', price: 25, image: '/products/43.jpg' },
  { id: 44, name: 'Product 4', price: 25, image: '/products/44.jpg' },
  { id: 45, name: 'Product 4', price: 25, image: '/products/45.jpg' },
  { id: 46, name: 'Product 4', price: 25, image: '/products/46.jpg' }
];

const ProductList = () => {
  const [counts, setCounts] = React.useState({});

  const handleCountChange = (productId, count) => {
    setCounts(prevCounts => ({
      ...prevCounts,
      [productId]: count
    }));
  };

  const calculateSubtotal = (productId) => {
    const count = counts[productId] || 0;
    const product = products.find(item => item.id === productId);
    return product.price * count;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    products.forEach(product => {
      const count = counts[product.id] || 0;
      totalPrice += product.price * count;
    });

    return totalPrice;
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    const cartItems = [];

    // Generate the cart items based on the selected counts
    products.forEach(product => {
      const count = counts[product.id] || 0;
      if (count > 0) {
        cartItems.push({
          productId: product.id,
          name: product.name,
          quantity: count
        });
      }
    });

    // Navigate to the UserCart page with the submitted cart items
    navigate('/usercart', { state: { cartItems } });
  };

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Count</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.name} className="product-image" />
              </td>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>
                <input
                  type="number"
                  value={counts[product.id] || 0}
                  onChange={e => handleCountChange(product.id, parseInt(e.target.value))}
                />
              </td>
              <td>${calculateSubtotal(product.id)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="subtotal">Subtotal: ${calculateTotalPrice()}</p>
      <div className="submit-button">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ProductList;
