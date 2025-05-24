import { simpleBlogCard } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: { blog: simpleBlogCard }) => {
  return (
    <Card key={blog.currentSlug} className="bg-white">
      <Image
        src={urlFor(blog.titleImage).url()}
        alt="blog-image"
        width={400}
        height={400}
        className="object-cover rounded-t-lg h-[200px]"
      />
      <CardContent className="mt-2">
        <h3 className="text-md md:text-lg line-clamp-2 font-bold">
          {blog.title}
        </h3>
        <p className="text-sm text-slate-600 line-clamp-2 md:line-clamp-3 mt-2 ">
          {blog.smallDescription}
        </p>
        <Button
          asChild
          className="h-8 rounded-md px-3 text-xs mt-2 md:mt-4 w-full"
        >
          <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
