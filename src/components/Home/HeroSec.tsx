import React from 'react'
import { Poppins } from 'next/font/google'
const newAriv = Poppins({ subsets: ['latin'], weight: "700" })
const para = Poppins({ subsets: ['latin'], weight: "500" })

const HeroSec = () => {
    return (
        <div className='hero h-full lg:h-[718px] text-black flex justify-end md:items-center'>
            <div className=' bg-white max-w-[643px] lg:h-[443px] xl:mr-[58px]  flex mt-10  justify-center '>
                <div className='w-full xl:w-[561px] flex flex-col items-center p-4 xl:p-0 md:items-start justify-center mt-4'>
                    <h3 className={`${newAriv.className} :text-base tracking-[3px] text-[#333333] leading-[50px]`}>New Arrival</h3>
                    <h1 className={`${newAriv.className} text-[52px]  text-[#B88E2F] leading-[50px]`}>Discover Our</h1>
                    <h1 className={`${newAriv.className} text-[52px]  text-[#B88E2F]`}>New Collection</h1>
                    <p className={`${para.className} text-lg  text-[#333333] leading-6 pt-1`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <button className={`${newAriv.className} xl:text-base lg:self-start bg-[#B88E2F] py-3 lg:py-[25px] px-10 lg:px-[72px] text-white mt-[50px]`}>BUY NOW</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSec