import React, { useState } from "react";
import "./../../style/BookNow/BookNow.css";
import { sendReservationData } from "./../../services/BookNow/BookNow.js"
import { reverseEasing } from "framer-motion";

function BookNow({ onClose }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [day, setDay] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validatePhoneNumber(phoneNumber)) {
      const reservationData = {
        customer: {
          name: name,
          phone: phoneNumber
        },
        reservationTime: `${day}T${bookingTime}:00`,
        status: "Pending"
      };
      try {
    
        await sendReservationData(reservationData);

      } catch (error) {
      }
      setPhoneNumber("");
      setName("");
      setBookingTime("");
      setDay("");
      setIsValidPhoneNumber(true);
      setIsBookingSuccess(true);
      setTimeout(() => {
        setIsBookingSuccess(false);
        onClose()
      }, 3000);

    } else {
      setIsValidPhoneNumber(false);
    }
  };
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("BookNow")) {
      onClose();
    }
  };

  const validatePhoneNumber = (input) => {
    const regex = /^(0|\+84)(3[2-9]|5[2689]|7[06-9]|8[1-9]|9[0-9])[0-9]{7}$/;
    return regex.test(input);
  };

  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <div className="BookNow" onClick={handleOutsideClick}>
      <div className="BookNow-content">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tên:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Số điện thoại:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            {!isValidPhoneNumber && (
              <p className="error-message">Số điện thoại không hợp lệ. Vui lòng nhập lại.</p>
            )}
          </div>
          <div className="form-group">
            <label>Ngày Đặt Bàn:</label>
            <input
              type="date"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              min={currentDate}
              required
            />
          </div>
          <div className="form-group">
            <label>Giờ đặt bàn:</label>
            <input
              type="time"
              value={bookingTime}
              onChange={(e) => setBookingTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Book Now</button>
          </div>
        </form>
        <div className={`success-message ${isBookingSuccess ? "visible" : ""}`}>
          Yêu cầu đặt bàn thành công!
        </div>
      </div>
    </div>
  );
}

export default BookNow;
