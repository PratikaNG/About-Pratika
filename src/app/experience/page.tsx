"use client";

const experiences = [
  {
    role: "Software Engineer",
    company: "Pried.in",
    date: "Jun 2024 - Present",
    points: [
      "Developing and maintaining frontend applications with React.js and modern JavaScript.",
      "Collaborating with cross-functional teams to design and implement scalable features.",
      "Optimized UI components for better performance and responsiveness.",
    ],
  },
  {
    role: "Intern - Software Engineer",
    company: "Pried.in",
    date: "Oct 2023 - Jun 2024",
    points: [
      "Contributed to the development of interactive components with React and Node.js.",
      "Assisted in bug fixes, API integrations, and deployment support.",
      "Gained hands-on experience in full-stack application development.",
    ],
  },
  {
    role: "Associate System Engineer - Trainee",
    company: "Tata Consultancy Services (TCS)",
    date: "Aug 2021 - Dec 2022",
    points: [
      "Trained in full-stack technologies including JavaScript, SQL, and Django.",
      "Supported project teams with backend development and database management.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="p-6">
      <h1 className='text-4xl mb-[4rem] border-b-2 w-fit border-b-pink-600'>Professional Experience</h1>
      <ul className="timeline timeline-vertical">
        {experiences.map((exp, index) => (
          <li key={index}>
            <div className="timeline-start text-lg font-semibold">
              {exp.role}
            </div>
            <div className="timeline-middle">
              <span className="badge badge-primary"></span>
            </div>
            <div className="timeline-end mb-10">
              <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                  <h3 className="text-xl font-bold">
                    {exp.role} - {exp.company}
                  </h3>
                  <p className="text-sm text-gray-300">{exp.date}</p>
                  <ul className="list-disc ml-5 mt-2 text-gray-500">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

