import React, { useState } from "react";
import { FaChair } from "react-icons/fa";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'; // Import useHistory và Router từ react-router-dom

import "./../../../../style/login/employee/order.css";
import MenuOrder from "./menuOrder";
import Pay from "./Pay";

function Order() {
    const [tables, setTables] = useState([
        { id: 1, name: "Bàn 1", isReserved: true, total: 0 },
        { id: 2, name: "Bàn 2", isReserved: false, total: 0 },
        { id: 3, name: "Bàn 3", isReserved: true, total: 0 },
        { id: 4, name: "Bàn 4", isReserved: false, total: 0 },
    ]);

    const [showAddItemModal, setShowAddItemModal] = useState(false);
    const [openedTableId, setOpenedTableId] = useState(null);
    const [showAddItemModalPay, setShowAddItemModalPay] = useState(false);
    const [openedTableIdPay, setOpenedTableIdPay] = useState(null);


    const updateTotalPrice = (tableNumber, newTotalPrice) => {
        const updatedTables = tables.map((table) =>
            table.id === tableNumber ? { ...table, total: newTotalPrice } : table
        );


        setTables(updatedTables);
    };



    const handlePayment = (tableId) => {

        setShowAddItemModalPay(true)
        setOpenedTableIdPay(tableId);

    };
    const handleOpenAddItemModal = (tableId) => {
        setShowAddItemModal(true);
        setOpenedTableId(tableId);
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
                                            <span>{table.total}</span>
                                        </button>
                                        {showAddItemModal && openedTableId === table.id && (

                                            <MenuOrder
                                                setShowAddItemModal={setShowAddItemModal}
                                                updateTotalPrice={updateTotalPrice}
                                                tableId={table.id}
                                                many={table.total}

                                            />
                                        )}
                                    </div>
                                </td>
                                <td>
                                    <div className="payment-column">

                                        {table.isReserved ? (
                                            <button className="payment-button" onClick={() => handlePayment(table.id)}>Thanh Toán </button>
                                        ) : null
                                        }
                                        {
                                            showAddItemModalPay && openedTableIdPay === table.id && (
                                                <Pay
                                                    setShowAddItemModalPay={setShowAddItemModalPay}
                                                    totalAmount={table.total}
                                                    updateTotalPrice={updateTotalPrice}
                                                    tableId={table.id}
                                                />
                                            )
                                        }

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