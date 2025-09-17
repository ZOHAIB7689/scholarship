
export interface Scholarship {
    id: string;
    title: string;
    description: string;
    eligibility: string;
    applicationProcess: string;
    amount: string;
    deadline: string;
    imageUrl: string;
}

const scholarships: Scholarship[] = [
    {
        id: '1',
        title: 'STEM Excellence Scholarship',
        description: 'A prestigious scholarship for students excelling in Science, Technology, Engineering, and Mathematics, aimed at fostering the next generation of innovators.',
        eligibility: 'Must be a full-time undergraduate student in a STEM field with a minimum GPA of 3.7. Must demonstrate a passion for innovation through past projects or research.',
        applicationProcess: 'Submit an online application, a 500-word essay on your career goals, a project portfolio, and two letters of recommendation from faculty members.',
        amount: '$10,000',
        deadline: '2025-12-15',
        imageUrl: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
        id: '2',
        title: 'Future Leaders Grant',
        description: 'Awarded to students who have demonstrated exceptional leadership skills and a strong commitment to community service. We are looking for the leaders of tomorrow.',
        eligibility: 'Open to all majors. Applicants must have a documented history of leadership roles in academic or community organizations and a GPA of 3.2 or higher.',
        applicationProcess: 'Complete the application form, submit a personal essay on a significant leadership experience, and provide one reference from a mentor or supervisor.',
        amount: '$5,000',
        deadline: '2026-01-31',
        imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    },
    {
        id: '3',
        title: 'Creative Arts Award',
        description: 'A scholarship for exceptionally talented students in the fields of visual arts, music, or performing arts, designed to support their creative endeavors.',
        eligibility: 'Must be enrolled in a fine arts program at an accredited institution. A portfolio showcasing your work is the primary requirement.',
        applicationProcess: 'Fill out the online form, upload a high-quality digital portfolio, and provide an artist statement.',
        amount: '$7,500',
        deadline: '2026-02-28',
        imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
];

export const getScholarships = async (): Promise<Scholarship[]> => {
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return scholarships;
};

export const getScholarshipById = async (id: string): Promise<Scholarship | undefined> => {
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return scholarships.find(s => s.id === id);
};
