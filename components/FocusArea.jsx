import { BookOpen, Stethoscope, Briefcase, Venus } from 'lucide-react';

const icons = {
  Education: BookOpen,
  Health: Stethoscope,
  Livelihood: Briefcase,
  'Women Empowerment': Venus,
};

export default function FocusArea({ title, description }) {
  const Icon = icons[title];

  return (
    <div className="bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <Icon className="h-10 w-10 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
