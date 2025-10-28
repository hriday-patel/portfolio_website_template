import Container from "@/components/Container";
import Project from "@/components/Project";
import { Metadata } from "next";
import { cn, formateDate } from "@/lib/utils";
import { getAllBlogs } from "../libs/utils";
import Link from "next/link";
import { Playfair } from "next/font/google";

const playfair = Playfair({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "All Blogs",
  description: "Read all blogs written by Hans Landa",
};

const page = async () => {
  const allBlogs = await getAllBlogs();
  console.log(allBlogs);
  return (
    <div className="flex min-h-screen justify-start items-start ">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-primary-light">
          Hans Landa
        </h1>
        <p className="text-base pt-4 text-secondary-dark dark:text-secondary-light max-w-lg">
          Hi! I am a software developer at Google who is passionate to build
          efficient and scalable efficient systems!
        </p>
        <div className="flex flex-col py-10 gap-4">
          {allBlogs.map((blog, idx) => (
            <Link href={`/blog/${blog.slug}`} key={idx}>
              <div className="flex justify-between items-center">
                <h2 className="text-base font-semibold tracking-tight text-secondary-dark dark:text-primary-light">
                  {blog.frontmatter?.title}
                </h2>
                <p
                  className={cn(
                    "text-md font-semibold text-primary-dark dark:text-primary-light max-w-lg",
                    playfair.className
                  )}
                >
                  {formateDate(blog.frontmatter?.date)}
                </p>
              </div>
              <p className="text-sm pt-2.5 text-secondary-dark dark:text-secondary-light max-w-lg">
                {blog.frontmatter?.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};
export default page;
