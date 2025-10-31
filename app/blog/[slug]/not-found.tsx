import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import { Link } from "next-view-transitions";

const NotFound = () => {
  return (
    <div className="flex min-h-screen justify-start items-start ">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading className="text-4xl md:text-8xl">Not Found!</Heading>
        <Paragraph className="text-2xl">The page you are looking for does not exist.</Paragraph>
        <Link href={'/blog'} className="text-lg mt-6 inline-block text-primary-dark dark:text-primary-light underline">
          Go back to Blogs
        </Link>
      </Container>
    </div>
  )
}

export default NotFound;