/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



function UpdateItem() {
    const {id}=useParams();
    const [formData, setFormData] = useState({
        itemId: '',
        itemName: '',
        itemCategory: '',
        itemQty: '',
        itemDetails: '',
        itemImage: null
    });
    useEffect(() => {
    const fetchItemData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/inventory/${id}`);
            const itemData = response.data;
            setFormData({
            itemId: itemData.itemId || '',
            itemName: itemData.itemName || '',
            itemCategory: itemData.itemCategory || '',
            itemQty: itemData.itemQty || '',
            itemDetails: itemData.itemDetails || '',
            
            itemImage: null
            });
        } catch (error) {
            console.error("Error fetching item data:", error);
        }
    };
    fetchItemData();
        
    }, [id]);
    const onInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]:files ? files[0] : value
        })
        
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        const data=new FormData();
        data.append('itemDetails',JSON.stringify({
            itemId: formData.itemId,
            itemName: formData.itemName,
            itemCategory: formData.itemCategory,
            itemQty: formData.itemQty,
            itemDetails: formData.itemDetails,

        }

        ))
        if (formData.itemImage) {
            data.append('file', formData.itemImage);
        }
        try{
            const response=await axios.put(`http://localhost:8080/inventory/${id}`,data);
            alert("Item Updated Successfully");
            window.location.href="/allitems";
        }catch (error){
            console.error("Error updating item:",error);
            alert("Error updating item");
        }
    }
  return (
    <div>
        <h1>Update Item</h1>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Add Item Page</h1>
      <form
        id="itemForm"
        style={{ display: "inline-block", textAlign: "left", marginTop: "20px" }}
        onSubmit={onSubmit}
      >
        <label htmlFor="itemId">Item ID:</label><br />
        <input
          type="text"
          id="itemId"
          name="itemId"
          onChange={onInputChange}
          value={itemId}
          required
        /><br /><br />

        <label htmlFor="itemName">Item Name:</label><br />
        <input
          type="text"
          id="itemName"
          name="itemName"
          onChange={onInputChange}
          value={itemName}
          required
        /><br /><br />

        <label htmlFor="itemCategory">Item Category:</label><br />
        <select
          id="itemCategory"
          name="itemCategory"
          onChange={onInputChange}
          value={itemCategory}
          required
        >
          <option value="">Select Item Category</option>
          <option value="Apparel & Fashion">Apparel & Fashion</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Food">Food</option>
          <option value="Furniture">Furniture</option>
        </select><br /><br />

        <label htmlFor="itemQty">Quantity:</label><br />
        <input
          type="number"
          id="itemQty"
          name="itemQty"
          onChange={onInputChange}
          value={itemQty}
          required
        /><br /><br />

        <label htmlFor="itemDetails">Item Details:</label><br />
        <textarea
          id="itemDetails"
          name="itemDetails"
          onChange={onInputChange}
          value={itemDetails}
          required
        ></textarea><br /><br />

        <label htmlFor="itemImage">Item Image:</label><br />
        <input
          type="file"
          id="itemImage"
          name="itemImage"
          accept="image/*"
          onChange={onInputChange}
        /><br /><br />

        <button
          type="submit"
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>
    </div>

    </div>
  )
}

export default UpdateItem*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdateItem() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    itemId: '',
    itemName: '',
    itemCategory: '',
    itemQty: '',
    itemDetails: '',
    itemImage: null,
  });

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/inventory/${id}`);
        const itemData = response.data;
        setFormData({
          itemId: itemData.itemId || '',
          itemName: itemData.itemName || '',
          itemCategory: itemData.itemCategory || '',
          itemQty: itemData.itemQty || '',
          itemDetails: itemData.itemDetails || '',
          itemImage: null,
        });
      } catch (error) {
        console.error('Error fetching item data:', error);
      }
    };
    fetchItemData();
  }, [id]);

  const onInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append(
      'itemDetails',
      JSON.stringify({
        itemId: formData.itemId,
        itemName: formData.itemName,
        itemCategory: formData.itemCategory,
        itemQty: formData.itemQty,
        itemDetails: formData.itemDetails,
      })
    );
    if (formData.itemImage) {
      data.append('file', formData.itemImage);
    }

    try {
      await axios.put(`http://localhost:8080/inventory/${id}`, data);
      alert('Item Updated Successfully');
      window.location.href = '/allitems';
    } catch (error) {
      console.error('Error updating item:', error);
      alert('Error updating item');
    }
  };

  return (
    <div>
      <h1>Update Item</h1>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Edit Item Page</h1>
        <form
          id="itemForm"
          style={{ display: 'inline-block', textAlign: 'left', marginTop: '20px' }}
          onSubmit={onSubmit}
        >
          <label htmlFor="itemId">Item ID:</label>
          <br />
          <input
            type="text"
            id="itemId"
            name="itemId"
            onChange={onInputChange}
            value={formData.itemId}
            required
          />
          <br />
          <br />

          <label htmlFor="itemName">Item Name:</label>
          <br />
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={onInputChange}
            value={formData.itemName}
            required
          />
          <br />
          <br />

          <label htmlFor="itemCategory">Item Category:</label>
          <br />
          <select
            id="itemCategory"
            name="itemCategory"
            onChange={onInputChange}
            value={formData.itemCategory}
            required
          >
            <option value="">Select Item Category</option>
            <option value="Apparel & Fashion">Apparel & Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Food">Food</option>
            <option value="Furniture">Furniture</option>
          </select>
          <br />
          <br />

          <label htmlFor="itemQty">Quantity:</label>
          <br />
          <input
            type="number"
            id="itemQty"
            name="itemQty"
            onChange={onInputChange}
            value={formData.itemQty}
            required
          />
          <br />
          <br />

          <label htmlFor="itemDetails">Item Details:</label>
          <br />
          <textarea
            id="itemDetails"
            name="itemDetails"
            onChange={onInputChange}
            value={formData.itemDetails}
            required
          ></textarea>
          <br />
          <br />

          <label htmlFor="itemImage">Item Image:</label>
          <br />
          <input
            type="file"
            id="itemImage"
            name="itemImage"
            accept="image/*"
            onChange={onInputChange}
          />
          <br />
          <br />

          <button
            type="submit"
            style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateItem;
