import React from 'react';

// Example research papers (you can replace these with actual links and titles)
const researchPapers = [
  {
    title: 'Quantum Computing: An Introduction',
    link: 'https://cds.cern.ch/record/383367/files/p165.pdf',
  },
  {
    title: 'Artificial Intelligence in Healthcare',
    link: 'https://medicalaffairs.org/vision-gen-ai/?gad_source=1&gclid=Cj0KCQiA8q--BhDiARIsAP9tKI0dyFJTcP1hStFCSXiy9cAHVvzjp5C78RPtQQib46PwhGUwD0Rjf9UaAu6NEALw_wcB',
  },
  {
    title: 'Blockchain Technology and its Applications',
    link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4121824',
  },
  {
    title: 'Machine Learning Algorithms for Data Science',
    link: 'https://link.springer.com/article/10.1007/s42979-021-00592-x',
  },
  {
    title: 'The Future of Renewable Energy Sources',
    link: 'https://www.researchgate.net/publication/317699548_Renewable_Energy_The_Future_of_Bangladesh',
  },
  {
    title: 'Cybersecurity in the Modern World',
    link: 'https://www.researchgate.net/publication/352477690_Research_Paper_on_Cyber_Security',
  },
  {
    title: 'The Impact of 5G on Modern Networks',
    link: 'https://www.researchgate.net/publication/377858983_The_Impact_of_5G_Technology_on_Communication_Infrastructure',
  },
  {
    title: 'Neural Networks in Deep Learning',
    link: 'https://www.researchgate.net/publication/330911496_Neural_networks_and_deep_learning_a_brief_introduction',
  },
];

const ResearchPapers = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-6">Recommended Research Papers</h2>
        <p className="text-lg text-gray-600 mb-6">
          Below are some of the most insightful research papers published by our talented college students. Explore these groundbreaking topics to stay updated with the latest advancements.
        </p>

        {/* Research Papers List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10">
          {researchPapers.map((paper, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-sm font-semibold text-teal-700 mb-2">{paper.title}</h3>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:underline"
              >
                Read Full Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchPapers;
