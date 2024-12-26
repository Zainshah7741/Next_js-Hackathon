import Image from "next/image";
import Achieve from "@/components/Shop/Achieve";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md"

const Contact = () => {
    return (
        <>
            <Image src='/contactcov.png' alt=" " width={1440} height={316}></Image>
            <div className=" flex items-center justify-center xl:px-4 p-4 xl:pt-20">
                <div className="rounded-lg max-w-4xl w-full p-6">
                    <div className="mb-8 flex flex-col items-center">
                        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-center mb-4">Get In Touch With Us</h1>
                        <p className="text-gray-600 text-center max-w-[600px]">
                            For more information about our products & services, feel free to drop us an email. Our staff is always there to help you out. Do not hesitate!
                        </p>
                    </div>
                    <div className="flex flex-col-reverse sm:flex-row gap-8 xl:mt-20">
                        <div className="space-y-10 flex-1 ">
                         <div>
                    <FaLocationDot className="inline text-2xl"></FaLocationDot>
                           <h2 className="text-xl xl:text-2xl font-semibold tracking-wider inline pl-2">Address</h2>
                                <p className="font-medium pl-8 max-w-[200px] text-sm">236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                            
                            <div className="">
                            <FaPhoneAlt className="inline text-2xl"></FaPhoneAlt>
                            <h2 className="text-2xl font-semibold tracking-wider inline pl-2">Phone</h2>
                                <p className="font-medium pl-8 text-sm">
                                    Mobile: +(84) 546-6789 <br />
                                    Hotline: +(84) 456-6789
                                </p>
                            </div>
                            <div>
                            <MdOutlineAccessTimeFilled className="inline text-2xl"></MdOutlineAccessTimeFilled>   <h2 className="text-2xl font-semibold tracking-wider inline pl-2">Working Time</h2>
                                <p className="font-medium pl-8 text-sm">
                                    Monday–Friday: 9:00 - 22:00 <br />
                                    Saturday–Sunday: 9:00 - 21:00
                                </p>
                            </div>
                        </div>
                        <form className="space-y-4 flex-1 mt-8 lg:mt-0 ">
                            <div>
                                <label className="mb-4 block text-sm font-medium text-black" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 p-2 lg:p-3 xl:p-4 block w-full border border-gray-500 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                    placeholder="Abc"
                                    required
                                />
                            </div>
                            <div>
                                <label className="mb-4 block text-sm font-medium text-black" htmlFor="email">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 p-2 lg:p-3 xl:p-4 block w-full border border-gray-500 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                    placeholder="Abc@def.com"
                                    required
                                />
                            </div>
                            <div>
                                <label className="mb-4 block text-sm font-medium text-black" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="mt-1 p-2 lg:p-3 xl:p-4 block w-full border border-gray-500 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                    placeholder="This is optional"
                                />
                            </div>
                            <div>
                                <label className="mb-4 block text-sm font-medium text-black" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="mt-1 p-2 lg:p-3 xl:p-4 block w-full border border-gray-500 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                    rows="4"
                                    placeholder="Hi! I'd like to ask about..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-1/2 py-2 px-4 bg-yellow-800 text-white font-semibold rounded-md shadow hover:bg-yellow-600"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Achieve></Achieve>
        </>
    );
}

export default Contact;


