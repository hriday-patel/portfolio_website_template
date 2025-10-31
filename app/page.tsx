import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Landingblogs from "@/components/Landingblogs";
import Paragraph from "@/components/Paragraph";
import Project from "@/components/Project";
import Testimonials from "@/components/Testimonials";
import { cn } from "@/lib/utils";
import projects from "@/Projects.json";


const page = () => {
  return (
    <div className="flex min-h-screen justify-start items-start ">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading>Hans Landa</Heading>
        <Paragraph>
          Hi! I am a software developer at Google who is passionate to build
          efficient and scalable efficient systems!
        </Paragraph>
        <Project projects={projects}/>
        <Landingblogs />
        <Testimonials />
      </Container>
    </div>
  );
};
export default page;
