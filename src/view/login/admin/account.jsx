import React, { useState } from "react";
import './../../../style/login/admin/account.css'
import Addaccount from "./addAccount";
function Account() {
    const [showAdd, setShowAdd] = useState(false)
    const [sessionId, setSessionId] = useState([])
    const [selectedItem, setSelectedItem] = useState(null);



    
    const handleRadioChange = (index) => {
        setSelectedItem(index);
      };



    const handlAdd = () => {


        setShowAdd(true)

    }
    console.log(sessionId);

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
                                        checked={selectedItem === index}
                                        onChange={() => handleRadioChange(index)}
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
