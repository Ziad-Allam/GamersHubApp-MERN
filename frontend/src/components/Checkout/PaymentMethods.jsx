import React from 'react'
import { FaMoneyBillWave, FaPaypal, FaCreditCard } from "react-icons/fa";

function PaymentMethods({ selectedMethod, onChange }) {
    const paymentOptions = [
        {
            id: "cod",
            label: "Cash on Delivery",
            icon: <FaMoneyBillWave className="text-xl" />,
        },
        {
            id: "card",
            label: "Visa / Credit / Debit Card",
            icon: <FaCreditCard className="text-xl" />,
        },
        {
            id: "paypal",
            label: "PayPal",
            icon: <FaPaypal className="text-xl" />,
        },
    ];

    return (
        <div className='py-3'>
            <div className="w-full bg-white rounded-md shadow-md border p-2 lg:p-4">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4">Payment Method</h2>

                <div className="flex flex-col gap-4">
                    {paymentOptions.map((option) => (
                        <label
                            key={option.id}
                            className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition ${selectedMethod === option.id ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}>
                            <input
                                type="radio"
                                name="payment"
                                value={option.id}
                                checked={selectedMethod === option.id}
                                onChange={() => onChange(option.id)}
                                className="size-3 accent-blue-600"
                            />

                            <div className="flex items-center gap-2">
                                {option.icon}
                                <span className="text-sm lg:text-base font-medium">{option.label}</span>
                            </div>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PaymentMethods
