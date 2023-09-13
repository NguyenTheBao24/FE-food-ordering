import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { fetchCustomerData } from './../../../../services/login/employee/customer/customer.js'

import './../../../../style/login/employee/customer.css';
import CustomerOrder from "./customerOrder.jsx";

function Customer() {
    const [tables, setTables] = useState([]);
    const [id, setId] = useState(0);
    const [showPopup, setShowPopup] = useState(false); // State để kiểm soát hiển thị popup

    useEffect(() => {
        const fetchData = async () => {
            const customer = await fetchCustomerData();
            setTables(customer)
        };

        fetchData();
    }, []);

    // Hàm để xử lý khi đặt bàn
    const reserveTable = (tableId) => {
        setShowPopup(true); // Hiển thị popup

        setId(tableId)
        console.log(id); 


    };
 

    // Hàm để xử lý khi huỷ bàn
    const cancelTable = (tableId) => {


        const updatedTables = tables.filter((table) => table.id !== tableId);
        setTables(updatedTables);

    };
    console.log(tables);


    return (
        <>
            <div className="employee">
                <div className="table-list">
                    <h3>Danh Sách Khách Hàng</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên Khách Hàng</th>
                                <th>SDT</th>
                                <th>Ngày : Giờ</th>
                                <th>Đặt Bàn</th>
                                <th>Huỷ Bàn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tables.map((table) => (
                                <tr key={table.id}>
                                    <td>{table.id}</td>
                                    <td>
                                        <FaUserCircle className="table-icon" /> {table.name}
                                    </td>
                                    <td>
                                        <span>{table.phone}</span>
                                    </td>
                                    <td>{table.reservationTime}</td>
                                    <td>
                                        <button className="button-reserve" onClick={() => reserveTable(table.id)}>
                                            Đặt Bàn
                                        </button>
                                    </td>
                                    <td>
                                        <button className="button-cancel" onClick={() => cancelTable(table.id)}>
                                            Huỷ Bàn
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {
                showPopup && (
                    <CustomerOrder
                    
                    setShowPopup={setShowPopup} 
                    id={id}
                    
                    
                    />  )
            }
        </>
    );
}

export default Customer;
