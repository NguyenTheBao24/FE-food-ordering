import React, { useState } from "react";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'; // Import useHistory và Router từ react-router-dom
import './../../../style/login/admin/admin.css'
import Turnover from "./turnover";
import Account from "./account";
import EmployeeAddmin from './Employee'



function Admin() {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState("turnover");

    const handleLogout = () => {
        navigate('/login');
    };

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    return (
        <div className="admin">
            <div className="header_admin">
                <h2
                    className={selectedTab === "turnover" ? "selected-tab" : ""}
                    onClick={() => handleTabClick("turnover")}
                >
                    Turnover
                </h2>
                <h2
                    className={selectedTab === "employee" ? "selected-tab" : ""}
                    onClick={() => handleTabClick("employee")}
                >
                    Employee
                </h2>
                <h2
                    className={selectedTab === "Account" ? "selected-tab" : ""}
                    onClick={() => handleTabClick("Account")}
                >
                    Account
                </h2>
                <button className="logout-button" onClick={handleLogout}>
                    Đăng Xuất
                </button>
            </div>
            <div className="tab-content">
                {selectedTab === "turnover" ? <Turnover/> : null}
                {selectedTab === "employee" ? <EmployeeAddmin/> : null}
                {selectedTab === "Account" ? <Account/> : null}
            </div>
        </div>
    );
}

export default Admin;
