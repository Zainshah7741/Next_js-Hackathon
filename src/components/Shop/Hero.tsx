import Image from 'next/image'
import { Poppins } from 'next/font/google'
const para = Poppins({ subsets: ['latin'], weight: '400' })
const Hero = () => {
    return (
        <div>
            <Image src='/shop.jpg' alt='' width={1440} height={316} className='xl:mt-5'></Image>
            <div className='xl:max-w-[1440px]  h-[100px] flex items-center justify-center xl:justify-start'>
                <div className='flex flex-wrap justify-center sm:justify-start xl:ml-24 gap-2 sm:gap-7 md:gap-14  lg:gap-32 xl:gap-[350px]  '>
                    <div className='flex items-center flex-wrap md:justify-start gap-2 justify-center sm:gap-6 md:gap-8 xl:-mt-3 m-auto '>
                        <span className='flex gap-2  md:gap-4 justify-center items-center'>
                            <Image src='/filter.png' alt='' width={19} height={17} className='h-[18px]'></Image>
                            <span className='font-normal text-xl '> Filter</span>
                        </span>
                        <Image src='/Vector.png' alt='' width={17} height={17}></Image>
                        <Image src='/view.png' alt='' width={19} height={19}></Image>
                        <div className={`${para.className} text-base pl-5 xl:pl-0 xl:w-[237px] h-[37px] flex items-center justify-end sm:border-l-2 border-[#9F9F9F]`}>
                            Showing 1–16 of 32 results
                        </div>
                    </div>
                    <div className={`${para.className} flex text-base lg:text-xl items-center justify-end gap-5 lg:gap-10 -mt-2.5`}>
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