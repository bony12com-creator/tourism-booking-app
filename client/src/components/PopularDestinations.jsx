const destinations = [
  {
    name: "Zanzibar",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1973&auto=format&fit=crop",
  },

  {
    name: "Serengeti",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1974&auto=format&fit=crop",
  },

  {
    name: "Kilimanjaro",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1974&auto=format&fit=crop",
  },
]

const PopularDestinations = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          Popular Destinations
        </h2>

<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-96 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="text-white text-3xl font-bold">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularDestinations