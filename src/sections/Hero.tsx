import { Github, Mail, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <header className="container mx-auto px-6 py-16 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-400">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer passionate about building exceptional digital experiences
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" 
             className="p-2 hover:text-blue-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
             className="p-2 hover:text-blue-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com"
             className="p-2 hover:text-blue-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </header>
  );
}