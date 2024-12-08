'use client'
import Image from 'next/image'
import { Montserrat, Poppins } from 'next/font/google'
import Link from 'next/link'
import Nav from './nav'
import { useState } from 'react'
const headingFont = Montserrat({ subsets: ['latin'], weight: "700" })
const navFont = Poppins({ subsets: ['latin'], weight: "500" })

export const Navbar = () => {
    const [display, setState] = useState(false)
    return (
        <nav className={` max-w-[1440px] h-16 xl:h-[100px] flex items-center bg-white`} >
            <div className='w-[93%] m-auto h-[41px] items-center  sm:grid  sm:grid-cols-2 md:grid-cols-3 justify-between xl:pr-[44px] '>
                <div className='col-span-2 sm:flex justify-between'>
                    <div className='flex justify-center'>
                        <Image src='/logo.png' alt='logo' width={1000} height={1000} className='h-6 w-[40px] xl:h-8 xl:w-[50px] mr-1  '></Image>
                        <h1 className={`${headingFont.className} text-lg md:text-xl xl:text-[34px] xl:leading-8`}>Furniro</h1>
                    </div>
                    <ul className={`${navFont.className} flex justify-center text-sm lg:text-base gap-6 lg:gap-11  xl:gap-[68px] pt-1`}>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/shop'>Shop</Link></li>
                        <li><Link href='/blog'>About</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <ul className=' gap-7 xl:gap-[50px] justify-end hidden md:flex'>
                    <li><Link href=''><Image src={'/account.png'} alt='' width={26} height={26} ></Image></Link></li>
                    <li><Link href=''><Image src={'/icons_search.png'} alt='' width={26} height={26}></Image></Link></li>
                    <li><Link href=''><Image src={'/icons_heart.png'} alt='' width={26} height={26}></Image></Link></li>
                    <li ><Link href=''><Image src={'/cart.png'} alt='' width={26} height={26} onClick={() => setState(!display)}></Image></Link></li>
                </ul>
            </div>
            {
                display ? <Nav></Nav> : null}
        </nav>

    )
}


