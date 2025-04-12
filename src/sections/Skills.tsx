interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl border border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
        </div>
        <div className="space-y-2">
          {skills.map((skill) => (
            <div 
              key={skill}
              className="bg-gray-700/50 rounded-lg px-4 py-2 transform transition-all duration-300 hover:bg-gray-700 hover:translate-x-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["JavaScript", "TypeScript", "React"],
      icon: <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">🎨</div>
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "SQL"],
      icon: <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">⚙️</div>
    },
    {
      title: "DevOps",
      skills: ["Docker", "Git", "CI/CD"],
      icon: <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">🚀</div>
    },
    {
      title: "Tools",
      skills: ["VS Code", "Postman", "Figma"],
      icon: <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">🛠️</div>
    }
  ];

  return (
    <section className="container mx-auto px-6 py-16 bg-gray-800/30">
      <h2 className="text-3xl font-bold mb-4 text-center">Technical Expertise</h2>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Specialized in modern web technologies and best practices for building scalable applications
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skillCategories.map((category) => (
          <SkillCard
            key={category.title}
            title={category.title}
            skills={category.skills}
            icon={category.icon}
          />
        ))}
      </div>
    </section>
  );
}