/*import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/add')}>Add Item</button>
    </div>
  );
}

export default Home;*/


import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Inventory Management System</h1>
      <button 
        onClick={() => navigate('/add')} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop: '20px' }}
      >
        Add Item
      </button>
      <button 
        onClick={() => navigate('/allitems')} 
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginTop: '20px' }}
      >
        Display Item
      </button>
    </div>
  );
}

export default Home;




