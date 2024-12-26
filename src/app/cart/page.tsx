import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
    return (
        <div className="bg-white">
            <div className="relative w-full ">
                <Image
                    src="/cartcover.png"
                    alt="Shop Banner"
                    height={400}
                    width={1500}
                />
            </div>
            <div className='py-3 md:py-7 xl:w-[83%] lg:w-[90%] m-auto overflow-x-scroll px-3 flex-col md:flex-row flex items-center sm:items-end md:items-start md:justify-between gap-5 '>
                <div className='xl:w-[70%] w-full lg:mt-10'>
                    <div className='grid grid-cols-4 text-sm sm:text-base xl:text-lg py-3 font-medium bg-[#FFF9E5]'>
                        <h3 className='text-right'>Product</h3>
                        <h3 className="text-center">Price</h3>
                        <h3 className="text-center">Quantity</h3>
                        <h3 className="col-span">Subtotal</h3>
                      
                    </div>
                    <div className='grid grid-cols-4 mt-6 lg:mt-10 xl:mt-20 text-[8px] sm:text-xs xl:text-base items-center'>
                        <div className='flex items-center'>
                            <Image className='bg-[#FBEBB5] rounded-lg max-w-[100px] w-10 h-10 md:w-16 md:h-16 lg:w-28 lg:h-16'
                                src="/asgaardsofa.png"
                                alt="Image"
                                width={100}
                                height={70}
                            />
                            <h2 className=" text-[#9F9F9F]">Asgaard Sofa</h2>
                        </div>
                        <p className=" text-[#9F9F9F] text-center ">Rs. 250,000.00</p>
                        <input
                                type="number"
                                className="w-8 h-8 border-2 border-gray-300 rounded-md m-auto text-center cursor-pointer"
                                min="1"
                                defaultValue="1"
                            />
                        <div className="flex gap-2 sm:gap-9 ">
                            <p className="">Rs.250,000.00</p>
                            <p><AiFillDelete className='text-[#ce7323] flex text-right text-2xl'></AiFillDelete></p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFF9E5] space-y-5 md:space-y-7  lg:mt-10  border-2 border-[#FFF9E5] w-44 sm:w-fit ">
                            <h2 className="text-base sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4  text-center md:pb-10">Cart Totals</h2>
                            <div className="flex justify-between items-center gap-5 text-[#000000] xl:px-10">
                                <p className='text-xs md:text-base xl:text-lg'>Subtotal</p>
                                <p className="text-xs md:text-base xl:text-lg text-[#9F9F9F]">Rs. 250,000.00</p>
                            </div>
                            <div className="flex justify-between items-center gap-5 text-xs md:text-base xl:text-lg font-semibold text-[#000000]  xl:px-10">
                                <p>Total</p>
                                <p className='text-base md:text-xl xl:text-2xl text-[#B88E2F]'>Rs. 250,000.00</p>
                            </div>
                            <div className='m-auto w-fit'>
                                <Link href="/checkout"> <button className=" border-[#000000] border-[1px] text-[#000000] py-1 px-7 text-base md:py-3 md:px-16 rounded-md sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FFF9E5] focus:ring-offset-2 sm:text-xl">
                                    Checkout
                                </button></Link>
                            </div>
                        </div>
            </div>
        </div>
    );
};

export default Cart;