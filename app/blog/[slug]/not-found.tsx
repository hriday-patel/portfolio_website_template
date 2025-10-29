import Container from "@/components/Container";
import { Link } from "next-view-transitions";

const NotFound = () => {
  return (
    <div className="flex min-h-screen justify-start items-start ">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <h1 className="text-4xl md:text-8xl font-bold tracking-tight text-primary-dark dark:text-primary-light">
          Not Found!
        </h1>
        <p className="text-2xl pt-4 text-secondary-dark dark:text-secondary-light max-w-lg">
          The page you are looking for does not exist.
        </p>
        <Link href={'/blog'} className="text-lg mt-6 inline-block text-primary-dark dark:text-primary-light underline">
          Go back to Blogs
        </Link>
      </Container>
    </div>
  )
}
export default NotFound;