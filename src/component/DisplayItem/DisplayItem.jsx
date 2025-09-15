import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DisplayItem() {
  const [inventory, setInventory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    const result = await axios.get("http://localhost:8080/inventory");
    setInventory(result.data);
  };
 const UpdateNavigate=(itemId)=>{
    window.location.href=`/updateItem/${itemId}`;
}
  return (
    <div>
      <h1>Display Item</h1>
      <table>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Image</th>
            <th>Item Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              <td>{item.itemId}</td>
              <td>
                <img 
                  src={`http://localhost:8080/uploads/${item.itemImage}`} 
                  alt={item.itemName}
                  style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                />
              </td>
              <td>{item.itemName}</td>
              <td>{item.itemCategory}</td>
              <td>{item.itemQty}</td>
              <td>{item.itemDetails}</td>
              <td><button onClick={() => UpdateNavigate(item.itemId)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayItem;
