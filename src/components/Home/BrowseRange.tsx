import React from 'react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
const font = Poppins({ subsets: ['latin'], weight: '700' })
const name = Poppins({ subsets: ['latin'], weight: '600' })
const para = Poppins({ subsets: ['latin'], weight: '400' })
const BrowseRange = () => {
  return (
    <div className='max-w-[1183px] xl:h-[685px] m-auto mt-14'>
      <div>
        <h1 className={`${font.className} text-center text-[32px]  text-[#333333]`}>Browse The Range</h1>
        <p className={`${para.className} text-center text-xl  text-[#666666] tracking-[0px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='mt-[60px] grid md:grid-cols-3 gap-5 justify-center'>
        <div className='hidden md:block'>
          <Image src='/image-1.png' alt='' width={381} height={480}></Image>
          <h1 className={`${name.className} text-2xl text-[#333333] text-center mt-4 lg:mt-[34px]`}>Dining</h1>
        </div>
        <div>
          <Image src='/living-room.png' alt='' width={381} height={480}></Image>
          <h1 className={`${name.className} text-2xl text-[#333333] text-center mt-4 lg:mt-[34px]`}>Living</h1>
        </div>
        <div>
          <Image src='/image.png' alt='' width={381} height={480}></Image>
          <h1 className={`${name.className} text-2xl text-[#333333] text-center mt-4 lg:mt-[34px]`}>Bedroom</h1>
        </div>
      </div>
    </div>
  )
}

export default BrowseRange