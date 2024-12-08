import React from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'

const font = Poppins({ subsets: ['latin'], weight: '700' })
const semi = Poppins({ subsets: ['latin'], weight: '600' })
const med = Poppins({ subsets: ['latin'], weight: '500' })
const reg = Poppins({ subsets: ['latin'], weight: '400' })
const Products = () => {
    return (
        <div className='mt-14 max-w-[1236px] h-[1084px] m-auto hidden flex-col items-center md:flex'>
            <h1 className={`${font.className} text-lg lg:text-[40px] leading-[120%] text-[#3A3A3A] text-center`}>Our Products</h1>
            <div className='grid grid-cols-3 xl:grid-cols-4  mt-9 gap-8'>
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
                <div className="h-[446px] hover:bg-slate-800">
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
                <div className="h-[446px]">
                    <Image src={'/Images2.png'} alt='' width={285} height={301}></Image>
                    <div className='ml-4 mt-4 flex flex-col gap-2'>
                        <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Grifo</h1>
                        <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Night Lamp</h3>
                        <span className='flex gap-4'>
                            <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 1.500.000</h2>
                        </span>
                    </div>
                </div>
                <div className="h-[446px]">
                    <Image src={'/Images3.png'} alt='' width={285} height={301}></Image>
                    <div className='ml-4 mt-4 flex flex-col gap-2'>
                        <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Muggo</h1>
                        <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Small mug</h3>
                        <span className='flex gap-4'>
                            <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 150.000</h2>
                        </span>
                    </div>
                </div>
                <div className="h-[446px]">
                    <Image src={'/Images4.png'} alt='' width={285} height={301}></Image>
                    <div className='ml-4 mt-4 flex flex-col gap-2'>
                        <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Pingky</h1>
                        <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Cute bed set</h3>
                        <span className='flex gap-4'>
                            <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 7.000.000</h2>
                            <h4 className={`${reg.className} text-base leading-[180%] text-[#B0B0B0] text-right`}><s>Rp 14.000.000</s></h4>
                        </span>
                    </div>
                </div>
                <div className="h-[446px]">
                    <Image src={'/Images5.png'} alt='' width={285} height={301}></Image>
                    <div className='ml-4 mt-4 flex flex-col gap-2'>
                        <h1 className={`${semi.className} text-2xl leading-[120%] text-[#3A3A3A]`}>Potty</h1>
                        <h3 className={`${med.className} text-base leading-[150%] text-[#898989]`}>Minimalist flower pot</h3>
                        <span className='flex gap-4'>
                            <h2 className={`${semi.className} text-xl leading-[150%] text-[#3A3A3A]`}>Rp 500.000</h2>
                        </span>
                    </div>
                </div>

            </div>
            <button className={`${semi.className} mt-5 border py-3 px-[80px] border-[#B88E2F] text-[#B88E2F] text-base leading-[150%]`}>Show More</button>
        </div>
    )
}

export default Products