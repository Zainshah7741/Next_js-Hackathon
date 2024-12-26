import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
const newAriv = Poppins({ subsets: ['latin'], weight: "700" })
const para = Poppins({ subsets: ['latin'], weight: "500" })

const HeroSec = () => {
    return (
        <div className='hero lg:h-[500px] max-w-[1440px] m-auto xl:h-[718px] text-black  flex justify-end  md:items-center'>
            <div className=' bg-white w-[643px] xl:h-[443px]  xl:mr-16 flex xl:mt-9 sm:pl-2  justify-center '>
                <div className='w-full xl:w-[561px] flex flex-col items-center sm:p-3 xl:p-0 sm:items-start justify-center sm:mt-4'>
                    <h3 className={`${newAriv.className} text-base tracking-[3px] text-[#333333] leading-[50px]`}>New Arrival</h3>
                    <h1 className={`${newAriv.className} text-[2rem] sm:text-[52px]  text-[#B88E2F] sm:leading-[50px]`}>Discover Our</h1>
                    <h1 className={`${newAriv.className} text-[2.2rem] tracking-wider sm:tracking-normal sm:text-[52px] text-[#B88E2F]`}>New Collection</h1>
                    <p className={`${para.className} px-2 lg:px-0 text-center text-base max-w-96 sm:max-w-full tracking-wider sm:w-full sm:text-left    lg:text-lg  text-[#333333] leading-5 sm:leading-7 pt-2 sm:pt-1 pl-1`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                   <Link href={'/shop'}> <button className={`${newAriv.className} xl:text-base lg:self-start bg-[#B88E2F] py-3 xl:py-[25px] px-10 xl:px-[72px] text-white mt-[50px]`}>BUY NOW</button></Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSec

