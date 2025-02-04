import React, { useEffect, useState } from 'react';
import { addMenuItem, updateMenuItem, uploadProductImage } from '../Services/MenuItemsService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

import menu from '../CSS/MenuItems.css';

function MenuItemForm({ selectedMenuItem, setSelectedMenuItem, onAddMenuItem }) {
    const [menuItem, setMenuItem] = useState({ id: "", name: "", price: "", description: "", menuItemsImage: null });
    const [showForm, setShowForm] = useState(true);

    const submitHandler = (e) => {
        e.preventDefault();

        if (!menuItem.name || !menuItem.price || !menuItem.description || !menuItem.menuItemsImage) {
            alert("Please fill out all fields, including the product image.");
            return;
        }

        if (isNaN(menuItem.price) || menuItem.price <= 0) {
            alert("Please enter a valid price.");
            return;
        }

        addMenuItem({
            name: menuItem.name,
            price: menuItem.price,
            description: menuItem.description,
        }).then((data) => {
            if (menuItem.menuItemsImage) {
                uploadProductImage(data._links.self.href, menuItem.menuItemsImage);
            }
            onAddMenuItem();
            setMenuItem({ id: "", name: "", price: "", description: "", menuItemsImage: null });
            
            toast.success("Menu item added successfully!", {
                autoClose: 3000, 
            });
        });
    };

    const updateHandler = (e) => {
        e.preventDefault();

        if (!menuItem.name || !menuItem.price || !menuItem.description) {
            alert("Please fill out all fields.");
            return;
        }

        if (isNaN(menuItem.price) || menuItem.price <= 0) {
            alert("Please enter a valid price.");
            return;
        }

        updateMenuItem(selectedMenuItem._links.self.href, {
            name: menuItem.name,
            price: menuItem.price,
            description: menuItem.description,
            menuItemsImage: selectedMenuItem.menuItemsImage
        }).then(data => {
            uploadProductImage(data._links.self.href, menuItem.menuItemsImage);
            onAddMenuItem();
            setMenuItem({ id: "", name: "", price: "", description: "", menuItemsImage: null });
            setSelectedMenuItem(null);

            toast.success("Menu item updated successfully!", {
                autoClose: 3000,
            });
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMenuItem(prevMenuItem => ({
            ...prevMenuItem,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setMenuItem(prevMenuItem => ({
            ...prevMenuItem,
            menuItemsImage: file
        }));
    };

    useEffect(() => {
        if (selectedMenuItem) {
            setMenuItem(selectedMenuItem);
        }
    }, [selectedMenuItem]);

    return (
        <div>
            <button className='btn btn-primary mb-3' onClick={() => setShowForm(prev => !prev)}>Add Menu</button>

            {showForm && (
                <form onSubmit={selectedMenuItem ? updateHandler : submitHandler} className='w-3 border border-dark p-4'>
                    <h2>{selectedMenuItem ? "Update Menu Item" : "Add Menu Item"}</h2>

                    <div className="form-group">
                        <label>Item Name</label>
                        <input
                            type="text"
                            id="itemName"
                            className="form-control"
                            placeholder="Enter Item Name"
                            name="name"
                            value={menuItem.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Item Price</label>
                        <input
                            type="number"
                            id="itemPrice"
                            className="form-control"
                            placeholder="Enter Item Price"
                            name="price"
                            value={menuItem.price}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Item Description</label>
                        <input
                            type="text"
                            id="itemDescription"
                            className="form-control"
                            placeholder="Enter Item Description"
                            name="description"
                            value={menuItem.description}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Product Image */}
                    <div className="mb-3">
                        <label className="form-label">Menu Item Image</label>
                        <input
                            type="file"
                            className="form-control"
                            name="menuItemsImage"
                            onChange={handleImageChange}
                        />
                    </div>

                    <button type="submit" className="btn-submit">
                        {selectedMenuItem ? "Update" : "Submit"}
                    </button>
                </form>
            )}

            <ToastContainer />
        </div>
    );
}

export default MenuItemForm;
