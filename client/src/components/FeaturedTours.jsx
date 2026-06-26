import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import API from "../services/api"
import TourCard from "./TourCard"

const FeaturedTours = ({
selectedCategory,
}) => {
const [tours, setTours] = useState([])
const [loading, setLoading] =
useState(true)
const [searchParams] =
  useSearchParams()

const search =
  searchParams.get("search") || ""

const categoryFromUrl =
  searchParams.get("category") || ""

useEffect(() => {
const fetchTours = async () => {
try {
const response =
await API.get("/tours")

    setTours(response.data)
  } catch (error) {
    console.error(
      "Error fetching tours:",
      error
    )
  } finally {
    setLoading(false)
  }
}

fetchTours()

}, [])

if (loading) {
return ( <div className="text-center py-20 text-2xl font-semibold">
Loading Tours... </div>
)
}

const filteredTours = tours.filter(
  (tour) => {
    const matchesCategory =
      selectedCategory
        ? tour.category ===
          selectedCategory
        : categoryFromUrl
        ? tour.category ===
          categoryFromUrl
        : true

    const matchesSearch =
      search === ""
        ? true
        : tour.title
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          tour.city
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          tour.category
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            )

    return (
      matchesCategory &&
      matchesSearch
    )
  }
)
return ( <section className="py-24 bg-gray-50"> <div className="max-w-7xl mx-auto px-6">

    <div className="flex justify-center mb-4">
      <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
        Popular Destinations
      </span>
    </div>

    <h2 className="text-5xl font-bold text-center text-gray-800">
      Explore Our
      <span className="text-emerald-600">
        {" "}Featured Tours
      </span>
    </h2>

    <p className="text-center text-gray-500 mt-6 text-lg max-w-2xl mx-auto">
      Discover breathtaking safaris,
      pristine beaches, cultural
      experiences and unforgettable
      adventures across Tanzania.
    </p>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

      {filteredTours.map((tour) => (
  <TourCard
  key={tour._id}
  _id={tour._id}
  title={tour.title}
  location={tour.city}
  price={tour.price}
  image={tour.photo}
  category={tour.category}
  averageRating={
    tour.averageRating
  }
  reviewCount={
    tour.reviewCount
  }
/>
      ))}

    </div>

  </div>
</section>

)
}

export default FeaturedTours
