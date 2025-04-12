import { GraduationCap, Calendar } from 'lucide-react';

export function Education() {
  return (
    <section className="container mx-auto px-6 py-16 bg-gray-800/50">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <GraduationCap size={32} />
        Education
      </h2>
      <div className="space-y-8">
        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
          <p className="text-blue-400">University Name</p>
          <div className="flex items-center gap-2 text-gray-400 mt-1">
            <Calendar size={16} />
            <span>2018 - 2020</span>
          </div>
          <p className="mt-4 text-gray-300">
            Specialized in Machine Learning and Distributed Systems. 
            Thesis on "Scalable Microservices Architecture in Cloud Computing"
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h3 className="text-xl font-semibold">Bachelor of Engineering in Computer Science</h3>
          <p className="text-blue-400">University Name</p>
          <div className="flex items-center gap-2 text-gray-400 mt-1">
            <Calendar size={16} />
            <span>2014 - 2018</span>
          </div>
          <p className="mt-4 text-gray-300">
            Graduated with First Class Honours. 
            Active member of the Computer Science Society and Coding Club.
          </p>
        </div>
      </div>
    </section>
  );
}