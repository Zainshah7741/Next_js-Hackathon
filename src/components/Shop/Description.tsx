import Image from "next/image";



export default function DescriptionSection() {
    return (
        <section className="bg-gray-50 py-10 mt-10">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="flex flex-col sm:flex-row justify-center gap-12 items-center border-b pb-4 mb-6">
                    <h2 className="text-3xl font-bold text-gray-800 text-center">Description</h2>
                    <h3 className="text-2xl font-semibold text-gray-500 cursor-pointer hover:text-gray-800">
                        Additional Information
                    </h3>
                    <h3 className="text-2xl font-semibold text-gray-500 cursor-pointer hover:text-gray-800">
                        Reviews <span className="text-blue-600">[5]</span>
                    </h3>
                </div>
            </div>

            <div className="space-y-6 w-[75%] m-auto">
                <p className="text-gray-700 text-lg leading-7">
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                </p>
                <p className="text-gray-700 text-lg leading-7">
                    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Image
                        src="/sofa2.png" 
                        alt="Description 1"
                        className="rounded-lg shadow-md"
                        width={605}
                        height={348}
                    />
                    <Image
                        src="/sofa1.png" 
                        alt="Description 2"
                        className="rounded-lg shadow-md"
                        width={605}
                        height={348}
                    />
                </div>
            </div>

        </section >
    );
}