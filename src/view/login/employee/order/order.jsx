import React, { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { FaChair } from "react-icons/fa";

import "./../../../../style/login/employee/order.css";
import MenuOrder from "./menuOrder";
import { fetchCustomerDataOrder, putTableStatus } from "../../../../services/login/employee/order/order.js";
import Pay from "./Pay";




function Order() {
    const [tables, setTables] = useState([]);
    const statea = localStorage.getItem('payment') ? JSON.parse(localStorage.getItem('payment')) : {}
   console.log(statea);

    useEffect(() => {

        const fetchdata = async () => {
            const rever = await fetchCustomerDataOrder()
     
            setTables(rever)

        }
        fetchdata();



    }, [])

    const uppdateData = async () => {

        const customer = await fetchCustomerDataOrder();
        setTables(customer);


    }



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
    const handlAddCustomer = async (tableId) => {

        const respon = await putTableStatus(tableId)


        uppdateData()
    }



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
                            <th>Sử dụng</th>
                            <th>Gọi món</th>
                            <th>Thanh toán </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tables.map((table) => (
                            <tr key={table.id}>
                                <td>{table.id}</td>
                                <td>
                                    <FaChair className="table-icon" /> Bàn {table.id}
                                </td>
                                <td>
                                    {table.status === "Available" ? (
                                        <span style={{ color: "green" }}>Trống</span>
                                    ) : table.status === "NotAvailable" ? (
                                        <span style={{ color: "red" }}>Đang Dùng</span>
                                    ) : (
                                        <span style={{ color: "blue" }}>Đã Đặt</span>
                                    )}
                                </td>
                                <td>
                                    {table.status === "Booked" ? (
                                        <button className="newCustomer" onClick={() => handlAddCustomer(table.id)}>
                                            khách offline
                                        </button>
                                    ) : table.status === "Available" ? (
                                        <button className="add-item-button" onClick={() => handlAddCustomer(table.id)}>
                                            khách online
                                        </button>
                                    ) : null
                                    }


                                </td>
                                <td>
                                    <div>


                                        {table.status === "NotAvailable" ? (
                                            <button className="add-item-button" onClick={() => handleOpenAddItemModal(table.id)}>
                                                Thêm món
                                                {/* <span>{table.total}</span> */}
                                            </button>
                                        ) : null
                                        }

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

                                        {table.status === "NotAvailable" ? (
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