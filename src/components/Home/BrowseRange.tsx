import React from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
const font = Poppins({ subsets: ['latin'], weight: '700' })
const name = Poppins({ subsets: ['latin'], weight: '600' })
const para = Poppins({ subsets: ['latin'], weight: '400' })
const BrowseRange = () => {
  return (
    <div className=' max-w-[1183px] 2xl:max-w-[1440px] xl:h-[685px] m-auto mt-14 px-5'>
      <div>
        <h1 className={`${font.className} text-center text-2xl 2xl:text-4xl sm:text-[32px]  text-[#333333]`}>Browse The Range</h1>
        <p className={`${para.className} mt-2 text-center text-sm sm:text-xl  text-[#666666] tracking-[0px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='mt-7 md:mt-[60px] grid md:grid-cols-3 gap-5 justify-center'>
        <div className='hidden md:block m-auto'>
          <Image src='/image-1.png' alt='' width={367} height={463} className='max-w-[100%] max-h-[463px]'></Image>
          <h1 className={`${name.className} text-2xl text-[#333333] text-center mt-4 lg:mt-[34px]`}>Dining</h1>
        </div>
        <div className='m-auto'>
          <Image src='/living-room.png' alt='' width={367} height={463} className='max-w-[100%] max-h-[463px]'></Image>
          <h1 className={`${name.className} text-2xl text-[#333333] text-center mt-4 lg:mt-[34px]`}>Living</h1>
        </div>
        <div className='m-auto'>
          <Image src='/image.png' alt='' width={367} height={463} className='max-w-[367px] max-h-[463px]'></Image>
          <h1 className={`${name.className} text-2xl text-[#333333] text-center mt-4 lg:mt-[34px]`}>Bedroom</h1>
        </div>
      </div>
    </div>
  )
}

export default BrowseRange