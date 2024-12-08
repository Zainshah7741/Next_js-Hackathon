import Image from "next/image";


const Contact = () => {
    return (
        <>
            <Image src='/contactcov.png' alt=" " width={1440} height={316}></Image>
            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="rounded-lg max-w-4xl w-full p-6">
                    {/* Centered Heading */}
                    <div className="mb-8 flex flex-col items-center">
                        <h1 className="text-2xl font-bold text-center mb-4">Get In Touch With Us</h1>
                        <p className="text-gray-600 text-center">
                            For more information about our products & services, feel free to drop us an email. Our staff is always there to help you out. Do not hesitate!
                        </p>
                    </div>

                    {/* Responsive Content */}
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Contact Information */}
                        <div className="space-y-6 flex-1">
                            <div>
                                <h2 className="text-lg font-semibold">Address</h2>
                                <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">Phone</h2>
                                <p className="text-gray-600">
                                    Mobile: +(84) 546-6789 <br />
                                    Hotline: +(84) 456-6789
                                </p>
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">Working Time</h2>
                                <p className="text-gray-600">
                                    Monday–Friday: 9:00 - 22:00 <br />
                                    Saturday–Sunday: 9:00 - 21:00
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-4 flex-1 mt-8 lg:mt-0">
                            <div>
                                <label className="mb-4 block text-sm font-medium text-black" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="mt-1 p-4 block w-full border border-gray-500 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
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
                                    className="mt-1 p-4 block w-full border border-gray-500 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
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
                                    className="mt-1 p-4 block w-full border border-gray-500 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                    placeholder="This is optional"
                                />
                            </div>
                            <div>
                                <label className="mb-4 block text-sm font-medium text-black" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="mt-1 p-4 block w-full border border-gray-500 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
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
            <Image src='/achieve.png' alt=" " width={1440} height={270}></Image>
        </>
    );
}

export default Contact;