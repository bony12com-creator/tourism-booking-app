const features = [
  {
    icon: "🦁",
    title: "Expert Safari Guides",
    desc: "Professional local guides with deep knowledge of Tanzania's wildlife and culture.",
  },
  {
    icon: "💰",
    title: "Best Price Guarantee",
    desc: "Enjoy unforgettable adventures at competitive and transparent prices.",
  },
  {
    icon: "🛡️",
    title: "Safe & Secure Travel",
    desc: "Your comfort and safety are our top priorities throughout your journey.",
  },
  {
    icon: "🌍",
    title: "Authentic Experiences",
    desc: "Discover real Tanzania through cultural encounters and unique destinations.",
  },
]

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
            Why Travel With Us
          </span>

          <h2 className="text-5xl font-bold text-gray-800 mt-5">
            Why Choose Tanzania Tours
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            We create unforgettable travel experiences across Tanzania
            with trusted guides, premium service and local expertise.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-3xl text-center hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="text-6xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-4">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs