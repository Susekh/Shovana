import StoryCard from './StoryCard';

export default function StoriesSection() {
  const stories = [
    {
      name: 'Anita’s Journey to Education',
      description:
        'Anita, a bright young girl from a rural village, now attends school regularly thanks to our education sponsorship program.',
      icon: 'BookOpen',
    },
    {
      name: 'Ravi’s Healthcare Revival',
      description:
        'Ravi received life-saving treatment and ongoing care through our health initiative, ensuring a brighter future.',
      icon: 'HeartPulse',
    },
    {
      name: 'Self-Reliance Through Skill Training',
      description:
        'Many women like Sunita have gained financial independence after completing our vocational training programs.',
      icon: 'BadgeCheck',
    },
  ];

  return (
    <section id='stories' className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Stories of Hope
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Real journeys, real change — empowered lives through our community-driven initiatives.
        </p>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
          {stories.map((story, idx) => (
            <StoryCard key={idx} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
}
