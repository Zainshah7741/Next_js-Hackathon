import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
const font = Poppins({ subsets: ['latin'], weight: '700' })
const med = Poppins({ subsets: ['latin'], weight: '500' })
const reg = Poppins({ subsets: ['latin'], weight: '400' })

const Footer = () => {
    return (
        <>
            <footer className='xl:mt-[49px] mt-7 max-w-[1440px] xl:h-[400px] border-t-2 border-[#D9D9D9] flex justify-center items-center md:px-5'>
                <div className='  px-2 lg:px-0  mt-2 grid gap-16   sm:grid-cols-2 lg:grid-cols-3 pt-1.5 md:gap-7 lg:gap-20'>
                    <div className='flex flex-col gap-8 xl:gap-[50px] sm:w-80'>
                        <h2 className={`${font.className} text-2xl text-black`}>Funiro.</h2>
                        <p className={`${reg.className} text-xs md:text-sm  xl:text-base text-[#9F9F9F] pl-1`}>400 University Drive Suite 200 Coral Gables,
                            <br />FL 33134 USA</p>

                    </div>
                    <div className='flex gap-12 xl:gap-36 text-xs md:text-sm  xl:text-base'>
                        <ul className={`${med.className} flex flex-col gap-2 md:gap-5 xl:gap-[47px] `}>
                            <li className='text-[#9F9F9F]'>Links</li>
                            <li><Link href='/' className=''>Home</Link></li>
                            <li><Link href='/shop'>Shop</Link></li>
                            <li><Link href='/blog'>About</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>
                        </ul>

                        <ul className={`${med.className} flex flex-col gap-2 md:gap-5 xl:gap-[47px]`}>
                            <li className='text-[#9F9F9F]'>Help</li>
                            <li><Link href='/checkout'>Payment Options</Link></li>
                            <li><Link href=''>Returns</Link></li>
                            <li><Link href=''>Privacy Policies</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={` flex flex-col gap-[47px]`}>
                            <li className={`${med.className} text-[#9F9F9F]`}>Newsletters</li>
                            <li><input type="text" placeholder='Enter Your Email Address' className='text-sm lg:text-base pb-1 border-b pr-3 border-black mr-1' /> <span className={`${med.className} pb-1 border-b border-black`}>SUBSCRIBE</span></li>
                        </ul>
                    </div>

                </div>

            </footer>
            <div className='max-w-[1250px] mt-6 m-auto  text-sm md:text-base lg:pl-16 xl:text-lg pl-2 xl:pl-2 h-14 xl:h-20 flex justify-center lg:justify-start items-center border-t-2 border-[#D9D9D9] font-medium'>
                <p>
                    2023 furino. All rights reverved
                </p>
            </div>
        </>
    )
}

export default Footer