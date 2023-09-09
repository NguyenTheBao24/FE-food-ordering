import React, { useState } from "react";
import { FaChair } from "react-icons/fa";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'; // Import useHistory và Router từ react-router-dom

import "./../../../../style/login/employee/order.css";
import MenuOrder from "./menuOrder";

function Order() {
    const [tables, setTables] = useState([
        { id: 1, name: "Bàn 1", isReserved: true },
        { id: 2, name: "Bàn 2", isReserved: false },
        { id: 3, name: "Bàn 3", isReserved: true },
        { id: 4, name: "Bàn 4", isReserved: false },
    ]);
    const [showAddItemModal, setShowAddItemModal] = useState(false); // Thêm trạng thái này

    const navigate = useNavigate();


    const handleLogout = () => {
        navigate('/login');
    };

    const handleReservation = (tableId) => {
        // Xử lý khi người dùng đặt bàn cho bàn có id là tableId
        // Có thể thêm logic xử lý đặt bàn ở đây
        const updatedTables = tables.map((table) =>
            table.id === tableId ? { ...table, isReserving: true } : table
        );
        setTables(updatedTables);
    };

    const handlePayment = (tableId) => {
        // Xử lý khi người dùng tính tiền cho bàn có id là tableId
        // Có thể thêm logic xử lý tính tiền ở đây
        const updatedTables = tables.map((table) =>
            table.id === tableId ? { ...table, isPaying: true } : table
        );
        setTables(updatedTables);
    };
    const handleOpenAddItemModal = () => {
        setShowAddItemModal(true);
    };

    const handleCloseAddItemModal = () => {
        setShowAddItemModal(false);
    };

    return (


        <div className="employee">

            <div className="table-list">
                <h3>Danh Sách Bàn Ăn</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên Bàn</th>
                            <th>Trạng Thái</th>
                            <th>Gọi món</th>
                            <th>Thanh toán </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tables.map((table) => (
                            <tr key={table.id}>
                                <td>{table.id}</td>
                                <td>
                                    <FaChair className="table-icon" /> {table.name}
                                </td>
                                <td>
                                    {table.isReserved ? (
                                        <span style={{ color: "green" }}>Đã Đặt</span>
                                    ) : (
                                        <span style={{ color: "red" }}>Trống</span>
                                    )}
                                </td>
                                <td>
                                    <button className="add-item-button" onClick={handleOpenAddItemModal}>
                                        Thêm món
                                    </button>
                                    {showAddItemModal && (
                                        <div className="upbook-modal">
                                            <MenuOrder></MenuOrder>
                                            <button onClick={handleCloseAddItemModal}>Đóng</button>
                                        </div>
                                    )}

                                </td>
                                <td>
                                    <div className="payment-column">
                                        {table.isPaying ? (
                                            <button className="payment-button" disabled>Tính Tiền</button>
                                        ) : (
                                            <button className="payment-button" onClick={() => handlePayment(table.id)}>Tính Tiền</button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Order;