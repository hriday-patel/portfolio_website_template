import Container from "@/components/Container";
import Project from "@/components/Project";
import { Metadata } from "next";
import { getBlog } from "@/app/libs/utils";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await getPage(slug);
  if (!data) {
    return {
      title: "Blog Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }
  return {
    title: data.title,
    description: data.description,
    authors: [{ name: data.author }],
    other: {
      date: data.date,
    },
  };
}

export async function getPage(slug: string) {
  const singleBlog = await getBlog(slug);
  if (!singleBlog) {
    notFound();
  }
  const { content, data } = matter(singleBlog);
  return { content, data };
}

export async function generateStaticParams() {
  const allBlogs = path.join(process.cwd(), "markdown");
  const files = await fs.readdir(allBlogs);
  return files.map((file) => {
    return {
      slug: file.replace(".mdx", ""),
    };
  });
}

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const { content, data } = await getPage(slug);
  return (
    <div className="flex min-h-screen justify-start items-start ">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <div className="prose prose-neutral dark:prose-invert dark:prose-pre:bg-primary-dark dark:prose-code:bg-linear-180 dark:prose-code:from-pink-400 dark:prose-code:to-purple-400 dark:prose-code:bg-clip-text dark:prose-code:text-transparent max-w-none prose-code:bg-linear-180 prose-code:from-red-400 prose-code:to-blue-400 prose-code:bg-clip-text prose-code:text-transparent">
          <Image
            src={data.image}
            alt={data.title}
            width={500}
            height={500}
            className="w-full mx-auto rounded-2xl max-h-80 object-cover drop-shadow-lg dark:drop-shadow-cyan-500/50 "
          />
          <MDXRemote source={content} />
        </div>
      </Container>
    </div>
  );
};
export default page;
