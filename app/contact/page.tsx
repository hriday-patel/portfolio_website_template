import Container from "@/components/Container";
import Form from "@/components/Form";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";

const page = () => {
  return (
    <div className="flex min-h-screen justify-start items-start">
      <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
        <Heading>~ Contact Me</Heading>
        <Paragraph>
          If you would like to get in touch with me, please feel free to reach
          out!
        </Paragraph>
        <Form />
      </Container>
    </div>
  );
};
export default page;
