import Image from "next/image";

const testimonials = [
  {
    quote: "I love MetaManager! The product and the design style they use are amazing.",
    name: "Bryan Clark",
    role: "VP of Product, Neon.tech",
    image: "/images/dummy.jpg",
  },
  {
    quote: "MetaManager has completely transformed how we handle our SEO strategies. It's intuitive and powerful!",
    name: "Jane Doe",
    role: "CMO, BrightTech",
    image: "/images/dummy2.png",
  },
  {
    quote: "This website analytics tool is so nice. Now I want to change mine again.",
    name: "Yi Ding",
    role: "Product Designer, OPPO",
    image: "/images/dummy.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.quote}&rdquo</p>
              <div className="flex items-center space-x-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48} // Adjust as needed
                  height={48} // Adjust as needed
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;