import React from "react";
import { client, urlFor } from "../lib/sanity";
import { simpleBlogCard } from "../lib/interface";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getBlogs() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data: simpleBlogCard[] = await client.fetch(query);
  return data;
}

const Blogs = async () => {
  const data = await getBlogs();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
      {data.map((blog) => (
        <Card key={blog.currentSlug} className="bg-white">
          <Image
            src={urlFor(blog.titleImage).url()}
            alt="blog-image"
            width={500}
            height={500}
            className="object-cover rounded-t-lg h-[200px]"
          />
          <CardContent className="mt-5">
            <h3 className="text-md md:text-lg line-clamp-2 font-bold">
              {blog.title}
            </h3>
            <p className="text-sm text-slate-600 line-clamp-3 mt-2 ">
              {blog.smallDescription}
            </p>
            <Button asChild className="mt-7 w-full">
              <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Blogs;
