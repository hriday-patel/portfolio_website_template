import Container from "@/components/Container";
import Project from "@/components/Project"; 
import { cn } from "@/lib/utils";

const page = () => {
  return (
    <div className="flex min-h-screen justify-start items-start ">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary-dark dark:text-primary-light">
          Hans Landa
        </h1>
        <p className="text-base pt-4 text-secondary-dark dark:text-secondary-light max-w-lg">
          Hi! I am a software developer at Google who is passionate to build
          efficient and scalable efficient systems!
        </p>
        <Project />
      </Container>
    </div>
  );
};
export default page;
