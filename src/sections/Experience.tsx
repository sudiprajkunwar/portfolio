import { Building2, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <section className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
        <Building2 size={32} />
        Professional Experience
      </h2>
      <div className="space-y-12">
        <div className="bg-gray-800 rounded-lg p-8">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=800&auto=format&fit=crop&q=60"
              alt="Company Logo"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
              <p className="text-blue-400">Tech Company One</p>
              <div className="flex items-center gap-2 text-gray-400 mt-1">
                <Calendar size={16} />
                <span>2022 - Present</span>
              </div>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Led development of microservices architecture serving 1M+ users</li>
            <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
            <li>Mentored junior developers and conducted technical interviews</li>
          </ul>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60"
              alt="Company Logo"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-xl font-semibold">Software Developer</h3>
              <p className="text-blue-400">Tech Company Two</p>
              <div className="flex items-center gap-2 text-gray-400 mt-1">
                <Calendar size={16} />
                <span>2020 - 2022</span>
              </div>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Developed and maintained multiple React-based web applications</li>
            <li>Optimized database queries resulting in 40% performance improvement</li>
            <li>Collaborated with design team to implement responsive UI/UX</li>
          </ul>
        </div>
      </div>
    </section>
  );
}