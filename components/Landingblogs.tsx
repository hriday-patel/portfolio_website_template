import { getAllBlogs } from "@/app/libs/utils";
import { Link } from "next-view-transitions";
import { cn, formateDate } from "@/lib/utils";
import { playfair } from "@/lib/utils";
const Landingblogs = async () => {
    const allBlogs = await getAllBlogs();
  return (
    <div className="flex flex-col gap-4">
          {allBlogs.map((blog, idx) => (
            <Link href={`/blog/${blog.slug}`} key={idx}>
              <div className="flex justify-between items-center">
                <h2 className="text-base font-semibold tracking-tight text-primary-dark dark:text-primary-light">
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
              <p className="text-sm pt-2.5 text-secondary-dark dark:text-secondary-light max-w-lg line-clamp-2">
                {blog.frontmatter?.description}
              </p>
            </Link>
          ))}
        </div>
  )
}
export default Landingblogs