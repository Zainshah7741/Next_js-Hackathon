'use client'
import Image from 'next/image'
import { Montserrat, Poppins } from 'next/font/google'
import Link from 'next/link'
import { HiMenu } from "react-icons/hi";
import Nav from './nav'
import { useState } from 'react'
const headingFont = Montserrat({ subsets: ['latin'], weight: "700" })
const navFont = Poppins({ subsets: ['latin'], weight: "500" })

export const Navbar = () => {
    const [display, setState] = useState(false)
    const [list, setList] = useState(false)
    return (
        <nav className={`sticky top-0 max-w-[1440px] m-auto h-16 md:h-20 xl:h-[100px] flex items-center z-10 bg-white`} >
            <div className='w-[93%] m-auto h-[41px] flex items-center  sm:grid  sm:grid-cols-3 justify-between xl:pr-[44px] '>
                <div className='col-span-2 flex justify-between'>
                    <div className='flex justify-center items-center'>
                        <Image src='/logo.png' alt='logo' width={1000} height={1000} className='h-6 w-[40px] lg:h-8 lg:w-[50px] mr-1  '></Image>
                        <h1 className={`${headingFont.className} tracking-wide text-xl md:text-2xl lg:text-[34px] xl:leading-8`}>Furniro</h1>
                    </div>
                    <ul className={`${navFont.className} hidden sm:flex justify-center text-sm  lg:text-base gap-6 lg:gap-11  xl:gap-[68px] pt-1`}>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/shop'>Shop</Link></li>
                        <li><Link href='/blog'>About</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>

                </div>
                <ul className='gap-3 sm:gap-7 xl:gap-[50px] justify-end flex'>
                    <li><Link href=''><Image src={'/account.png'} alt='' width={26} height={26} ></Image></Link></li>
                    <li className='hidden sm:block'><Link href=''><Image src={'/icons_search.png'} alt='' width={26} height={26}></Image></Link></li>
                    <li className='hidden sm:block'><Link href=''><Image src={'/icons_heart.png'} alt='' width={26} height={26}></Image></Link></li>
                    <li ><Link href=''><Image src={'/cart.png'} alt='' width={26} height={26} onClick={() => setState(!display)}></Image></Link></li>
                    <HiMenu className='sm:hidden text-2xl' onClick={() => setList(!list)}></HiMenu>
                </ul>
            </div>
            {
                display ? <Nav></Nav> : null}
            {
                list &&
                <div className='absolute top-16 left-0 w-full bg-white -z-10 py-10'>
                    <div>
                        <ul className={`${navFont.className} flex flex-col justify-center items-center text-base gap-6 `}>
                            <li><Link href='/'>Home</Link></li>
                            <li><Link href='/shop'>Shop</Link></li>
                            <li><Link href='/blog'>About</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            }
        </nav>

    )
}


