import { simpleBlogCard } from "@/app/lib/interface";
import { urlFor } from "@/app/lib/sanity";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: { blog: simpleBlogCard }) => {
  return (
    <Card
      key={blog.currentSlug}
      className="bg-[#0f172a] text-white border border-slate-700 rounded-lg shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
    >
      <Image
        src={urlFor(blog.titleImage).url()}
        alt="blog-image"
        width={400}
        height={400}
        className="object-cover rounded-t-lg h-[200px] w-full"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-bold font-mono text-blue-400 line-clamp-2 text-gradient">
          {blog.title}
        </h3>
        <p className="text-sm text-slate-400 font-mono line-clamp-3 mt-2">
          {blog.smallDescription}
        </p>
        <Button
          asChild
          className="h-8 rounded-md px-3 text-xs mt-4 w-full text-white font-mono"
        >
          <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
