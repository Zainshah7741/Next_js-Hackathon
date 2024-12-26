import React from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
const semi = Poppins({ subsets: ['latin'], weight: '600' })
const font = Poppins({ subsets: ['latin'], weight: '700' })

const Furnitures = () => {
    return (
        <div className='mt-[66px] m-auto lg:w-[1050px] xl:w-full max-w-[1440px] xl:h-[780px] px-5 lg:px-10 xl:px-0 '>
            <h2 className={`${semi.className} text-lg lg:text-xl leading-[150%] text-[#616162] xl:-ml-[35px] text-center `}>Share your setup with</h2>

            <h1 className={`${font.className} w-full text-3xl lg:text-[40px] leading-[120%] text-[#3A3A3A] sm:-ml-[17px] text-center mt-2`}>#FuniroFurniture</h1>
            <div className='flex flex-wrap md:flex-nowrap items-center xl:items-start justify-center xl:grid mt-2 xl:mt-0  xl:grid-cols-[78px,451px,295px,290px,262px] gap-4'>
                <Image src={'/furniture1.png'} alt='' width={78} height={382} className='hidden xl:block  w-[78px] xl:h-[382px] xl:-mt-[27px]'></Image>
                <Image src={'/furniture2.png'} alt='' width={451} height={312} className='h-40 w-56 lg:h-full  lg:w-full  xl:h-[312px] xl:w-[451px]  xl:mt-[42px]'></Image>
                <Image src={'/furniture3.png'} alt='' width={295} height={392} className='h-52 lg:h-full  w-56 lg:w-full xl:h-[392px] xl:w-[295px]  xl:mt-32 '></Image>
                <Image src={'/furniture4.png'} alt='' width={290} height={348} className='h-52 w-56 lg:w-full lg:h-full   xl:w-[290px] xl:h-[348px]  xl:mt-[72px] '></Image>
                <Image src={'/furniture5.png'} alt='' width={262} height={433} className='h-52 w-56 lg:w-full lg:h-[350px]  xl:h-[433px] xl:w-[262px]  xl:-mt-[13px]'></Image>
            </div>
            <div className='xl:grid justify-center xl:justify-start mt-5 xl:mt-0 hidden md:flex xl:grid-cols-[185px,344px,295px,178px,258px] gap-4'>
                <Image src={'/furniture6.png'} alt='' width={185} height={314} className='xl:-mt-[150px]'></Image>
                <Image src={'/furniture7.png'} alt='' width={344} height={242} className='xl:-mt-[150px] '></Image>
                <span></span>
                <Image src={'/furniture8.png'} alt='' width={178} height={242} className=' xl:-mt-[84px] '></Image>
                <Image src={'/furniture9.png'} alt='' width={258} height={196} className=' xl:-mt-[84px] '></Image>
            </div>
        </div>
    )
}

export default Furnitures