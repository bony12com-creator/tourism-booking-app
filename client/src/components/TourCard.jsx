import { Link } from "react-router-dom"

const TourCard = ({
  _id,
  image,
  title,
  location,
  price,
  category,
  averageRating,
  reviewCount,
}) => {
  const fallbackImage =
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1973&auto=format&fit=crop"

  return (
    <Link to={`/tours/${_id}`}>
      <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

        <div className="relative">

          <img
            src={
              image
                ? image.startsWith("/uploads")
                  ? `http://localhost:5000${image}`
                  : image
                : fallbackImage
            }
            alt={title}
            className="h-64 w-full object-cover"
          />

          <div className="absolute top-4 left-4">
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Available
            </span>
          </div>

          <div className="absolute top-4 right-4">
  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-amber-500 font-semibold">

    ⭐ {averageRating || 0}

    {reviewCount > 0 &&
      ` (${reviewCount})`}

  </span>
</div>

        </div>

        <div className="p-6">

          <h2 className="text-2xl font-bold text-gray-800">
            {title}
          </h2>

          <p className="text-gray-500 mt-2">
            📍 {location}
          </p>

          {category && (
            <div className="mt-3">
              <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                {category}
              </span>
            </div>
          )}

          <div className="flex items-center justify-between mt-6">

            <div>
              <p className="text-gray-400 text-sm">
                Starting From
              </p>

              <span className="text-emerald-600 text-3xl font-bold">
                ${price}
              </span>
            </div>

            <button className="bg-emerald-600 text-white px-5 py-3 rounded-xl hover:bg-emerald-700 transition font-semibold">
              Book Now
            </button>

          </div>

        </div>

      </div>
    </Link>
  )
}

export default TourCard