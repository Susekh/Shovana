import FocusArea from './FocusArea';

export default function FocusSection() {
  const areas = [
    {
      title: 'Education',
      description:
        'Empowering children and youth through quality education and learning opportunities.',
    },
    {
      title: 'Health',
      description:
        'Providing healthcare support, awareness, and access to underserved communities.',
    },
    {
      title: 'Livelihood',
      description:
        'Supporting families with vocational training and employment opportunities.',
    },
    {
      title: 'Women Empowerment',
      description:
        'Uplifting women with skill-building programs, legal aid, and self-help groups.',
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Our Areas of Focus
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area, idx) => (
            <FocusArea key={idx} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
}
