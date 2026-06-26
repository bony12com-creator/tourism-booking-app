import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Hero = () => {
  const heroImages = [
  "/images/hero1.jpg",
  "/images/zanzibar.jpg",
  "/images/kilimanjaro.jpg",
  "/images/ngorongoro.jpg",
]

const [currentImage, setCurrentImage] =
  useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) =>
      prev === heroImages.length - 1
        ? 0
        : prev + 1
    )
  }, 5000)

  return () => clearInterval(interval)
}, [])
return (
<section
className="relative h-screen bg-cover bg-center flex items-center"
style={{
  backgroundImage: `url(${heroImages[currentImage]})`,
}}
>
{/* Overlay */} <div className="absolute inset-0 bg-black/60"></div>
  <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
    <div className="max-w-3xl">

      <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
        Discover Tanzania's Beauty
      </span>

      <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight text-white">
        Explore Tanzania &
        <span className="text-amber-400">
          {" "}Zanzibar
        </span>
      </h1>

      <p className="mt-6 text-xl text-gray-200 leading-relaxed">
        Experience breathtaking safaris,
        pristine beaches, Mount Kilimanjaro,
        cultural tours and unforgettable
        adventures across Tanzania.
      </p>

      <div className="flex flex-wrap gap-4 mt-10">

        <Link
  to="/tours"
  className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
>
  Explore Tours
</Link>

        <Link
          to="/contact"
          className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl text-lg font-semibold transition"
        >
          Contact Us
        </Link>

      </div>

      {/* Statistics */}
      <div className="flex flex-wrap gap-8 mt-14 text-white">

        <div>
          <h3 className="text-3xl font-bold">
            500+
          </h3>
          <p className="text-gray-300">
            Happy Travelers
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            50+
          </h3>
          <p className="text-gray-300">
            Tour Packages
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">
            10+
          </h3>
          <p className="text-gray-300">
            Destinations
          </p>
        </div>

      </div>
 </div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">

  {heroImages.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentImage(index)}
      className={`h-4 rounded-full transition-all duration-300 ${
        currentImage === index
          ? "bg-yellow-400 w-10"
          : "bg-white w-4"
      }`}
    />
  ))}

</div>

</div>
</section>

)
}

export default Hero
