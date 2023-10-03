import React, { useEffect, useState } from "react";
import "./../../../../style/login/employee/menuOrder.css";
import { handlAddtotal, putTotalPay } from "../../../../services/login/employee/order/order";



function MenuOrder({ setShowAddItemModal, tableId, datamenu, datacustomer }) {
    const [menuItems, setMenuItems] = useState(datamenu);


    const [totalPrice, setTotalPrice] = useState(0);
    const [isClosed, setIsClosed] = useState(false);
    const [additional, setAdditional] = useState([]);

    useEffect(() => {
        // Định nghĩa một biến state (ví dụ: shouldFetch) để theo dõi liệu có nên gọi API hay không
        const shouldFetch = true; // Thay đổi giá trị này theo điều kiện của bạn

        // Sử dụng điều kiện shouldFetch để quyết định khi nào nên gọi API
        if (shouldFetch) {
            const fetchData = async () => {
                try {
                    const getPayment = await putTotalPay(tableId);
                    setAdditional(getPayment)
                    const calculatedTotal = getPayment.reduce((total, getPayment) => {
                        return total + getPayment.total;
                    }, 0);
                    setTotalPrice(calculatedTotal);

                } catch (error) {
                }
            };

            fetchData();
        }
    },[tableId]);
    console.log(menuItems);

    const handleCloseMenuOrder = () => {

        setShowAddItemModal(false);
        setIsClosed(true);




    };

    const handleAddItem = async (item) => {
        const menuItem = additional.find((menuItem) => menuItem.id === item.id);
        const customerWithMatchingTableId = datacustomer.find((customer) => customer.tableId === tableId);
        // menuItem.quantity += 1;
        console.log(menuItem)

        // const rever = {
        //     menuItem: {
        //         "id": tableId
        //     },
        //     "quantity": menuItem.quantity,
        // }
         await handlAddtotal(1, 1)




    };

    const handleRemoveItem = (item) => {
        const menuItem = additional.find((menuItem) => menuItem.id === item.id);





    };




    return (
        <div className={`upbook-modal ${isClosed ? "closed" : ""}`}>
            <div className="upbook-modal-content">
                <h2>Menu Order</h2>
                <ul className="menu-items">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <div className="mon">

                                {item.name} - {item.price} VNĐ
                            </div>
                            <div className="maxbtn">

                                <button onClick={() => handleAddItem(item)}>Thêm món</button>
                                <button onClick={() => handleRemoveItem(item)}>Bớt món</button>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="total-price">
                    Tổng tiền: {totalPrice} VNĐ
                </div>
                <button onClick={handleCloseMenuOrder}>Đóng</button>
            </div>
        </div>
    );
}

export default MenuOrder;
