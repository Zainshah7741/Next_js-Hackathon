import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
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
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    <div className="space-y-8 md:col-span-2 lg:col-span-3">
                        {posts.map((post, index) => (
                            <Card key={index}>
                                <CardContent className="p-0">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={800}
                                        height={500}
                                        className="rounded-t-lg object-cover w-full h-[500px]"
                                    />
                                    <div className="p-6 space-y-4">
                                        <h2 className="text-2xl font-medium">{post.title}</h2>
                                        <div className="flex gap-4 text-sm text-muted-foreground">
                                            <span>{post.author}</span>
                                            <span>{post.date}</span>
                                            <span>{post.category}</span>
                                        </div>
                                        <p className="text-muted-foreground">{post.excerpt}</p>
                                        <Button variant="link" className="p-0 h-auto font-normal">
                                            Read more
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        <div className="flex justify-center gap-2 mt-8">
                            <Button variant="default" size="lg" className="w-12 h-12">
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
                    <div className="space-y-8">
                        <Card>
                            <CardContent className="p-6">
                                <div className="relative">
                                    <Input placeholder="Search" className="pl-10" />
                                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-xl font-medium mb-4">Categories</h2>
                                <div className="space-y-2">
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
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-xl font-medium mb-4">Recent Posts</h2>
                                <div className="space-y-4">
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
                </div>
            </div>
            <Image src='/achieve.png' alt=" " width={1440} height={270}></Image>
        </>
    );
}
