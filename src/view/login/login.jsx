import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './../../style/login/login.css';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'; // Import useHistory và Router từ react-router-dom

import { sendReservationData } from "./../../services/login/login.js"

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gologin, setGologin] = useState('');
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Kiểm tra giá trị gologin và điều hướng người dùng dựa trên nó
    if (gologin === 'Admin') {
      navigate('/admin');
    } else if (gologin === 'Employee') {
      navigate('/employee');
    }
  }, [gologin, navigate]);

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
      username: username,
      password: password
    }
    try {
      const response = await sendReservationData(reservationData);
      setGologin(response.data);
      console.log(response);

    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error("Lỗi: Đăng nhập không thành công. Vui lòng kiểm tra tên người dùng và mật khẩu.");
        // Mở modal thông báo khi đăng nhập không thành công
        setIsModalOpen(true);
      } else {
        // Xử lý các lỗi khác (không phải lỗi 401) ở đây
        console.error("Lỗi không xác định:", error.message);
      }
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

      {/* Modal hiển thị khi đăng nhập không thành công */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Thông Báo"
        className="ReactModal__Content"
      >
        <h3>Bạn đã đăng nhập sai</h3>
        <button className='ModalCloseButton' onClick={() => setIsModalOpen(false)}>Đóng</button>
      </Modal>
    </div>
  );
}

export default LoginForm;

