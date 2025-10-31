import Marquee from "react-fast-marquee";
import Image from "next/image";

type TestimonialType = {
  name: string;
  role: string;
  company: string;
  desc: string;
  image: string;
};

const data: Array<TestimonialType> = [
  {
    name: "Sarah Johnson",
    role: "Senior Engineering Manager",
    company: "Tech Solutions Inc",
    desc: "Hriday's expertise in building scalable systems is impressive. He consistently delivers high-quality solutions and solves complex problems effectively.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=776",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    company: "Digital Innovations",
    desc: "Working with Hriday on our critical project was excellent. His technical skills and collaborative approach significantly improved our system's performance.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
  },
  {
    name: "Emily Rodriguez",
    role: "Software Architect",
    company: "Cloud Systems Corp",
    desc: "Hriday has a deep understanding of system architecture. His ability to translate complex requirements into efficient code is remarkable.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
  },
  {
    name: "David Thompson",
    role: "CTO",
    company: "StartupHub",
    desc: "Hriday's expertise in building efficient systems has been a game-changer. He's a dedicated professional who consistently exceeds expectations.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
  },
  {
    name: "Jennifer Park",
    role: "Product Manager",
    company: "DataFlow Systems",
    desc: "Hriday's technical skills and attention to detail are commendable. His contributions have been invaluable to our team's success.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=776",
  },
  {
    name: "Robert Martinez",
    role: "VP of Engineering",
    company: "Enterprise Solutions",
    desc: "I highly recommend Hriday for any software project. His commitment to quality and expertise in scalable systems are unparalleled.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
  },
  {
    name: "Sauvik Nandi",
    role: "Unemployed",
    company: "N/A",
    desc: "I am unemployed at the moment.",
    image: "/sauvik.png",
  }
];

const Testimonials = () => {
  return (
    <div className="py-10">
      <Marquee gradient={false} speed={40}>
        {data.map((testimonial, idx) => (
          <TestimonialCards
            key={idx}
            name={testimonial.name}
            role={testimonial.role}
            company={testimonial.company}
            desc={testimonial.desc}
            image={testimonial.image}
          />
        ))}
      </Marquee>
    </div>
  );
};

export const TestimonialCards = (data: TestimonialType) => {
  return (
    <div className="flex flex-col w-[350px] h-[280px] bg-primary-light dark:bg-primary-dark rounded-xl p-6 m-4 drop-shadow-lg drop-shadow-">
      <div className="flex-1 flex flex-col justify-between">
        <p className="text-secondary-dark dark:text-secondary-light text-sm leading-relaxed line-clamp-4">
          "{data.desc}"
        </p>

        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Image
            src={data.image}
            alt={data.name}
            width={48}
            height={48}
            className="rounded-full object-cover w-12 h-12 shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <h3 className="text-black dark:text-white font-semibold text-base truncate">
              {data.name}
            </h3>
            <p className="text-secondary-dark dark:text-secondary-light text-xs truncate">
              {data.role}
            </p>
            <p className="text-secondary-dark dark:text-secondary-light text-xs truncate">
              {data.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
