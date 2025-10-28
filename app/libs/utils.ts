import fs from "fs/promises";
import path from "path";

export async function getBlog(slug: string) {
  const singleBlog = await fs.readFile(
    path.join(process.cwd(), "markdown", `${slug}.mdx`),
    "utf-8"
  );
  return singleBlog;
}
