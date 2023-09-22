import React, { useState } from "react";
import './../../../style/login/admin/addAccount.css'

function Addaccount() {
    // Sử dụng useState để lưu trữ giá trị của các ô input
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [captcha, setCaptcha] = useState("");
    
    // Hàm xử lý khi nút xác nhận được nhấn
    const handleConfirm = () => {
        // Thực hiện xác nhận tài khoản tại đây và sử dụng giá trị username, password và captcha
        // Ví dụ: console.log(username, password, captcha);
    }

    return (
        <div className="addcount">
            <div className="addconten">
                <div>
                    <label>Tên đăng nhập:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Mã captcha:</label>
                    <input type="text" value={captcha} onChange={(e) => setCaptcha(e.target.value)} />
                </div>
                <div className="captra">


                <button onClick={handleConfirm}>Xác nhận</button>
                <div>
                    
                </div>
                </div>

            </div>
        </div>
    );
}

export default Addaccount;
