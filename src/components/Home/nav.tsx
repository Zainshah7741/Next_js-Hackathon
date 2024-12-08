'use client'
import Image from "next/image";
import React, { useState } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";

const ShoppingCart = () => {
    const [display, setState] = useState(true)
    const items = [
        {
            id: 1,
            name: "Asgaard sofa",
            price: 250000,
            image: "/cartitem.png", // Replace with actual image URL
        },
        {
            id: 2,
            name: "Casaliving Wood",
            price: 270000,
            image: "/cartitem1.png", // Replace with actual image URL
        },
    ];

    const subtotal = items.reduce((total, item) => total + item.price, 0);

    return (
        <div className="flex absolute top-0 right-1">
            {
                display ? <div className="w-[417px] h-[500px] bg-white shadow-lg rounded-md p-6 ">
                    <h1 className="text-lg font-bold mb-4 inline-block">Shopping Cart</h1> <MdRemoveShoppingCart className="inline text-right text-lg absolute right-6 top-5" onClick={() => setState(!display)} />
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between mb-4 border-b pb-4"
                        >
                            <div className="flex items-center gap-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded"
                                    width={105}
                                    height={105}
                                />
                                <div>
                                    <h2 className="text-md font-semibold">{item.name}</h2>
                                    <p className="text-sm text-gray-500">1 x Rs. {item.price.toLocaleString()}</p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-red-600">
                                <span className="text-xl">&times;</span>
                            </button>
                        </div>
                    ))}
                    <div className="flex justify-between items-center mt-4">
                        <span className="text-lg font-semibold">Subtotal</span>
                        <span className="text-lg font-bold text-yellow-600">
                            Rs. {subtotal.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex justify-between gap-2 mt-20">
                        <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-md shadow hover:bg-gray-200">
                            Cart
                        </button>
                        <button className="flex-1 py-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600">
                            Checkout
                        </button>
                        <button className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-md shadow hover:bg-gray-200">
                            Comparison
                        </button>
                    </div>
                </div> : null

            }
        </div>
    );
};

export default ShoppingCart;
