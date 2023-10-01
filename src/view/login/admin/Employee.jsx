import React, { useState, useEffect } from 'react';
import './../../../style/login/admin/employee.css';

function EmployeeAdmin() {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', position: 'Quản lý' },
        { id: 2, name: 'Jane Smith', position: 'Nhân viên bán hàng' },
        { id: 3, name: 'Alice Johnson', position: 'Kế toán' },
        { id: 4, name: 'Bob Wilson', position: 'IT Support' },
        { id: 5, name: 'Eve Davis', position: 'Marketing' },
    ]);
    const [newEmployee, setNewEmployee] = useState({ name: '', position: '' });

    // Sử dụng useEffect để tải danh sách nhân viên từ API hoặc dữ liệu giả mạo
    useEffect(() => {
        // Gọi API hoặc thiết lập dữ liệu giả mạo
        // Sau đó, sử dụng setEmployees để cập nhật danh sách nhân viên
    }, []);

    const addEmployee = () => {
        // Gọi API hoặc thực hiện thêm nhân viên vào danh sách
        // Sau đó, cập nhật danh sách nhân viên bằng setEmployees
        // Reset newEmployee sau khi thêm thành công
        setNewEmployee({ name: '', position: '' });
    };

    const deleteEmployee = (employeeId) => {
        // Gọi API hoặc thực hiện xoá nhân viên khỏi danh sách
        // Sau đó, cập nhật danh sách nhân viên bằng setEmployees
    };

    return (
        <div className="employee-management">
            

            <div className="add-employee-form">
                <input
                    type="text"
                    placeholder="Tên Đăng Nhập Nhân Viên"
                    value={newEmployee.name}
                    onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Mật Khẩu"
                    value={newEmployee.position}
                    onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
                />
                <button className="add-employee-button" onClick={addEmployee}>
                    Thêm Nhân Viên
                </button>
            </div>

            <table className="employee-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên Đăng Nhập Nhân Viên</th>
                        <th>Mật Khẩu</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td className="employee-id">{employee.id}</td>
                            <td className="employee-name">{employee.name}</td>
                            <td className="employee-position">{employee.position}</td>
                            <td className="employee-action">
                                <button className="delete-employee-button" onClick={() => deleteEmployee(employee.id)}>
                                    Xoá
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeAdmin;
