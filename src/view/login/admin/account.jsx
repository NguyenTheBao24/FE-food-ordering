import React, { useContext, useState } from "react";
import './../../../style/login/admin/account.css'
import { PaymentContext } from "../../../routes/context.js";
import Addaccount from "./addAccount";
import { useDispatch } from 'react-redux';
import { Store } from "redux";
import { updatePayment,paymentSlice } from './../../../redux/paymentSlice';
// import {paymentSlice} from './../../../redux/store'
function Account() {
    const [showAdd, setShowAdd] = useState(false)
    const [sessionId, setSessionId] = useState([])
    const [selectedItem, setSelectedItem] = useState(null);
    // const { sendPaymentToOrder } = useContext(PaymentContext)
    const dispatch = useDispatch();


    const handleRadioChange = (item) => {


        setSelectedItem(item);
        const payment = {
            sdt: item,
            sessionId: sessionId.sessionId
        }
        console.log(payment)
        dispatch(updatePayment(payment))
        // console.log(payment)

    };


    const handlAdd = () => {


        setShowAdd(true)

    }

    return (
        <>



            <div>

                <button className="acc_btn" onClick={handlAdd}>Thêm tài khoản</button>
            </div>
            <div>
                <table>
                    <thead>

                        <th>Stt</th>
                        <th>Stk</th>
                        <th>Sủ dụng</th>
                    </thead>
                    <tbody>

                        {sessionId.acct_list && sessionId.acct_list.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item}</td>
                                <td>
                                    <input
                                        type="radio"
                                        name="selectedItem"
                                        value={index}
                                        checked={selectedItem === item}
                                        onChange={() => handleRadioChange(item)}
                                    />

                                </td>
                            </tr>

                        ))}

                    </tbody>


                </table>


            </div>



            {showAdd && <Addaccount
                setShowAdd={setShowAdd}
                setSessionId={setSessionId}

            />}

        </>
    );
}

export default Account;

