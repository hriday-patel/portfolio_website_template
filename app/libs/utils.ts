import fs from "fs/promises";
import { redirect } from "next/navigation";
import matter from "gray-matter";
import path from "path";

export async function getBlog(slug: string) {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "markdown", `${slug}.mdx`),
      "utf-8"
    );
    return singleBlog;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function getAllBlogs() {
  const allBlogs = path.join(process.cwd(), "markdown");
  const files = await fs.readdir(allBlogs, "utf-8");
  const blogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const frontmatter = await getFrontmatterBySlug(slug);
      return { slug, frontmatter };
    })
  );
  return blogs;
}

export async function getFrontmatterBySlug(slug: string) {
  try {
    const allBlogs = path.join(process.cwd(), "markdown", `${slug}.mdx`);
    const content = await fs.readFile(allBlogs, "utf-8");
    const { data } = matter(content);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
