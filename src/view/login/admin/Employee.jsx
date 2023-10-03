import React, { useState, useEffect } from 'react';
import './../../../style/login/admin/employee.css';
import { getEnpoyleee,sendEmpoylee} from '../../../services/login/addmin/addmin';
function EmployeeAdmin() {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({ username: '', password: '' });

    // Sử dụng useEffect để tải danh sách nhân viên từ API hoặc dữ liệu giả mạo
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await getEnpoyleee();
        setEmployees(data);
    };

    const addEmployee = async () => {
         const reverdata ={
            username: newEmployee.username,
            password: newEmployee.password,
            role:'Employee'

         }
        // console.log(newEmployee)
        try {
            // Gửi yêu cầu POST đến máy chủ với dữ liệu requestData
            const data = await sendEmpoylee(reverdata);
    
            // Kiểm tra xem yêu cầu đã thành công hay không
            if (data.status === 200) {
           
                
                setNewEmployee({ username: '', password: '' });
                fetchData();
            } else {
                console.error('Lỗi khi thêm nhân viên.');
            }
        } catch (error) {
            console.error('Lỗi khi gửi yêu cầu:', error);
        }
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
                    value={newEmployee.username}
                    onChange={(e) => setNewEmployee({ ...newEmployee, username: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Mật Khẩu"
                    value={newEmployee.password}
                    onChange={(e) => setNewEmployee({ ...newEmployee, password: e.target.value })}
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
                            <td className="employee-name">{employee.username}</td>
                            <td className="employee-position">*************</td>
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
