import { blogArticle } from "@/app/lib/interface";
import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "next-sanity";

import Prism from "prismjs";
import "prismjs/components/prism-java";
import "prismjs/themes/prism-tomorrow.css";

async function getBlog(slug: string) {
  const query = `*[_type == "blog" && slug.current == '${slug}']{
  "currentSlug" : slug.current,
    title,
    content,
    titleImage
} [0]`;

  const data = await client.fetch(query, { slug }, { cache: "no-store" });
  return data;
}

const components: PortableTextComponents = {
  types: {
    code: ({ value }) => {
      const highlightedCode = Prism.highlight(
        value.code,
        Prism.languages[value.language || "java"],
        value.language || "java",
      );

      return (
        <div className="my-4">
          {value?.filename && (
            <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-t-md text-sm font-mono">
              {value.filename}
            </div>
          )}
          <pre className="bg-gray-900 p-4 overflow-x-auto text-sm rounded-md font-mono">
            <code
              className={`language-${value.language || "java"}`}
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </pre>
        </div>
      );
    },
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-6">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || "Sanity Image"}
            width={800}
            height={500}
            className="rounded-lg border mx-auto"
          />
          {value.caption && (
            <p className="text-sm text-center text-gray-400 mt-2">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
};

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: blogArticle = await getBlog(params.slug);

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

      <div className="mt-6 m-auto prose prose-sm md:prose-lg prose-code:text-green-300 prose-pre:bg-gray-900 prose-invert prose-li:marker:text-primary">
        <PortableText value={data.content} components={components} />
      </div>
    </div>
  );
}
