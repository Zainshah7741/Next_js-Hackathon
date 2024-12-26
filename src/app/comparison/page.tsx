import Image from "next/image"
import Link from "next/link";


export default function ProductComparison() {
  return (
    <>
      <div><Image src={'/comparison.png'} alt="" width={1440} height={316}></Image></div>
      <div className="lg:w-[87%] m-auto mt-2 md:mt-10 px-3 overflow-x-scroll ">
        <div className="min-w-[620px]">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            <div className=" flex flex-col gap-3 xl:gap-5">
              <h1 className="font-semibold text-xl xl:text-3xl ">Go to Product page for more
                Products</h1>

              <Link href='/shop' className=" text-sm md:text-lg xl:text-xl font-medium text-gray-500 underline underline-offset-8">View More </Link>
            </div>
            <div>
              <Image src='/asgaardsofa.png' alt="" width={250} height={140} className="w-48 h-32 xl:w-[250px] xl:h-[140px]"></Image>
              <h2 className="text-xl xl:text-2xl font-semibold tracking-wider mt-7">Asgaard Sofa</h2>
              <p className="font-medium text-base xl:text-lg tracking-wide mt-1">Rs. 250,000.00</p>
              <p className="text-lg xl:text-xl font-semibold">4.7 <span className="text-sm lg:text-lg xl:text-2xl text-yellow-400"> ★ ★ ★ ★ ★</span> <span className=" text-gray-400 text-2xl xl:text-3xl font-thin">|</span> <span className="text-gray-400 text-xs ">204 Review</span></p>
            </div>
            <div className="">
              <Image src='/outdoor.png' alt="" width={270} height={140} className="xl:-mt-12 -mt-5 w-48   xl:w-[270px] "></Image>
              <h2 className="text-xl xl:text-2xl font-semibold tracking-wider  mt-8 xl:mt-3.5 ">Outdoor Sofa Set</h2>
              <p className="font-medium text-base xl:text-lg tracking-wide mt-1">Rs. 224,000.00</p>
              <p className="text-lg xl:text-xl font-semibold">4.2 <span className="text-sm lg:text-lg xl:text-2xl text-yellow-400"> ★ ★ ★ ★ ★</span> <span className=" text-gray-400 text-2xl xl:text-3xl font-thin">|</span> <span className="text-gray-400 text-xs ">145 Review</span></p>
            </div>
            <div className="px-1 lg:pl-9 md:pt-8 space-y-2 ">
              <h2 className="md:text-xl lg:text-2xl font-bold tracking-wider">Add A Project</h2>
             <Link href={'/shop'}> <button className="w-[85%] bg-[#B88E2F] text-white md:text-left rounded-md lg:px-4 font-semibold py-2.5 text-xs md:pl-2 lg:text-sm lg:ml-1 mt-1">Choose a Product</button></Link>
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 mt-10 xl:mt-24">
            <h1 className="col-span-full md:text-xl lg:text-2xl xl:text-3xl font-semibold">General</h1>
            <ul className="space-y-5 xl:space-y-8 tracking-wider text-sm lg:text-lg xl:text-xl  mt-7 ">
              <li>Sales Package</li>
              <li>Model Number</li>
              <li>Secondary Material</li>
              <li>Configuration</li>
              <li>Upholstery Material</li>
              <li>Upholstery Color</li>
            </ul>
            <ul className="space-y-5 xl:space-y-8 tracking-wider text-sm lg:text-lg xl:text-xl   mt-7  ">
              <li>1 sectional sofa</li>
              <li>TFCBLIGRBL6SRHS</li>
              <li>Solid Wood</li>
              <li>L-Shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
            <ul className="space-y-5 xl:space-y-8 tracking-wider text-sm lg:text-lg xl:text-xl  mt-7 ">
              <li>1 Three Seater, 2 Single Seater</li>
              <li>DTUBLIGRBL568</li>
              <li>Solid Wood</li>
              <li>L-Shaped</li>
              <li>Fabric + Cotton</li>
              <li>Bright Grey & Lion</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 mt-10 xl:mt-24">
            <h1 className="col-span-full md:text-xl lg:text-2xl xl:text-3xl font-semibold">Product</h1>
            <ul className="space-y-5 xl:space-y-8 tracking-wider text-sm lg:text-lg xl:text-xl  mt-7 ">
              <li>Filing Material</li>
              <li>Finish Type</li>
              <li>Adjustable Headrest</li>
              <li>Maximun Load Capacity</li>
              <li>Origin of Manufacture</li>
            </ul>
            <ul className="space-y-5 xl:space-y-8 tracking-wider text-sm lg:text-lg xl:text-xl  mt-7  ">
              <li>Foam</li>
              <li>Bright Grey & Lion</li>
              <li>No</li>
              <li>280 KG</li>
              <li>India</li>
            </ul>
            <ul className="space-y-5 xl:space-y-8 tracking-wider text-sm lg:text-lg xl:text-xl  mt-7 ">
              <li>Matte</li>
              <li>Bright Grey & Lion</li>
              <li>Yes</li>
              <li>300 KG</li>
              <li>India</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 mt-10 xl:mt-24">
            <h1 className="col-span-full md:text-xl lg:text-2xl xl:text-3xl font-semibold">Dimensions</h1>
            <ul className="space-y-5 xl:space-y-8 tracking-wider text-sm lg:text-lg xl:text-xl   mt-7  ">
              <li>Width</li>
              <li>Height</li>
              <li>Depth</li>
              <li>Weight</li>
              <li>Seat Height</li>
              <li>Leg Height</li>
            </ul>
            <ul className="space-y-5 xl:space-y-8 tracking-wider text-sm lg:text-lg xl:text-xl  mt-7 ">
              <li>265.32 cm</li>
              <li>76 cm</li>
              <li>167.76 cm</li>
              <li>45 KG</li>
              <li>41.52 cm</li>
              <li>5.46 cm</li>
            </ul>
            <ul className="space-y-5 xl:space-y-8 tracking-wider text-sm lg:text-lg xl:text-xl  mt-7 ">
              <li>265.32 cm</li>
              <li>76 cm</li>
              <li>167.76 cm</li>
              <li>65 KG</li>
              <li>41.52 cm</li>
              <li>5.46 cm</li>
            </ul>
          </div>
          <div className=" mt-10 xl:mt-24">
            <h1 className="col-span-full md:text-xl lg:text-2xl xl:text-3xl font-semibold">Warranty</h1>
            <ul className="grid grid-cols-3 md:grid-cols-4 gap-5  tracking-wider text-sm lg:text-lg xl:text-xl   mt-7 ">
              <li>Warranty Summary</li>
              <li>1 Year Manufacturing Warranty</li>
              <li>1.2 Year Manufacturing Warranty</li>
            </ul>
            <ul className="grid grid-cols-3 md:grid-cols-4 gap-5  text-sm lg:text-lg xl:text-xl   mt-7 ">
              <li>Warranty Service
                Type</li>
              <li className="text-wrap">For Warranty Claims or Any Product Related Issues Please Email at operations @trevifurniture.com</li>
              <li>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</li>
            </ul>
            <ul className="grid grid-cols-3 md:grid-cols-4 gap-5  tracking-wider text-sm lg:text-lg xl:text-xl   mt-7 ">
              <li>Covered in Warranty</li>
              <li>Warranty Against Manufacturing Defect</li>
              <li>Warranty of the product is limited to manufacturing defects only.</li>
            </ul>
            <ul className="grid grid-cols-3 md:grid-cols-4 gap-5   text-sm lg:text-lg xl:text-xl  mt-7 ">
              <li>Not Covered in Warranty</li>
              <li>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
              <li>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</li>
            </ul>
            <ul className="grid grid-cols-3 md:grid-cols-4 gap-5  tracking-wider text-sm lg:text-lg xl:text-xl  mt-7 mb-4">
              <li>Domestic Warranty</li>
              <li>1 Year</li>
              <li>3 Months</li>
            </ul>

          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 mt-10 ">
<div></div>
<Link href={'/cart'}><button className="bg-[#B88E2F] text-white w-1/2 rounded-lg xl:rounded-none xl:w-[60%] text-sm xl:text-base py-2 xl:py-5">Add To Cart</button></Link>
<Link href={'/cart'}><button className="bg-[#B88E2F] text-white w-1/2 rounded-lg xl:rounded-none xl:w-[60%] text-sm xl:text-base py-2 xl:py-5">Add To Cart</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}


