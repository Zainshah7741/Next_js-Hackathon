import Image from "next/image"
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

export default function ProductComparison() {
  return (
    <>
      <div><Image src={'/comparison.png'} alt="" width={1440} height={316}></Image></div>
      <div className="container mx-auto p-4 bg-white">
        <div className="mb-8">
          <h2 className="text-2xl font-medium  w-52 ">Go to Product page for more Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <Button variant="ghost" className="text-gray-500 hover:text-gray-700">
                View More
              </Button>
            </div>
            <Card className="p-4">
              <Image
                src="/cartitem1.png"
                alt="Asgaard Sofa"
                width={280}
                height={177}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium mb-2">Asgaard Sofa</h3>
              <p className="text-lg font-medium mb-2">Rs. 250,000.00</p>
              <div className="flex items-center gap-2">
                <span className="font-medium">4.7</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">204 Review</span>
              </div>
            </Card>
            <Card className="p-4">
              <Image
                src="/comparis.png"
                alt="Outdoor Sofa Set"
                width={280}
                height={177}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-medium mb-2">Outdoor Sofa Set</h3>
              <p className="text-lg font-medium mb-2">Rs. 224,000.00</p>
              <div className="flex items-center gap-2">
                <span className="font-medium">4.2</span>


                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                        }`}
                    />
                  ))}

                </div>

                <span className="text-sm text-muted-foreground">145 Review</span>
              </div>
            </Card>

          </div>
        </div>

        <div className="space-y-8">
          {/* General Section */}
          <section>
            <h2 className="text-2xl font-medium mb-4">General</h2>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Sales Package</TableCell>
                  <TableCell>1 sectional sofa</TableCell>
                  <TableCell>1 Three Seater, 2 Single Seater</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Model Number</TableCell>
                  <TableCell>TFCBLIGRBL6SRHS</TableCell>
                  <TableCell>DTUBLIGRBL568</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Secondary Material</TableCell>
                  <TableCell>Solid Wood</TableCell>
                  <TableCell>Solid Wood</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Configuration</TableCell>
                  <TableCell>L-shaped</TableCell>
                  <TableCell>L-shaped</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Upholstery Material</TableCell>
                  <TableCell>Fabric + Cotton</TableCell>
                  <TableCell>Fabric + Cotton</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Upholstery Color</TableCell>
                  <TableCell>Bright Grey & Lion</TableCell>
                  <TableCell>Bright Grey & Lion</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          {/* Product Section */}
          <section>
            <h2 className="text-2xl font-medium mb-4">Product</h2>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Filling Material</TableCell>
                  <TableCell>Foam</TableCell>
                  <TableCell>Matte</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Finish Type</TableCell>
                  <TableCell>Bright Grey & Lion</TableCell>
                  <TableCell>Bright Grey & Lion</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Adjustable Headrest</TableCell>
                  <TableCell>No</TableCell>
                  <TableCell>Yes</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Maximum Load Capacity</TableCell>
                  <TableCell>280 KG</TableCell>
                  <TableCell>300 KG</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Origin of Manufacture</TableCell>
                  <TableCell>India</TableCell>
                  <TableCell>India</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          {/* Dimensions Section */}
          <section>
            <h2 className="text-2xl font-medium mb-4">Dimensions</h2>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Width</TableCell>
                  <TableCell>265.32 cm</TableCell>
                  <TableCell>265.32 cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Height</TableCell>
                  <TableCell>76 cm</TableCell>
                  <TableCell>76 cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Depth</TableCell>
                  <TableCell>167.76 cm</TableCell>
                  <TableCell>167.76 cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Weight</TableCell>
                  <TableCell>45 KG</TableCell>
                  <TableCell>65 KG</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Seat Height</TableCell>
                  <TableCell>41.52 cm</TableCell>
                  <TableCell>41.52 cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Leg Height</TableCell>
                  <TableCell>5.46 cm</TableCell>
                  <TableCell>5.46 cm</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          {/* Warranty Section */}
          <section>
            <h2 className="text-2xl font-medium mb-4">Warranty</h2>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Warranty Summary</TableCell>
                  <TableCell>1 Year Manufacturing Warranty</TableCell>
                  <TableCell>1.2 Year Manufacturing Warranty</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Warranty Service Type</TableCell>
                  <TableCell>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</TableCell>
                  <TableCell>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Covered in Warranty</TableCell>
                  <TableCell>Warranty Against Manufacturing Defect</TableCell>
                  <TableCell>Warranty of the product is limited to manufacturing defects only.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Not Covered in Warranty</TableCell>
                  <TableCell>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</TableCell>
                  <TableCell>The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Domestic Warranty</TableCell>
                  <TableCell>1 Year</TableCell>
                  <TableCell>3 Months</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </section>

          <div className="grid justify-ends md:grid-cols-2 gap-4">
            <Button size="lg" className="w-[250px] bg-[#B88E2F] hover:bg-[#9c7829] text-white">
              Add To Cart
            </Button>
            <Button size="lg" className="w-[250px] bg-[#B88E2F] hover:bg-[#9c7829] text-white">
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

