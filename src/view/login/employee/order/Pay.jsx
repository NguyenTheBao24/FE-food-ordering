import axios from 'axios';
import { putPay } from '../../../../services/login/employee/order/pay';
import './../../../../style/login/employee/pay.css'
import React, { useEffect, useState } from "react";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import QRCode from 'qrcode.react';

function Pay({ setShowAddItemModalPay, handlthanhtoan, tableId, datacustomer }) {
    const [paymentMethod, setPaymentMethod] = useState("");
    const [isPaymentSuccess, setPaymentSuccess] = useState(false);
    const statea = localStorage.getItem('payment') ? JSON.parse(localStorage.getItem('payment')) : {}
    console.log(statea);
    const [totalPrice, setTotalPrice] = useState(0);
    const [qr, setQr] = useState('')
    useEffect(() => {
        const fettotalPrice = async () => {
            const foundAddcoustomer = datacustomer.find((customElements) => customElements.tableId === tableId)
            const getPayment = await putPay(foundAddcoustomer.id);
            setTotalPrice(getPayment)
        }
        fettotalPrice()
        const socket = new SockJS('https://chanlepro.online/chat');
        const stompClient = Stomp.over(socket);

        stompClient.connect({}, (frame) => {


            stompClient.subscribe('/topic/result', (message) => {
                const response = JSON.parse(message.body);
                if (qr !== undefined)
                    setQr(response.qrCode)
                console.log(response.qrCode)
            });
            const jsonData = {
                amount: totalPrice,
                bankAccount: statea.sdt,
                content: "",
                sessionId: statea.sessionId
            };

            stompClient.send("/app/payment", {}, JSON.stringify(jsonData));
        });
    }, [])
    console.log(qr)


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
        if (isPaymentSuccess) {
            setPaymentSuccess(false);
            handlthanhtoan(tableId);
            handleClosePay();
        }
    };


    return (





        <div className="pay-container">
            <div className="popup">
                <h2>Tổng Tiền Thanh Toán: { } VNĐ</h2>
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
                                <div className='qr'>
                                    <QRCode value={qr} />
                                </div>
                            ) : (
                                <div>
                                    <p>{totalPrice} </p>
                                    <button onClick={handleConfirmPayment} className="close-button">
                                        Xác nhận
                                    </button>

                                </div>

                            )
                        }

                    </div>
                )}

            </div>
        </div>


    );
}

export default Pay;
