const categories = [
{
icon: "🌍",
name: "",
desc: "View all available tours",
},
{
icon: "🏖",
name: "Beaches",
desc: "Relax on Zanzibar's beautiful beaches",
},
{
icon: "🦁",
name: "Safari",
desc: "Explore Tanzania's wildlife adventures",
},
{
icon: "⛰",
name: "Mountains",
desc: "Climb the famous Mount Kilimanjaro",
},
{
icon: "🎭",
name: "Cultural",
desc: "Experience local traditions and culture",
},
{
icon: "🚤",
name: "Adventure",
desc: "Enjoy exciting outdoor activities",
},
]

const Categories = ({
onSelectCategory,
}) => {
return ( <section className="py-24 bg-white"> <div className="max-w-7xl mx-auto px-6">


    <div className="text-center">

      <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
        Discover Experiences
      </span>

      <h2 className="text-5xl font-bold text-gray-800 mt-5">
        Tour Categories
      </h2>

      <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
        Find the perfect adventure that matches
        your travel style and interests.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() =>
            onSelectCategory(
              category.name
            )
          }
          className="bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 cursor-pointer"
        >

          <div className="text-6xl mb-5">
            {category.icon}
          </div>

          <h3 className="text-2xl font-bold text-gray-800">
            {category.name ||
              "All Tours"}
          </h3>

          <p className="text-gray-500 mt-3">
            {category.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>


)
}

export default Categories
