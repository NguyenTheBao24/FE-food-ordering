// Trong file PaymentContext.js
import React, { createContext, useState, useContext } from 'react';

export const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
  const [payment, setPayment] = useState({});

  const sendPaymentToOrder = (newPayment) => {
    setPayment(newPayment);
  };
  console.log(payment)
  return (
    <PaymentContext.Provider value={{ payment, sendPaymentToOrder }}>
      {children}
    </PaymentContext.Provider>
  );
};
