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
            image: "/cartitem1.png", // Replace with actual image URL
        },
        {
            id: 2,
            name: "Casaliving Wood",
            price: 270000,
            image: "/cartitem.png", // Replace with actual image URL
        },
    ];

    const subtotal = items.reduce((total, item) => total + item.price, 0);

    return (
        <div className="flex absolute top-0 -right-2 sm:right-1">
            {
                display ? <div className="w-[100%] sm:w-[417px] h-[746px] bg-white shadow-lg rounded-md p-6 ">
                    <h1 className="text-2xl font-bold mb-4 inline-block">Shopping Cart</h1> <MdRemoveShoppingCart className="inline text-right text-xl absolute right-6 top-8 cursor-pointer" onClick={() => setState(!display)} />
                    <div className="mt-16">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between  border-b pb-4"
                            >
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        className=" object-cover rounded"
                                        width={108}
                                        height={105}
                                    />
                                    <div className="flex flex-col gap-3">
                                        <h2 className="text-md tracking-wide font-semibold">{item.name}</h2>
                                        <p className="text-sm text-gray-600 ">1 x Rs. {item.price.toLocaleString()}</p>
                                    </div>
                                </div>
                                <button className="text-black  hover:text-red-600 ">
                                    <span className="text-3xl ">&times;</span>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-28">
                        <span className="text-lg font-semibold">Subtotal</span>
                        <span className="text-lg font-bold text-yellow-600">
                            Rs. {subtotal.toLocaleString()}
                        </span>
                    </div>
                    <div className="flex justify-between gap-2 mt-5">
                        <button className="flex-1 py-2 bg-gray-100 text-gray-700 border border-black rounded-md shadow hover:bg-gray-200">
                            Cart
                        </button>
                        <button className="flex-1 py-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600">
                            Checkout
                        </button>
                        <button className="flex-1 py-2 border border-black bg-gray-100 text-gray-700 rounded-md shadow hover:bg-gray-200">
                            Comparison
                        </button>
                    </div>
                </div> : null

            }
        </div>
    );
};

export default ShoppingCart;
