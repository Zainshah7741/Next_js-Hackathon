import Image from 'next/image'
import { Poppins } from 'next/font/google'
const para = Poppins({ subsets: ['latin'], weight: '400' })
const Hero = () => {
    return (
        <div>
            <Image src='/shop.jpg' alt='' width={1440} height={316} className='mt-5'></Image>
            <div className='xl:max-w-[1440px] hidden h-[100px] xl:flex items-center '>
                <div className='flex xl:ml-24  gap-40 xl:gap-[350px]  '>
                    <div className='flex items-center gap-8 -mt-3 '>
                        <span className='flex gap-4 items-center'>
                            <Image src='/filter.png' alt='' width={19} height={17} className='h-[18px]'></Image>
                            <span className='font-normal text-xl '> Filter</span>
                        </span>
                        <Image src='/Vector.png' alt='' width={17} height={17}></Image>
                        <Image src='/view.png' alt='' width={19} height={19}></Image>
                        <div className={`${para.className} text-base  w-full xl:w-[237px] h-[37px] flex items-center justify-end border-l-2 border-[#9F9F9F]`}>
                            Showing 1–16 of 32 results
                        </div>
                    </div>
                    <div className={`${para.className} flex text-xl items-center justify-end gap-10 -mt-2.5`}>
                        <span>Show</span>
                        <span className='text-[#9F9F9F]'>16</span>
                        <span>Short by</span>
                        <span className='text-[#9F9F9F]'>Default</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero