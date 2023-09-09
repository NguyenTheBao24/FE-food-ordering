import React, { useState } from "react";
import "./../../../../style/login/employee/menuOrder.css";



function MenuOrder({ handleClose, setShowAddItemModal, updateTotalPrice }) {
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: "Món 1", price: 10, quantity: 0 },
        { id: 2, name: "Món 2", price: 15, quantity: 0 },
        { id: 3, name: "Món 3", price: 20, quantity: 0 },
    ]);

    const [selectedItems, setSelectedItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isClosed, setIsClosed] = useState(false); // State để kiểm tra mục đã đóng

    const handleCloseMenuOrder = () => {
        handleClose();
        setShowAddItemModal(false);
        setIsClosed(true);
        const total = menuItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

        updateTotalPrice(total);//

    };

    const handleAddItem = (item) => {
        const menuItem = menuItems.find((menuItem) => menuItem.id === item.id);
        if (menuItem) {
            menuItem.quantity++;
            setMenuItems([...menuItems]);
        }
        calculateTotalPrice();
    };

    const handleRemoveItem = (item) => {
        const menuItem = menuItems.find((menuItem) => menuItem.id === item.id);
        if (menuItem && menuItem.quantity > 0) {
            menuItem.quantity--;
            setMenuItems([...menuItems]);
        }
        calculateTotalPrice();
    };

    const calculateTotalPrice = () => {
        const total = menuItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
        );
        setTotalPrice(total);


    };

    return (
        <div className={`upbook-modal ${isClosed ? "closed" : ""}`}>
            <div className="upbook-modal-content">
                <h2>Menu Order</h2>
                <ul className="menu-items">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.price} VNĐ
                            <span className="item-quantity">{item.quantity}</span>
                            <button onClick={() => handleAddItem(item)}>Thêm món</button>
                            <button onClick={() => handleRemoveItem(item)}>Bớt món</button>
                        </li>
                    ))}
                </ul>

                <div className="total-price">
                    Tổng tiền: {totalPrice} VNĐ
                </div>
                <button onClick={handleCloseMenuOrder}>Đóng</button>
            </div>
        </div>
    );
}

export default MenuOrder;
