import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function CertificationsDemo() {
  const certifications = [
    {
      quote:
        "This certification validates my ability to build responsive, user-friendly, and maintainable web applications.",
      name: "Front-End Developer",
      designation: "Western Governors University",
      src: "/assets/frontend-logo.png",
    },
    {
      quote:
        "Focuses on troubleshooting, system administration, and IT support, enhancing technical problem-solving expertise.",
      name: "Google IT Support ",
      designation: "Google",
      src: "/assets/it-support.png",
    },
    {
      quote:
        "Develops expertise in managing projects, emphasizing Agile methodologies .",
      name: "Google Project Management",
      designation: "Google",
      src: "/assets/projectM.png",
    },
  ];

  return <AnimatedTestimonials testimonials={certifications} />;
}
