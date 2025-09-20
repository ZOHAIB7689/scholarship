// lib/data.ts

export type Program = {
  id: string;
  name: string;
  description: string;
  duration: string;
  eligibility: string;
  imageUrl: string;
};

export async function getPrograms(): Promise<Program[]> {
  return [
    {
      id: "bsn",
      name: "Bachelor of Science in Nursing (BSN)",
      description: "A 4-year degree program preparing students for professional nursing roles.",
      duration: "4 Years",
      eligibility: "Intermediate (Pre-Medical)",
      imageUrl: "/images/nursing.jpg",
    },
    {
      id: "diploma",
      name: "Diploma in Nursing",
      description: "A foundational diploma focusing on core nursing practices and patient care.",
      duration: "3 Years",
      eligibility: "Matric Science",
      imageUrl: "/images/ayaz.jpg",
    },
    {
      id: "midwifery",
      name: "Midwifery",
      description: "Specialized course for maternal and child health nursing.",
      duration: "1 Year",
      eligibility: "Diploma in Nursing",
      imageUrl: "/midwifery.jpg",
    },
  ];
}
