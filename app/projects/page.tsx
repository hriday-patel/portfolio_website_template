import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Project from "@/components/Project";

const page = () => {
  return (
    <div className="flex min-h-screen justify-start items-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading>~ My Projects</Heading>
        <Paragraph>
          Let me introduce you to some of the projects that I've been working
          on.
        </Paragraph>
        <Project />
      </Container>
    </div>
  );
};
export default page;
