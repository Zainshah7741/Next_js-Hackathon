import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { FaTag } from "react-icons/fa";

import Image from "next/image";

export default function BlogLayout() {
    const categories = [
        { name: "Crafts", count: 2 },
        { name: "Design", count: 8 },
        { name: "Handmade", count: 7 },
        { name: "Interior", count: 1 },
        { name: "Wood", count: 6 },
    ];

    const posts = [
        {
            title: "Going all-in with millennial design",
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "14 Oct 2022",
            author: "Admin",
            category: "Wood",
            image: "/laptop.jpg",
        },
        {
            title: "Exploring new ways of decorating",
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "14 Oct 2022",
            author: "Admin",
            category: "Handmade",
            image: "/writing.jpg",
        },
        {
            title: "Handmade pieces that took time to make",
            excerpt:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "14 Oct 2022",
            author: "Admin",
            category: "Wood",
            image: "/blogwrite.jpg",
        },
    ];

    const recentPosts = [
        {
            title: "Going all-in with millennial design",
            date: "03 Aug 2022",
            image: "/one.jpg",
        },
        {
            title: "Exploring new ways of decorating",
            date: "03 Aug 2022",
            image: "/two.jpg",
        },
        {
            title: "Modern home in Milan",
            date: "03 Aug 2022",
            image: "/four.jpg",
        },
        {
            title: "Colorful office redesign",
            date: "03 Aug 2022",
            image: "/five.jpg"
        },
    ];

    return (
        <>
            <Image src='/blogg.jpg' alt=" " width={1440} height={316}></Image>
            <div className=" mx-auto px-4 xl:px-12 py-8 w-[90%] xl:mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:grid-cols-4">
                    <div className="space-y-8 md:col-span-2 lg:col-span-3">
                        {posts.map((post, index) => (
                            <div key={index} className="w-fit">
                                <div className="p-0">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={817}
                                        height={500}
                                        className="rounded-t-lg object-cover"
                                    />
                                    <div className="py-4 space-y-4">
                                        <div className="flex items-center gap-4 md:gap-8 text-sm text-muted-foreground">
                                            <span className="flex gap-1 sm:gap-4 text-sm md:text-base"><FaUser></FaUser>{post.author}</span>
                                            <span className="flex gap-1 sm:gap-4 text-sm md:text-base"><FaCalendar></FaCalendar>{post.date}</span>
                                            <span className="flex gap-1 sm:gap-4 text-sm md:text-base"><FaTag></FaTag>{post.category}</span>
                                        </div>
                                        <h2 className="text-lg md:text-2xl xl:text-[33px] font-medium">{post.title}</h2>
                                        <p className="text-sm md:textbase text-muted-foreground">{post.excerpt}</p>
                                        <Button variant="link" className=" h-auto text-base  font-medium tracking-wider underline underline-offset-8">
                                            Read more
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="space-y-8">


                        <div className="relative border border-black w-[70%] md:w-full m-auto py-2.5 rounded-xl">
                            <input type="text" className="" />
                            <Search className="absolute right-1 top-3 md:top-2 w-5 h-5 md:h-7 md:w-7" />
                        </div>

                        <h2 className="text-xl xl:text-2xl font-medium mb-4">Categories</h2>
                        <div className="space-y-2 xl:space-y-10">
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between text-muted-foreground"
                                >
                                    <span>{category.name}</span>
                                    <span>{category.count}</span>
                                </div>
                            ))}
                        </div>

                        <Card>
                            <CardContent className="mt-8 xl:mt-20">
                                <h2 className="text-xl xl:text-2xl tracking-wide font-medium mb-4">Recent Posts</h2>
                                <div className="space-y-10">
                                    {recentPosts.map((post, index) => (
                                        <div key={index} className="flex gap-4">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                width={80}
                                                height={80}
                                                className="rounded-lg object-cover"
                                            />
                                            <div className="space-y-1">
                                                <h3 className="font-medium leading-snug">{post.title}</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {post.date}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="flex m-auto w-fit col-span-full gap-2 mt-8">
                        <Button variant="default" size="lg" className="w-12 h-12 bg-[#B88E2F]">
                            1
                        </Button>
                        <Button variant="outline" size="lg" className="w-12 h-12">
                            2
                        </Button>
                        <Button variant="outline" size="lg" className="w-12 h-12">
                            3
                        </Button>
                        <Button variant="outline" size="lg" className="px-4">
                            Next
                        </Button>
                    </div>
                </div>
            </div>
            <Image src='/achieve.png' alt=" " width={1440} height={270}></Image>
        </>
    );
}
