import React, { useState } from "react";
import './../../../style/login/admin/account.css'
import Addaccount from "./addAccount";
function Account() {
    const [showAdd, setShowAdd] = useState(false)

    const data = [0, 0, 0, 0]

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

                        <th>stt</th>
                        <th>stk</th>
                        <th></th>
                    </thead>
                    <tbody>

                        {data.map((item, index) => (
                            <tr key={index} >
                                <td>{index + 1}</td>
                                <td>{item}</td>
                                <td></td>


                            </tr>
                        ))}
                    </tbody>


                </table>


            </div>



            {showAdd && <Addaccount />}
        </>
    );
}

export default Account;
