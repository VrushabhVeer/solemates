import React, { useEffect, useState } from 'react';

const CartSummary = ({ cartItems }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const shipping = 49;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (Array.isArray(cartItems)) {
      const newSubtotal = cartItems.reduce((total, item) => total + item.offerPrice * item.quantity, 0);
      const newTax = newSubtotal * 0.03;
      setSubtotal(newSubtotal);
      setTax(newTax);
      setTotal(newSubtotal + newTax + shipping);
    }
  }, [cartItems]);

  return (
    <div>
      <h2 className="font-semibold text-1xl">Order Summary</h2>
      <div className="mt-5">
        <div className="flex items-center justify-between">
          <div>
            <p>Subtotal</p>
            <p className="mt-3">3% GST</p>
            <p className="mt-3">Shipping</p>
          </div>
          <div>
            <p>₹ {subtotal.toFixed(2)}</p>
            <p className="mt-3">₹ {tax.toFixed(2)}</p>
            <p className="mt-3">₹ {shipping}</p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-4 border-t border-slate-300">
          <p className="mt-2 font-medium">Total</p>
          <p className="mt-2 font-medium">₹ {total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
