import React from 'react';
import { Poppins } from 'next/font/google'
import Image from 'next/image'

// const font = Poppins({ subsets: ['latin'], weight: '700' })
const semi = Poppins({ subsets: ['latin'], weight: '600' })
const med = Poppins({ subsets: ['latin'], weight: '500' })
const reg = Poppins({ subsets: ['latin'], weight: '400' })
const ProductSection = () => {
    return (
        <div className='p-8'>
            {/* Section Heading */}
            <div className='text-center mb-8'>
                <h1 className='text-3xl font-semibold'>Related Products</h1>
            </div>

            <div className='grid grid-cols-2 xl:grid-cols-4 gap-4 mt-5 '>
                <div className="h-[446px]">
                    <Image src={'/Images1.png'} alt='' width={285} height={301}></Image>
                    <div className='ml-4 mt-4 flex flex-col gap-2'>
                        <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Syltherine</h1>
                        <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Stylish cafe chair</h3>
                        <span className='flex gap-4'>
                            <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 2.500.000</h2>
                            <h4 className={`${reg.className} text-base leading-[180%] text-[#B0B0B0] text-right`}><s>Rp 3.500.000</s></h4>
                        </span>
                    </div>
                </div>
                <div className="h-[446px] hover:bg-black">
                    <Image src={'/Images6.png'} alt='' width={285} height={301}></Image>
                    <div className='ml-4 mt-4 flex flex-col gap-2'>
                        <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Leviosa</h1>
                        <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Stylish cafe chair</h3>
                        <span className='flex gap-4'>
                            <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 2.500.000</h2>
                        </span>
                    </div>
                </div>
                <div className="h-[446px]">
                    <Image src={'/Images.png'} alt='' width={285} height={301}></Image>
                    <div className='ml-4 mt-4 flex flex-col gap-2'>
                        <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Lolito</h1>
                        <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Luxury big sofa</h3>
                        <span className='flex gap-4'>
                            <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 7.000.000</h2>
                            <h4 className={`${reg.className} text-base leading-[180%] text-[#B0B0B0] text-right`}><s>Rp 14.000.000</s></h4>
                        </span>
                    </div>
                </div>
                <div className="h-[446px]">
                    <Image src={'/image7.png'} alt='' width={285} height={301} ></Image>
                    <div className='ml-4 mt-4 flex flex-col gap-2'>
                        <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Respira</h1>
                        <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Outdoor bar table and stool</h3>
                        <span className='flex gap-4'>
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