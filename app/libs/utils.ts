import fs from "fs/promises";
import { redirect } from "next/navigation";
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
