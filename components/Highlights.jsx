import Image from "next/image";

export default function Highlights() {
  const highlights = [
    {
      title: "10,000+ Lives Impacted",
      description:
        "Through our various outreach programs, we've reached over ten thousand individuals and families in need.",
      image: "/images/lives-impacted.jpg",
    },
    {
      title: "50+ Active Volunteers",
      description:
        "Our dedicated team of volunteers tirelessly works to make a difference in their communities every day.",
      image: "/images/volunteers.jpg",
    },
    {
      title: "20+ Ongoing Projects",
      description:
        "From education to healthcare, we run multiple projects that uplift lives across rural and urban areas.",
      image: "/images/projects.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-12">
          Our Impact Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center min-h-[420px] max-h-[500px]"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                quality={80}
                className="w-full h-48 object-cover rounded-md mb-5"
              />
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
