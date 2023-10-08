import React, { useEffect, useState } from "react";
import './../../../style/login/admin/addAccount.css'
import { getCaptra, sendAccount } from "../../../services/login/addmin/addmin";


function Addaccount({ setShowAdd ,setSessionId }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [captchaImageBase64,setCaptchaImageBase64]=useState("")

    useEffect(() => {

        const fetchdata = async () => {
            const captraimg = await getCaptra()
            // console.log(captraimg)
            setCaptchaImageBase64(captraimg)

        }
        fetchdata();



    }, [])

   
    const handleConfirm = async () => {


        const accountInfo = {
            username: username,
            password: password,
            captcha: captcha,
        };
      
        
        const sessionId = await sendAccount(accountInfo);
        // console.log(sessionId.data.data[0].acct_list);
        setSessionId(sessionId.data.data[0])
        setShowAdd(false);
        
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
             
                    <img src={`data:image/png;base64,${captchaImageBase64}`} alt="CAPTCHA" />
                </div>
                <button onClick={handleConfirm}>Xác nhận</button>
            </div>
        </div>
    );
}

export default Addaccount;
