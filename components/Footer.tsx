import { Link } from "next-view-transitions";
import Container from "./Container";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { playfair } from "@/lib/utils";
import { cn } from "@/lib/utils";


const Footer = () => {
  return (
    <Container className="flex justify-between border-t border-secondary-dark/10 dark:border-secondary-light/10 p-3 inset-shadow-2xs inset-shadow-primary-dark/10 dark:drop-shadow-lg dark:drop-shadow-rose-500/50">
      <p className={cn("text-lg text-secondary-dark dark:text-secondary-light", playfair.className)}>
        Made By Hriday
      </p>
      <div className="flex justify-center items-center">
        <Link href="https://github.com/hriday-patel" target="_blank">
          <IconBrandGithub
            className="text-primary-dark dark:text-primary-light mx-2 hover:scale-110 transition-transform cursor-pointer"
            size={20}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/hridaypatel2309/" target="_blank">
          <IconBrandLinkedin
            className="text-primary-dark dark:text-primary-light mx-2 hover:scale-110 transition-transform cursor-pointer"
            size={20}
          />
        </Link>
      </div>
    </Container>
  );
};
export default Footer;
