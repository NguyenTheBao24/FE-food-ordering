import React, { useState } from 'react';
import './../../style/login/login.css';
import axios from "axios";
import { sendReservationData } from "./../../services/login/login.js"


function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reservationData = {
      usernam: "admin",
      password: "admin"
    }
    try {
      const response = await sendReservationData(reservationData);

      console.log(response);
    } catch (error) {
    }


    // Đây là nơi bạn có thể xử lý thông tin đăng nhập, chẳng hạn kiểm tra xác thực người dùng
    console.log('Tài Khoản:', username);
    console.log('Mật Khẩu:', password);
  };

  return (
    <div className="login-form">
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Tài Khoản:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mật Khẩu:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Đăng Nhập</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
