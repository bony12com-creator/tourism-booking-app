import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchSection = () => {
const navigate = useNavigate()

const [search, setSearch] =
useState("")

const [category, setCategory] =
useState("")

const handleSearch = () => {
navigate(
`/tours?search=${search}&category=${category}`
)
}

return ( <section className="bg-white py-12 shadow-lg relative z-10 -mt-20 mx-6 rounded-2xl"> <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-3 gap-6">

      <input
        type="text"
        placeholder="Search destination..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="border p-4 rounded-xl outline-none"
      />

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        className="border p-4 rounded-xl outline-none"
      >
        <option value="">
          All Categories
        </option>

        <option value="Beaches">
          Beaches
        </option>

        <option value="Safari">
          Safari
        </option>

        <option value="Mountains">
          Mountains
        </option>

        <option value="Cultural">
          Cultural
        </option>

        <option value="Adventure">
          Adventure
        </option>

      </select>

      <button
        onClick={handleSearch}
        className="bg-emerald-600 text-white rounded-xl hover:bg-emerald-700"
      >
        Search Tours
      </button>

    </div>

  </div>
</section>


)
}

export default SearchSection
