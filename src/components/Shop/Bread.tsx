import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const Bread = () => {
  return (
    <div className="bg-[#f8f1e9] w-full max-w-[1440px] h-[100px] mx-auto flex items-center px-4 sm:px-8 lg:px-24">
      <nav className="text-gray-600 text-lg">
        <ul className=" flex justify-center items-center gap-4 mt-6">
          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Home</Link>
          </li>

          <span className="mx-2 text-black"><IoIosArrowForward /></span>

          <li>
            <Link href="#" className="text-gray-600 hover:text-gray-900">Shop</Link>
          </li>

          <span className="mx-2 text-black"><IoIosArrowForward /></span>

          <li className="text-gray-900 border-l-2 border-gray-400 pl-5 p-1">Asgaard sofa</li>
        </ul>
      </nav>
    </div>
  );
};

export default Bread 