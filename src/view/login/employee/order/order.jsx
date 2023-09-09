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
    const [showAddItemModal, setShowAddItemModal] = useState(false);
    const [openedTableId, setOpenedTableId] = useState(null);

    const [totalPrice, setTotalPrice] = useState(0);

    const updateTotalPrice = (newTotalPrice) => {
        setTotalPrice(newTotalPrice);


        console.log(totalPrice);
    };
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
    const handleOpenAddItemModal = (tableId) => {
        setShowAddItemModal(true);
        setOpenedTableId(tableId);
        // console.log(totalPrice);
    };


    const handleCloseAddItemModal = () => {
        setShowAddItemModal(false);
        console.log(totalPrice);
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
                                    <div>
                                        <button className="add-item-button" onClick={() => handleOpenAddItemModal(table.id)}>
                                            Thêm món
                                        </button>
                                        {showAddItemModal && openedTableId === table.id && (
                                            <MenuOrder
                                                handleClose={() => setShowAddItemModal(false)}
                                                setShowAddItemModal={setShowAddItemModal}
                                                tableNumber={table.id}
                                                updateTotalPrice={updateTotalPrice}


                                            />
                                        )}
                                    </div>
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