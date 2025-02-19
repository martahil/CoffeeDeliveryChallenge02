import { createContext, useContext, useState } from 'react';

const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
  const [address, setAddress] = useState({
    zipCode: '',
    streetAddress: '',
    houseNumber: '',
    addressLine2: '',
    neighborhood: '',
    city: '',
    state: ''
  });

  const updateAddress = (newAddress) => {
    setAddress((prevState) => ({ ...prevState, ...newAddress }));
  };

  return (
    <CheckoutContext.Provider value={{ address, updateAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
}

// hook
export const useCheckout = () => useContext(CheckoutContext);