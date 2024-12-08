import Checkouts from "@/components/checkout";
import Achieve from "@/components/Shop/Achieve";


const Checkout = () => {
    return <>
        <Checkouts />
        <div className="container mx-auto flex flex-col md:flex-row md:justify-evenly gap-6 p-4">
            {/* Left Section */}
            <div className="left md:w-1/2">
                <div className="max-w-lg mx-auto bg-white p-6 rounded-md shadow-md">
                    <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
                    <form>
                        {/* First Name and Last Name */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Company Name */}
                        <div className="mb-4">
                            <label
                                htmlFor="companyName"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Company Name (Optional)
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        {/* Country/Region */}
                        <div className="mb-4">
                            <label
                                htmlFor="country"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Country / Region
                            </label>
                            <select
                                id="country"
                                name="country"
                                className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option>Sri Lanka</option>
                                <option>India</option>
                                <option>United States</option>
                                <option>United Kingdom</option>
                            </select>
                        </div>

                        {/* Street Address */}
                        <div className="mb-4">
                            <label
                                htmlFor="streetAddress"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Street Address
                            </label>
                            <input
                                type="text"
                                id="streetAddress"
                                name="streetAddress"
                                className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Town/City */}
                        <div className="mb-4">
                            <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Town / City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Province */}
                        <div className="mb-4">
                            <label
                                htmlFor="province"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Province
                            </label>
                            <select
                                id="province"
                                name="province"
                                className=" mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option>Western Province</option>
                                <option>Southern Province</option>
                                <option>Central Province</option>
                            </select>
                        </div>

                        {/* ZIP Code */}
                        <div className="mb-4">
                            <label
                                htmlFor="zipCode"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                ZIP Code
                            </label>
                            <input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div className="mb-4">
                            <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="mt-1 block w-full p-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* Right Section */}
            <div className="right md:w-1/3">
                <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                    {/* Product and Subtotal Section */}
                    <h2 className="text-lg font-bold mb-6">Product</h2>
                    <div className="flex justify-between mb-4">
                        <p>Asgaard sofa x 1</p>
                        <p>Rs. 250,000.00</p>
                    </div>
                    <div className="flex justify-between mb-4">
                        <p>Subtotal</p>
                        <p>Rs. 250,000.00</p>
                    </div>
                    <div className="flex justify-between mb-4 font-bold text-lg">
                        <p>Total</p>
                        <p className="text-amber-600">Rs. 250,000.00</p>
                    </div>

                    {/* Divider */}
                    <hr className="my-4 border-gray-200" />

                    {/* Payment Methods */}
                    <div className="mb-6">
                        <p className="font-bold">Direct Bank Transfer</p>
                        <p className="text-sm text-gray-600">
                            Make your payment directly into our bank account. Please use your Order ID as the
                            payment reference. Your order will not be shipped until the funds have cleared in
                            our account.
                        </p>
                    </div>

                    {/* Radio Buttons */}
                    <div className="mb-6">
                        <div className="flex items-center mb-2">
                            <input
                                type="radio"
                                id="directBankTransfer"
                                name="paymentMethod"
                                value="directBankTransfer"
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                defaultChecked
                            />
                            <label
                                htmlFor="directBankTransfer"
                                className="ml-2 text-sm font-medium text-gray-700 mb-4"
                            >
                                Direct Bank Transfer
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="cashOnDelivery"
                                name="paymentMethod"
                                value="cashOnDelivery"
                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            />
                            <label
                                htmlFor="cashOnDelivery"
                                className="ml-2 text-sm font-medium text-gray-700 mb-4"
                            >
                                Cash On Delivery
                            </label>
                        </div>
                    </div>

                    {/* Privacy Policy */}
                    <p className="text-sm text-gray-600 mb-6">
                        Your personal data will be used to support your experience throughout this website, to
                        manage access to your account, and for other purposes described in our{" "}
                        <a href="#" className="text-blue-600 underline">
                            privacy policy
                        </a>
                        .
                    </p>

                    {/* Place Order Button */}
                    <button
                        type="button"
                        className="w-1/2 bg-none text-black border border-black py-3 rounded-md text-center font-medium hover:bg-gray-200 mx-auto block"
                    >
                        Place order
                    </button>
                </div>
            </div>
        </div>
        <Achieve></Achieve>
    </>;
};

export default Checkout;