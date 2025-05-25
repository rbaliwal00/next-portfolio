import BlogCard from "../_components/BlogCard/BlogCard";
import BlogCardSmall from "../_components/BlogCard/BlogCardSmall";
import { simpleBlogCard } from "../lib/interface";
import { client } from "../lib/sanity";

async function getBlogs() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data: simpleBlogCard[] = await client.fetch(
    query,
    {},
    {
      cache: "no-store",
    },
  );
  return data;
}

const Blogs = async () => {
  const data = await getBlogs();

  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-14 mb-12">
      <>
        <div className="text-2xl md:text-4xl text-white font-bold">
          Featured Posts
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
          {/* {data.map((blog) => (
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
              <p className="text-sm text-slate-600 line-clamp-3 mt-2 ">
                {blog.smallDescription}
              </p>
              <Button asChild className="mt-4 w-full">
                <Link href={`/blog/${blog.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))} */}
        </div>
        <div className="grid lg:grid-cols-2 grid-rows-2 gap-x-6 gap-y-1">
          <div className="row-span-2 bg-gray-200 ">
            <BlogCard blog={data[0]} />
          </div>
          <div className="row-span-2 bg-gray-200 md:hidden">
            <BlogCard blog={data[0]} />
          </div>
          <div className="row-span-2 bg-gray-200 md:hidden">
            <BlogCard blog={data[0]} />
          </div>
          <div className="bg-gray-300 hidden md:block ">
            <BlogCardSmall blog={data[0]} />
          </div>
          <div className="bg-gray-400 hidden md:block ">
            <BlogCardSmall blog={data[0]} />
          </div>
        </div>
      </>
      <>
        <div className="flex justify-between items-center mt-14">
          <div className="text-2xl md:text-4xl text-white font-bold">
            Recent Posts
          </div>
          <div className="text-primary underline underline-offset-4 cursor-pointer">
            view all
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4">
          <div className="row-span-2 bg-gray-200 ">
            <BlogCard blog={data[0]} />
          </div>
          <div className="row-span-2 bg-gray-200 ">
            <BlogCard blog={data[0]} />
          </div>
          <div className="row-span-2 bg-gray-200 ">
            <BlogCard blog={data[0]} />
          </div>
        </div>
      </>
    </div>
  );
};

export default Blogs;
