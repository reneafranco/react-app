import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function CertificationsDemo() {
  const certifications = [
    {
      quote:
        "This certification showcases my ability to build and maintain responsive, user-friendly web applications.",
      name: "Front-End Developer",
      designation: "Western Governors University",
      src: "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Focused on troubleshooting, system administration, and IT support, this certification has honed my technical problem-solving skills.",
      name: "Google IT Support Professional",
      designation: "Google",
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Developed expertise in managing projects effectively, from initiation to completion, with a focus on Agile methodologies.",
      name: "Google Project Management",
      designation: "Google",
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return <AnimatedTestimonials testimonials={certifications} />;
}
