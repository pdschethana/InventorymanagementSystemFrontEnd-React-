  


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddItem() {
  const navigate = useNavigate();

  const [inventory, setInventory] = useState({
    itemId: "",
    itemName: "",
    itemCategory: "",
    itemQty: "",
    itemDetails: "",
    itemImage: null,
  });

  const { itemId, itemName, itemCategory, itemQty, itemDetails } = inventory;

  const onInputChange = (e) => {
    if (e.target.name === "itemImage") {
      setInventory({ ...inventory, itemImage: e.target.files[0] });
    } else {
      setInventory({ ...inventory, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // 1️⃣ Upload image first
    const formData = new FormData();
    formData.append("file", inventory.itemImage);
    let imageName = "";

    try {
      const response = await axios.post(
        "http://localhost:8080/inventory/itemImg",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      imageName = response.data;
    } catch (error) {
      alert("Error uploading image");
      return;
    }

    // 2️⃣ Save inventory with uploaded image name
    const updateInventory = { ...inventory, itemImage: imageName };

    try {
      await axios.post("http://localhost:8080/inventory", updateInventory);
      navigate("/"); // go back to home
    } catch (error) {
      alert("Error saving inventory");
    }
  };

  // ✅ Fixed item ID generator
  const generateItemId = () => {
    const prefix = "ID";
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `${prefix}-${randomNum}`;
  };

  // ✅ Only run once when component mounts
  useEffect(() => {
    setInventory((prevInputs) => ({
      ...prevInputs,
      itemId: generateItemId(),
    }));
  }, []);

  return (
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
          readOnly
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
  );
}

export default AddItem;   


