import React, { useState } from "react";
import "./../../../../style/login/employee/menuOrder.css";



function MenuOrder({ setShowAddItemModal, updateTotalPrice, tableId, many }) {
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: "Món 1", price: 10, quantityRemaining: 0, totalPriceForTable: 0 },
        { id: 2, name: "Món 2", price: 15, quantityRemaining: 0, totalPriceForTable: 0 },
        { id: 3, name: "Món 3", price: 20, quantityRemaining: 0, totalPriceForTable: 0 },
    ]);

    const [totalPrice, setTotalPrice] = useState(many);
    const [isClosed, setIsClosed] = useState(false);

    const handleCloseMenuOrder = () => {

        setShowAddItemModal(false);
        setIsClosed(true);


        const totalForTable = menuItems.reduce((acc, item) => acc + item.totalPriceForTable, many);
        updateTotalPrice(tableId, totalForTable);

    };

    const handleAddItem = (item) => {
        const menuItem = menuItems.find((menuItem) => menuItem.id === item.id);

        menuItem.quantityRemaining++;
        menuItem.totalPriceForTable += item.price;
        setMenuItems([...menuItems]);

        calculateTotalPrice();
    };

    const handleRemoveItem = (item) => {
        const menuItem = menuItems.find((menuItem) => menuItem.id === item.id);


        menuItem.quantityRemaining--;
        menuItem.totalPriceForTable -= item.price;
        setMenuItems([...menuItems]);


        calculateTotalPrice();
    };

    const calculateTotalPrice = () => {
        const total = menuItems.reduce(
            (acc, item) => acc + item.price * item.quantityRemaining,
            many
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
