
import Account from '../../admin/account';
import './../../../../style/login/employee/pay.css'
import React, { useState,useContext } from "react";
import { useSelector } from 'react-redux';

function Pay({ setShowAddItemModalPay, totalAmount, updateTotalPrice, tableId }) {
    const [paymentMethod, setPaymentMethod] = useState(""); // State để lưu phương thức thanh toán
    const [isPaymentSuccess, setPaymentSuccess] = useState(false); // State để kiểm soát hiển thị popup xác nhận
   
    const handleClosePay = () => {
        setShowAddItemModalPay(false);
    };

    const handlePayment = () => {
        if (paymentMethod === "thanhToanBangThe") {

            setPaymentSuccess(true);
        } else if (paymentMethod === "thanhToanBangTienMat") {

            setPaymentSuccess(true);
        }
    };

    const handleConfirmPayment = () => {

        setPaymentSuccess(false); // Ẩn popup xác nhận
        updateTotalPrice(tableId, 0);
        handleClosePay(); // Đóng cửa sổ thanh toán
    };
   

    return (
      



      
        <div className="pay-container">
            <div className="popup">
                <h2>Tổng Tiền Thanh Toán: {totalAmount} VNĐ</h2>
                <p>Chọn phương thức thanh toán:</p>
                <div className="payment-options">
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="thanhToanBangThe"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Thanh toán bằng thẻ
                       
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="thanhToanBangTienMat"
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Thanh toán bằng tiền mặt
                    </label>
                </div>
                <button onClick={handlePayment} className="payment-button">
                    Thanh Toán
                </button>
                <button onClick={handleClosePay} className="close-button">
                    Đóng
                </button>
                {isPaymentSuccess && (
                    <div className="confirmation-popup">

                        {
                            paymentMethod === "thanhToanBangThe" ? (
                                <p> thanh toán bằng thẻ </p>
                            ) : (
                                <p>thanh toán bằng tiềN mặt </p>
                            )
                        }
                        <button onClick={handleConfirmPayment} className="close-button">
                            Xác nhận
                        </button>
                    </div>
                )}
                {null && 
                <Account />
                
                }
            </div>
        </div>
      
     
    );
}

export default Pay;
