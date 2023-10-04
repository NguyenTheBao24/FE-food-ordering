import React, { useEffect, useState } from "react";
import "./../../../../style/login/employee/menuOrder.css";
import { handlAddtotal, putTotalPay } from "../../../../services/login/employee/order/order";



function MenuOrder({ setShowAddItemModal, tableId, datamenu, datacustomer }) {
    const [menuItems, setMenuItems] = useState(datamenu);


    const [totalPrice, setTotalPrice] = useState(0);
    const [isClosed, setIsClosed] = useState(false);
    const [additional, setAdditional] = useState([]);
    const tong =()=>{
        const calculatedTotal = additional.reduce((total, additional) => {
            return total + additional.total;
        }, 0);
        setTotalPrice(calculatedTotal);
        // console.log(additional)
    }

    useEffect(() => {
   
    
       
            const fetchData = async () => {
                try {
                    const getPayment = await putTotalPay(tableId);
                    setAdditional(getPayment)
                    // console.log(additional)
                    tong();

                } catch (error) {
                }
            };

            fetchData();
        
    },[additional] );
    // console.log(menuItems);

    const handleCloseMenuOrder = () => {

        setShowAddItemModal(false);
        setIsClosed(true);




    };

    const handleAddItem = async (item) => {
        const foundAdditionalItem = additional.find((additional) => additional.menuId === item.id);
        const foundAddcoustomer = datacustomer.find((customElements) => customElements.tableId === tableId)
        console.log(foundAdditionalItem)
        foundAdditionalItem.quantity =   foundAdditionalItem.quantity+1

        const rever = {
            menuItem: {
                "id": item.id
            },
            "quantity": foundAdditionalItem.quantity ,
        }

        console.log(foundAddcoustomer)
        await handlAddtotal(foundAddcoustomer.id, rever)
        tong()




    };

    const handleRemoveItem = async (item) => {
        const foundAdditionalItem = additional.find((additional) => additional.menuId === item.id);
        const foundAddcoustomer = datacustomer.find((customElements) => customElements.tableId === tableId)

        foundAdditionalItem.quantity =   foundAdditionalItem.quantity-1

        const rever = {
            menuItem: {
                "id": item.id
            },
            "quantity": foundAdditionalItem.quantity ,
        }

        console.log(foundAddcoustomer)
        await handlAddtotal(foundAddcoustomer.id, rever)
        tong()





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
                                 <span>{item.quantity} </span>
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
