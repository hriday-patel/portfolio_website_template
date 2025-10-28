import Container from "@/components/Container";
import Project from "@/components/Project";
import { Metadata } from "next";
import { getBlog } from "@/app/libs/utils";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { redirect } from "next/navigation";


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const singleBlog = await getBlog(params.slug);
  const { data } = matter(singleBlog);
  return {
    title: data.title,
    description: data.description,
    authors: [{ name: data.author }],
    other: {
      date: data.date,
    },
  };
}

export async function getPage(slug: string){
  const singleBlog = await getBlog(slug);
  return singleBlog;
}

export async function generateStaticParams() {
  const allBlogs = path.join(process.cwd(), "markdown");
  const files = await fs.readdir(allBlogs);
  return files.map((file) => {
    return {
      slug: file.replace(".mdx", ""),
    }
  })
}

const page = async ({ params }: { params: { slug: string } }) => {
  const singleBlog = await getPage(params.slug);
  return (
    <div className="flex min-h-screen justify-start items-start ">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <div className="prose prose-neutral dark:prose-invert dark:prose-pre:bg-primary-dark dark:prose-code:bg-linear-180 dark:prose-code:from-pink-400 dark:prose-code:to-purple-400 dark:prose-code:bg-clip-text dark:prose-code:text-transparent max-w-none prose-code:bg-linear-180 prose-code:from-red-400 prose-code:to-blue-400 prose-code:bg-clip-text prose-code:text-transparent">
          <MDXRemote source={singleBlog} />
        </div>
      </Container>
    </div>
  );
};
export default page;
