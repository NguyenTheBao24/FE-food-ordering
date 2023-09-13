import React, { useEffect, useState } from "react";
import './../../../../style/login/employee/customerOrder.css'
import { fetchCustomerDataOrder, putCustomer } from './../../../../services/login/employee/customer/customer.js'


function CustomerOrder({ setShowPopup, id }) {
    const [emptyTable, setEmtyTable] = useState([])
    const [selectedTable, setSelectedTable] = useState(0); // State để lưu trữ các bàn được chọn

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCustomerDataOrder();
            setEmtyTable(data);
        }
        fetchData();

    }, [])


    const hannldOut = async () => {

        const revers = {
            id: id+1
        }
        await putCustomer(revers, id);


        setShowPopup(false);
    }

    const handleTableCheckboxChange = (tableId) => {
        // Kiểm tra xem bàn có trong danh sách đã chọn chưa

        if (selectedTable === tableId) {
            // Nếu bàn được chọn là bàn hiện tại, hãy bỏ chọn nó
            setSelectedTable(null);
        } else {
            // Nếu bàn được chọn không phải là bàn hiện tại, hãy chọn nó và hủy chọn tất cả các bàn khác
            setSelectedTable(tableId);
        }
    };
    return (
        <div className="customerOrder-container">

            <div className="customerOder-content">
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
                <button className="btnOder" onClick={hannldOut}>xác nhận</button>
            </div>
        </div>

    );
}

export default CustomerOrder;