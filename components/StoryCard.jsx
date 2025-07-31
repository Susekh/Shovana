import { createElement } from 'react';
import * as Icons from 'lucide-react';

export default function StoryCard({ name, description, icon }) {
  const LucideIcon = Icons[icon] || Icons.UserRound; 

  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col items-center p-6 text-center">
      <div className="mb-4 text-blue-600">
        {createElement(LucideIcon, { size: 48 })}
      </div>
      <h3 className="text-xl text-gray-400 font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
