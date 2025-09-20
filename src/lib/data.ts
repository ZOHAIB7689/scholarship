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
      imageUrl: "https://images.unsplash.com/photo-1580281657525-3c5af7f2b8da",
    },
    {
      id: "diploma",
      name: "Diploma in Nursing",
      description: "A foundational diploma focusing on core nursing practices and patient care.",
      duration: "3 Years",
      eligibility: "Matric Science",
      imageUrl: "https://images.unsplash.com/photo-1587502536263-3be084f7d1c9",
    },
    {
      id: "midwifery",
      name: "Midwifery",
      description: "Specialized course for maternal and child health nursing.",
      duration: "1 Year",
      eligibility: "Diploma in Nursing",
      imageUrl: "https://images.unsplash.com/photo-1588776814546-ec60f20d79f1",
    },
  ];
}
