import React from 'react';
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdShare } from "react-icons/io";
import { TbArrowsRightLeft } from "react-icons/tb";
import { IoMdHeartEmpty } from "react-icons/io";

const semi = Poppins({ subsets: ['latin'], weight: '600' })
const med = Poppins({ subsets: ['latin'], weight: '500' })
const reg = Poppins({ subsets: ['latin'], weight: '400' })
const ProductSection = () => {
    return (
        <div className='p-8'>
            <div className='text-center mb-8'>
                <h1 className='text-4xl font-semibold tracking-wider'>Related Products</h1>
            </div>


            <div className='grid sm:grid-cols-2 lg:grid-cols-4  justify-center  mt-9 gap-8 max-w-[1236px] m-auto'>
                <div className="box h-[446px] w-[285px] relative overflow-hidden">
                    <span className='bg-red-400 absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>-30%</span>
                    <div className='bg_hover absolute h-full w-full'></div>
                    <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
                        <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
                        <div className='flex text-base font-semibold gap-6 tracking-wide'>
                            <h2><IoMdShare className='inline leading-10' /> Share</h2>
                            <Link href={'/comparison'}><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
                            <h2><IoMdHeartEmpty className='inline' />  Like</h2>
                        </div>
                    </div>
                    <Image src={'/Images1.png'} alt='' width={285} height={301}></Image>
                    <div className='ml-4 mt-4 flex flex-col gap-2'>
                        <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Syltherine</h1>
                        <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Stylish cafe chair</h3>
                        <span className='flex gap-5'>
                            <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 2.500.000</h2>
                            <h4 className={`${reg.className} text-base leading-[180%] text-[#B0B0B0] text-right`}><s>Rp 3.500.000</s></h4>
                        </span>
                    </div>
                </div>
                <div className="box h-[446px] w-[285px] relative overflow-hidden">
                    <span className='bg-[#2ec1ac] absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>New</span>
                    <div className='bg_hover absolute h-full w-full'></div>
                    <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
                        <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
                        <div className='flex text-lg font-semibold gap-4 tracking-wide  '>
                            <h2><IoMdShare className='inline leading-10' /> Share</h2>
                            <Link href={'/comparison'}><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
                            <h2><IoMdHeartEmpty className='inline' /> Like</h2>
                        </div>
                    </div>
                    <Image src={'/Images6.png'} alt='' width={285} height={301}></Image>
                    <div className='ml-4 mt-4 flex flex-col gap-2'>
                        <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Leviosa</h1>
                        <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Stylish cafe chair</h3>
                        <span className='flex gap-5'>
                            <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 2.500.000</h2>
                        </span>
                    </div>
                </div>
                <div className="box h-[446px] w-[285px] relative overflow-hidden">
                    <span className='bg-red-400 absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>-50%</span>
                    <div className='bg_hover absolute h-full w-full'></div>
                    <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
                        <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
                        <div className='flex text-base font-semibold gap-6 tracking-wide'>
                            <h2><IoMdShare className='inline leading-10' /> Share</h2>
                            <Link href={'/comparison'}><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
                            <h2><IoMdHeartEmpty className='inline' />  Like</h2>
                        </div>
                    </div>
                    <Image src={'/Images.png'} alt='' width={285} height={301}></Image>
                    <div className='ml-4 mt-4 flex flex-col gap-2'>
                        <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Lolito</h1>
                        <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Luxury big sofa</h3>
                        <span className='flex gap-5'>
                            <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 7.000.000</h2>
                            <h4 className={`${reg.className} text-base leading-[180%] text-[#B0B0B0] text-right`}><s>Rp 14.000.000</s></h4>
                        </span>
                    </div>
                </div>
                <div className="box h-[446px] w-[285px] relative overflow-hidden">
                    <span className='bg-[#2ec1ac] absolute right-6  top-6 w-12 flex items-center justify-center text-white h-12 text-base pl-1 tracking-wide font-semibold rounded-full'>New</span>
                    <div className='bg_hover absolute h-full w-full'></div>
                    <div className='child absolute h-full w-full opacity-0 text-white flex flex-col items-center justify-center gap-5'>
                        <Link href='/cart'><button className={`${semi.className}  border py-3 px-14 bg-white text-[#B88E2F] text-base leading-[150%]`}>Add to cart</button></Link>
                        <div className='flex text-base font-semibold gap-6 tracking-wide'>
                            <h2><IoMdShare className='inline leading-10' /> Share</h2>
                            <Link href={'/comparison'}><h2><TbArrowsRightLeft className='inline' /> Compare</h2></Link>
                            <h2><IoMdHeartEmpty className='inline' />  Like</h2>
                        </div>
                    </div>
                    <Image src={'/image7.png'} alt='' width={285} height={301} ></Image>
                    <div className='ml-4 mt-4 flex flex-col gap-2'>
                        <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Respira</h1>
                        <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Outdoor bar table and stool</h3>
                        <span className='flex gap-5'>
                            <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 500.000</h2>
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <button className={`${semi.className} mt-10 border py-3 px-[80px]  border-[#B88E2F] text-[#B88E2F] text-base leading-[150%]`}>Show More</button>
            </div>
        </div>
    );
};

export default ProductSection;