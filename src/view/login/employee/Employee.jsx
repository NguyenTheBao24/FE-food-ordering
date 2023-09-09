import React, { useState } from "react";
import { FaChair } from "react-icons/fa";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'; // Import useHistory và Router từ react-router-dom
import Order from './order/order.jsx'
import Customer from "./customer/customer.jsx";
import "./../../../style/login/employee/employee.css";

function Employee() {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState("Order");

    const handleLogout = () => {
        navigate('/login');
    };

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    return (
        <div className="employee">
            <div className="header">
                <h2
                    className={selectedTab === "Order" ? "selected-tab" : ""}
                    onClick={() => handleTabClick("Order")}
                >
                    Order
                </h2>
                <h2
                    className={selectedTab === "Customer" ? "selected-tab" : ""}
                    onClick={() => handleTabClick("Customer")}
                >
                    Customer
                </h2>
                <button className="logout-button" onClick={handleLogout}>
                    Đăng Xuất
                </button>
            </div>
            <div className="tab-content">
                {selectedTab === "Order" ? <Order /> : null}
                {selectedTab === "Customer" ? <Customer /> : null}
            </div>
        </div>
    );
}

export default Employee;
