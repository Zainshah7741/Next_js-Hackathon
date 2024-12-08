'use client'
import Image from "next/image";
import React, { useState } from "react";

const CartSection = () => {
    // Sample cart items
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Product 1", price: 25, quantity: 2 },
        { id: 2, name: "Product 2", price: 40, quantity: 1 },
    ]);

    // Calculate subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const total = subtotal + 5; // Example: Adding a $5 flat shipping fee

    const removeItem = (id: any) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    return (<>
        <Image src='/cartcover.png' alt=" " width={1440} height={316}></Image>
        <div className="flex flex-col lg:flex-row gap-6 p-4">

            {/* Left Section - Cart Items */}
            <div className="flex-1 bg-white p-4 shadow-md rounded">
                <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
                <div className="grid grid-cols-4 gap-4 font-semibold text-gray-700 border-b pb-2">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Subtotal</div>
                </div>
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-4 gap-4 items-center py-2 border-b"
                    >
                        <div>{item.name}</div>
                        <div>${item.price.toFixed(2)}</div>
                        <div>{item.quantity}</div>
                        <div className="flex justify-between items-center">
                            ${item.price * item.quantity}
                            <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700 ml-2"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Section - Cart Total */}
            <div className="w-full lg:w-1/3 bg-white p-4 shadow-md rounded">
                <h2 className="text-xl font-semibold mb-4">Cart Total</h2>
                <div className="flex justify-between py-2 border-b">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 mt-4 rounded hover:bg-blue-600">
                    Checkout
                </button>
            </div>
        </div>
        <Image src='/achieve.png' alt=" " width={1440} height={270}></Image>
    </>
    );
};

export default CartSection;