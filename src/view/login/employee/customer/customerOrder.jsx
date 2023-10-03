import React, { useEffect, useState } from "react";
import './../../../../style/login/employee/customerOrder.css'
import { fetchCustomerDataOrder, putCustomer } from './../../../../services/login/employee/customer/customer.js'


function CustomerOrder({ setShowPopup, id, updateTablesData }) {
    const [emptyTable, setEmtyTable] = useState([])
    const [selectedTable, setSelectedTable] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCustomerDataOrder();
            setEmtyTable(data);
        }
        fetchData();

    }, [])


    const hannldOut = async () => {


        const revers = {
            id: selectedTable

        }
        if (selectedTable !== 0)
            await putCustomer(revers, id);


        setShowPopup(false);
        updateTablesData();
    }

    const handleTableCheckboxChange = (tableId) => {

        if (selectedTable === tableId) {
            setSelectedTable(null);
        } else {
            setSelectedTable(tableId);
        }
    };
    return (


        <div className="customerOrder-container">
            <div className="customerOder-content">
                <div className="table-list">
                    <p>Số lượng bàn: {emptyTable.length}</p>
                    <p>Danh sách bàn:</p>
                    <ul>
                        {emptyTable.map((table) => (
                            <li key={table.id}>
                                <label>
                                    <input
                                        type="radio"
                                        name="selectedTable"
                                        value={table.id}
                                        checked={selectedTable === table.id}
                                        onChange={() => handleTableCheckboxChange(table.id)}
                                    />
                                    <span className="table-number"> Bàn {table.id}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="btnOder fixed-btn" onClick={hannldOut}>xác nhận</button>
            </div>
        </div>



    );
}

export default CustomerOrder;