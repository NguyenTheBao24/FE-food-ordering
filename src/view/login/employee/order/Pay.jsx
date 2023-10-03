
import './../../../../style/login/employee/pay.css'
import React, { useState } from "react";

function Pay({ setShowAddItemModalPay,handlthanhtoan, tableId }) {
    const [paymentMethod, setPaymentMethod] = useState(""); 
    const [isPaymentSuccess, setPaymentSuccess] = useState(false); 
   
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
        if (isPaymentSuccess) { // Kiểm tra xem đã xác nhận thanh toán chưa
            setPaymentSuccess(false); // Ẩn popup xác nhận
            handlthanhtoan(tableId);
            handleClosePay(); // Đóng cửa sổ thanh toán
        }// Đóng cửa sổ thanh toán
    };
   

    return (
      



      
        <div className="pay-container">
            <div className="popup">
                <h2>Tổng Tiền Thanh Toán: {} VNĐ</h2>
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
                                <p>thanh toán bằng tiền mặt </p>
                            )
                        }
                        <button onClick={handleConfirmPayment} className="close-button">
                            Xác nhận
                        </button>
                    </div>
                )}
               
            </div>
        </div>
      
     
    );
}

export default Pay;
