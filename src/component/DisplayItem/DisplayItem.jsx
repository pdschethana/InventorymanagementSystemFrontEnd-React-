/*import React, { useState, useEffect } from 'react';
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
const DeleteItem=async()=>{
    // Display a confirmation message
    const confirmationMessage = window.confirm("Are you sure you want to delete this item?");
    if(confirmationMessage)
        try{
    //send delete request
    await axios.delete('http://localhost:8080/inventory/${id}')
    //after delete,reload inventory data
    loadInventory();
    //Display success message
    alert("Item deleted successfully")
        } catch (error) {
        // display error message
        alert ("Error deleting item");
        }
    }
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
              <td><button onClick={() => DeleteItem(item.itemId)}>Delete</button></td>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayItem;*/


/*import React, { useState, useEffect } from 'react';
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

  const UpdateNavigate = (itemId) => {
    window.location.href = `/updateItem/${itemId}`;
  };

  const DeleteItem = async (itemId) => {
    const confirmationMessage = window.confirm("Are you sure you want to delete this item?");
    if (confirmationMessage) {
      try {
        await axios.delete(`http://localhost:8080/inventory/${itemId}`);
        loadInventory();
        alert("Item deleted successfully");
      } catch (error) {
        console.error("Error deleting item:", error);
        alert("Error deleting item");
      }
    }
  };

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
            <th>Actions</th>
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
              <td>
                <button onClick={() => UpdateNavigate(item.itemId)}>Update</button>
                <button onClick={() => DeleteItem(item.itemId)} style={{ marginLeft: "10px" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayItem;*/


/*import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable"; 

function DisplayItem() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const result = await axios.get("http://localhost:8080/inventory");
      setInventory(result.data);
    } catch (error) {
      console.error("Error loading inventory:", error);
    }
  };

  const UpdateNavigate = (itemId) => {
    window.location.href = `/updateItem/${itemId}`;
  };

  const DeleteItem = async (itemId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8080/inventory/${itemId}`);
      alert("Item deleted successfully");
      loadInventory(); // reload after delete
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Error deleting item");
    }
  };
// pdf generation
const generatePDF = (inventory) => {
 const doc = new jsPDF("portrait");

 // pdf title
 doc.text("Inventory Item List", 14, 10);

 // prepare data from the table
 const tableData = inventory.map((item) => [
   item.itemId,
   item.itemName,
   item.itemCategory,
   item.itemQty,
   item.itemDetails,
 ]);
 // add table to pdf
  doc.autoTable({
    head: [["Item ID", "Item Name", "Category", "Quantity", "Details"]],
    body: tableData,
    startY: 20,
    });
  // save the pdf
  doc.save("inventory_items.pdf");
}
  return (
    <div>
      <h1>Inventory Item</h1>
      <button onClick={() => generatePDF(inventory)}>Generate PDF</button>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Image</th>
            <th>Item Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Details</th>
            <th>Actions</th>
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
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              </td>
              <td>{item.itemName}</td>
              <td>{item.itemCategory}</td>
              <td>{item.itemQty}</td>
              <td>{item.itemDetails}</td>
              <td>
                <button onClick={() => UpdateNavigate(item.id)}>Update</button>{" "}
                <button onClick={() => DeleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayItem;*/


import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // import directly

function DisplayItem() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const result = await axios.get("http://localhost:8080/inventory");
      setInventory(result.data);
    } catch (error) {
      console.error("Error loading inventory:", error);
    }
  };

  const UpdateNavigate = (itemId) => {
    window.location.href = `/updateItem/${itemId}`;
  };

  const DeleteItem = async (itemId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:8080/inventory/${itemId}`);
      alert("Item deleted successfully");
      loadInventory(); // reload after delete
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Error deleting item");
    }
  };

  // PDF generation
  const generatePDF = (inventory) => {
    const doc = new jsPDF("portrait");

    // PDF title
    doc.text("Inventory Item List", 14, 10);

    // prepare data from the table
    const tableData = inventory.map((item) => [
      item.itemId,
      item.itemName,
      item.itemCategory,
      item.itemQty,
      item.itemDetails,
    ]);

    // add table to pdf (use autoTable function)
    autoTable(doc, {
      head: [["Item ID", "Item Name", "Category", "Quantity", "Details"]],
      body: tableData,
      startY: 20,
    });

    // save the pdf
    doc.save("inventory_items.pdf");
  };
  // serch function
  const [searchQuery, setSearchQuery] = useState("");
  const filteredData=inventory.filter((item)=>
  item.itemId.toLowerCase().includes(searchQuery.toLowerCase()) ||
  item.itemName.toLowerCase().includes(searchQuery.toLowerCase()) );

  return (
    <div>
      <h1>Inventory Item</h1>
      <button onClick={() => generatePDF(inventory)}>Generate PDF</button>
      <input
      type="text"
      placeholder="Search by Item ID or Name"
      value={searchQuery}
      onChange={(e)=>setSearchQuery(e.target.value)}></input>

      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Image</th>
            <th>Item Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.itemId}</td>
              <td>
                <img
                  src={`http://localhost:8080/uploads/${item.itemImage}`}
                  alt={item.itemName}
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              </td>
              <td>{item.itemName}</td>
              <td>{item.itemCategory}</td>
              <td>{item.itemQty}</td>
              <td>{item.itemDetails}</td>
              <td>
                <button onClick={() => UpdateNavigate(item.id)}>Update</button>{" "}
                <button onClick={() => DeleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayItem;



