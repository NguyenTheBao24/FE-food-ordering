import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

import './../../../../style/login/employee/customer.css';

function Customer() {
    // Dữ liệu mẫu cho danh sách bàn ăn
    const initialTables = [
        {
            id: 1,
            name: "Nguyễn Văn A",
            SDT: "0869346831",
            dateTime: "2023-09-11 12:00 PM",
        },
        {
            id: 2,
            name: "Trần Thị B",
            SDT: "0869346831",
            dateTime: "2023-09-11 01:30 PM",
        },
        {
            id: 3,
            name: "Lê Hữu C",
            SDT: "0869346831",
            dateTime: "2023-09-11 03:15 PM",
        },
    ];

    const [tables, setTables] = useState(initialTables);
    const [reservedTables, setReservedTables] = useState({});

    // Hàm để xử lý khi đặt bàn
    const reserveTable = (tableId) => {
        const selectedTable = tables.find((table) => table.id === tableId);
        if (selectedTable) {
            setReservedTables( selectedTable);
            // Xoá bàn đã đặt ra khỏi danh sách ban đầu
            const updatedTables = tables.filter((table) => table.id !== tableId);
            setTables(updatedTables);
        }
    
    };

    // Hàm để xử lý khi huỷ bàn
    const cancelTable = (tableId) => {


        const updatedTables = tables.filter((table) => table.id !== tableId);
        setTables(updatedTables);

    };
    console.log(reservedTables);


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
                                        <span>{table.SDT}</span>
                                    </td>
                                    <td>{table.dateTime}</td>
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
        </>
    );
}

export default Customer;
