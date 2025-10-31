import { Collage } from "@/components/Collage";
import Container from "@/components/Container";
import Timeline from "@/components/Timeline";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen justify-start items-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading>About Me!</Heading>
        <Paragraph className="leading-7 tracking-wide text-justify indent-16 max-w-full">
          Hey there! I'm Hriday, a passionate full-stack web developer building
          interactive and engaging digital experiences. My journey started with
          curiosity about how websites work, leading me to master HTML, CSS,
          JavaScript, React, and Next.js. I'm currently exploring advanced
          topics like API integration, authentication, and performance
          optimization while working with TypeScript, Tailwind CSS, and
          server-side rendering. I'm also diving into AI-powered development
          with tools like OpenAI and FastAPI. What drives me is curiosity and
          consistent problem-solving. I love breaking down complex concepts and
          collaborating on projects that matter. Let's build something amazing
          together!
        </Paragraph>
        <Paragraph className="leading-7 tracking-wide text-justify max-w-full">
          Outside of coding, I love to watch movies, listen to music, and
          explore new places. These hobbies help me stay creative and inspired,
          which I believe is essential for any developer.
        </Paragraph>
        <Collage />
        <Paragraph>
          Here is the timeline of some of my achievements and experiences:
        </Paragraph>
        <p className="text-base text-primary-dark dark:text-primary-light font-bold">
          Timeline
        </p>
        <Timeline />
      </Container>
    </div>
  );
};
export default AboutPage;
