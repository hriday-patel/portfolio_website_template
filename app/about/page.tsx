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
          Hey there! I’m Hriday, a passionate beginner full-stack web developer
          who’s currently exploring the ever-evolving world of modern web
          technologies. I love turning ideas into interactive, functional, and
          visually engaging digital experiences. For me, coding isn’t just about
          writing logic, it’s about creating something that feels alive. My
          journey into web development started with simple curiosity, “how these
          web pages actually work?” From there, it became an obsession. I began
          learning HTML, CSS, and JavaScript, and soon discovered the power of
          frameworks like React and Next.js. These days, I’m diving deep into
          advanced topics like API integration, authentication, database
          management, and performance optimization, building my skills step by
          step, one bug at a time (and yes, sometimes those bugs win ). I’m also
          exploring Tailwind CSS, TypeScript, and server-side rendering (SSR)
          concepts to write cleaner, faster, and scalable code. I believe in
          staying updated with the latest trends, because tech moves fast, and I
          plan to keep up with it. Beyond the code, I love learning about
          AI-powered development, integrating tools like OpenAI, FastAPI, and
          Pinecone to build smarter applications. I’ve also been working on
          exciting side projects, like a collaborative code editor app and an AI
          query retrieval system, projects that challenge me to think critically
          and creatively at the same time. What makes me stand out as a
          developer is my curiosity and consistency. Even though I’m at the
          beginner stage, I approach every challenge with an open mind and a
          problem-solving attitude. I love breaking down complex concepts into
          simple ideas, not just to understand them better but also to help
          others who are learning alongside me. When I’m not coding, you’ll
          probably find me exploring new design inspirations, geeking out about
          the latest tech updates, or just vibing with music while brainstorming
          my next big idea. In short, I’m a developer in the making, a lifelong
          learner, and someone who believes in building things that matter. I’m
          always open to collaborating on cool projects, learning from
          experienced developers, and improving every single day. If you’re
          looking for someone who’s enthusiastic, eager to learn, and ready to
          grow into a skilled full-stack developer, you’ve found the right
          person. Let’s create something amazing together.
        </Paragraph>
        <Paragraph className="leading-7 tracking-wide text-justify max-w-full">
          Outside of coding, I love to watch movies, listen to music, and explore new
          places. These hobbies help me stay creative and inspired, which I believe
          is essential for any developer.
        </Paragraph>
        <Collage />
        <Paragraph>
          Here is the timeline of some of my achievements and experiences: 
        </Paragraph>
        <p className="text-base text-primary-dark dark:text-primary-light font-bold">Timeline</p>
        <Timeline />
      </Container>
    </div>
  );
};
export default AboutPage;
