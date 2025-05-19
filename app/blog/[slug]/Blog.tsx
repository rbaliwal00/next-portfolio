import Image from "next/image";

function Blog({ blog }: { blog: blogArticle }) {
  return (
    <div className="mt-6 m-auto prose prose-lg prose-invert prose-li:marker:text-primary">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Rajan Baliwal - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight text-white text-xl md:text-4xl">
          {blog.title}
        </span>
      </h1>

      <Image
        src={urlFor(blog.titleImage).url()}
        alt="Title image"
        width={600}
        height={600}
        priority
        className="m-auto rounded-lg mt-8 border"
      />
      <MDXRemot {...blog.content} />
    </div>
  );
}
export default Blog;
