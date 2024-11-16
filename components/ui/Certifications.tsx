import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function CertificationsDemo() {
  const certifications = [
    {
      quote:
        "This certification validates my ability to build responsive, user-friendly, and maintainable web applications.",
      name: "Front-End Developer",
      designation: "Western Governors University",
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Focuses on troubleshooting, system administration, and IT support, enhancing technical problem-solving expertise.",
      name: "Google IT Support ",
      designation: "Google",
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Develops expertise in managing projects, emphasizing Agile methodologies from initiation to successful completion.",
      name: "Google Project Management",
      designation: "Google",
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return <AnimatedTestimonials testimonials={certifications} />;
}
