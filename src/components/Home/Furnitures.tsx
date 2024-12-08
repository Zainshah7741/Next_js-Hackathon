import React from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
const semi = Poppins({ subsets: ['latin'], weight: '600' })
const font = Poppins({ subsets: ['latin'], weight: '700' })

const Furnitures = () => {
    return (
        <div className='mt-[66px] max-w-[1440px] h-[780px] hidden xl:block'>
            <h2 className={`${semi.className} text-xl leading-[150%] text-[#616162] -ml-[35px] text-center `}>Share your setup with</h2>

            <h1 className={`${font.className} w-full text-[40px] leading-[120%] text-[#3A3A3A] -ml-[17px] text-center mt-2`}>#FuniroFurniture</h1>
            <div className='grid grid-cols-[78px,451px,295px,290px,262px] gap-4'>
                <Image src={'/furniture1.png'} alt='' width={78} height={382} className=' w-[78px] h-[382px] -mt-[27px]'></Image>
                <Image src={'/furniture2.png'} alt='' width={451} height={312} className=' mt-[42px]'></Image>
                <Image src={'/furniture3.png'} alt='' width={295} height={392} className='  mt-32 '></Image>
                <Image src={'/furniture4.png'} alt='' width={290} height={348} className=' mt-[72px] '></Image>
                <Image src={'/furniture5.png'} alt='' width={262} height={433} className=' -mt-[13px]'></Image>
            </div>
            <div className='grid grid-cols-[185px,344px,295px,178px,258px] gap-4'>
                <Image src={'/furniture6.png'} alt='' width={185} height={314} className='-mt-[150px]'></Image>
                <Image src={'/furniture7.png'} alt='' width={344} height={242} className='-mt-[150px] '></Image>
                <span></span>
                <Image src={'/furniture8.png'} alt='' width={178} height={242} className=' -mt-[84px] '></Image>
                <Image src={'/furniture9.png'} alt='' width={258} height={196} className=' -mt-[84px] '></Image>
            </div>
        </div>
    )
}

export default Furnitures