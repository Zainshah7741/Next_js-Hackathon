import React from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
const semi = Poppins({ subsets: ['latin'], weight: '600' })
const font = Poppins({ subsets: ['latin'], weight: '700' })
const med = Poppins({ subsets: ['latin'], weight: '500' })

const Rooms = () => {
    return (
        <div className='mt-[60px] max-w-[1440px] px-2 md:px-0 xl:h-[670px] pt-11 m-auto'>
            <div className='flex flex-col sm:flex-row items-center justify-center w-full m-auto gap-5 xl:gap-[50px]'>
                <div className="xl:pl-[100px] pl-5 w-fit xl:m-auto">
                    <h1 className={`${font.className} xl:text-nowrap text-3xl md:text-[40px] leading-[120%] text-[#3A3A3A]`}>50+ Beautiful rooms <br />inspiration</h1>
                    <p className={`${med.className} text-sm md:text-base leading-[150%] text-[#616161] mt-2`}>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
                    <Link href='/shop'> <button className={`${semi.className} text-base leading-[150%] bg-[#B88E2F] py-3 px-9 mt-6 text-white`}>Explore More</button></Link>
                </div>
                <div className='gap-6 xl:w-full flex'>
                    <div className='bg-[url(/Rectangle1.png)] xl:h-[582px] xl:w-[404px] xl:flex items-end hidden'>
                        <div className='w-[217px] h-[130px] bg-white flex flex-col justify-center pl-8 ml-6 mb-6'>
                            <span className={`${med.className} flex items-center text-base leading-[150%] text-[#616161] gap-2`}> <h1>01</h1><span className='h-[1px] w-[27px] bg-[#616161]'></span>Bed Room<span></span></span>
                            <h1 className={`${semi.className} text-[28px] mt-2  leading-[120%] text-[#3A3A3A]`}>Inner Peace</h1>
                        </div>
                        <div className='mb-6 bg-[#B88E2F] w-12 h-12 flex items-center justify-center cursor-pointer'>
                            <Image src={'/arrow1.png'} alt='' width={24} height={24}></Image>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[url(/Rectangle.png)] h-[486px] w-[300px] xl:w-[372px] flex items-center justify-end'>
                            <Image src={'/arrow.png'} alt='' width={78} height={78} className='lg:-mr-[36px] -mb-[103px]'></Image>

                        </div>
                        <Image src={'/Indicator.png'} alt='' width={120} height={27} className='mt-10'></Image>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Rooms