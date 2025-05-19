import { blogArticle } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getBlog(slug: string) {
  const query = `*[_type == "blog" && slug.current == '${slug}']{
  "currentSlug" : slug.current,
    title,
    content,
    titleImage
} [0]`;

  const data = await client.fetch(query, { slug });
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: blogArticle = await getBlog(params.slug);

  console.log(data.content);
  return (
    <div className="mt-8 p-2">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Rajan Baliwal - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight text-white text-xl md:text-4xl">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        alt="Title image"
        width={600}
        height={600}
        priority
        className="m-auto rounded-lg mt-8 border"
      />

      <div className="mt-6 m-auto prose prose-lg prose-invert prose-li:marker:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
