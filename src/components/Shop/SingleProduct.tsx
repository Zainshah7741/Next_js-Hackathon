import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function ProductCard() {
    return (
        <div className="max-w-[1440px] mx-auto p-6 bg-white">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Left Side: Image */}
                <div className="flex flex-col">
                    <div className="bg-gray-100 p-1 lg:p-6 flex items-center justify-center">
                        <Image
                            src="/sofa.png"
                            alt="Asgaard Sofa"
                            className="md:w-full "
                            width={553}
                            height={500}
                        />
                    </div>

                </div>

                {/* Right Side: Details */}
                <div>
                    <h1 className="text-[42px] tracking-wider font-medium mt-5">Asgaard Sofa</h1>
                    <p className="text-2xl tracking-wider text-gray-600">Rs. 250,000.00</p>
                    <div className="flex space-y-4">
                        <span className="text-yellow-500 text-3xl mt-2">★★★★</span>
                        <span className="text-base text-gray-500 mt-2 border-l border-black ml-4 pl-4">5 Customer Review</span>
                    </div>
                    <p className=" max-w-[410px] text-sm mt-2">
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.


                    </p>

                    {/* Sizes */}
                    <div>
                        <h2 className="text-sm font-medium text-gray-500 mt-6">Size</h2>
                        <div className="flex gap-5">
                            <button className="px-4 bg-yellow-500 py-2 border border-gray-300 rounded hover:bg-gray-100">L</button>
                            <button className=" py-2 border border-gray-300 rounded hover:bg-gray-100">XL</button>
                            <button className="py-2 border border-gray-300 rounded hover:bg-gray-100">XS</button>
                        </div>
                    </div>

                    {/* Colors */}
                    <div className="mt-5">
                        <h2 className="text-sm text-gray-500 font-medium">Color</h2>
                        <div className="flex space-x-4">
                            <div className="w-8 h-8  bg-[#816DFA] rounded-full border cursor-pointer hover:border-gray-500"></div>
                            <div className="w-8 h-8 bg-black rounded-full border cursor-pointer hover:border-gray-500"></div>
                            <div className="w-8 h-8 bg-yellow-500 rounded-full border cursor-pointer hover:border-gray-500"></div>
                        </div>
                    </div>

                    {/* Quantity and Buttons */}
                    <div className="flex items-center my-10">
                        <div className="flex items-center border border-gray-900 rounded-lg px-4 md:py-2 mr-4">
                            <button className="px-3 py-2 hover:bg-gray-200">-</button>
                            <span className="px-2">1</span>
                            <button className="px-3 py-2 hover:bg-gray-200">+</button>
                        </div>
                        <button className="px-2 sm:px-14 py-2 sm:py-3.5 border border-gray-900 text-black rounded-lg hover:bg-gray-800 text-sm md:text-xl ">
                            Add To Cart
                        </button>
                        <button className="ml-3.5 px-4 py-1.5 md:px-14 md:py-3.5 border border-gray-900 text-black rounded-lg hover:bg-gray-800 text-xl">
                            Compare
                        </button>
                    </div>

                    {/* Additional Details */}
                    <div className="text-base text-gray-600 mt-24">
                        <p>SKU &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; SS001</p>
                        <p>Category &nbsp;&nbsp;: &nbsp;&nbsp;Sofas</p>
                        <p>Tags&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;&nbsp;Sofa, Chair, Home, Shop</p>
                    </div>

                    {/* Share */}

                    <div className="flex space-x-4 mt-4 ">
                        <span>Share&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;:</span>
                        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                            <FaFacebook />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                            <FaLinkedin />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                            <AiFillTwitterCircle />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
