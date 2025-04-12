import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <footer className="container mx-auto px-6 py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        <a 
          href="mailto:your.email@example.com"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors"
        >
          <Mail size={20} />
          Say Hello
        </a>
      </div>
    </footer>
  );
}