import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

const testimonials = [
  {
    name: "John Smith",
    country: "USA",
    review:
      "Amazing safari experience. Everything was perfectly organized.",
  },
  {
    name: "Sarah Johnson",
    country: "UK",
    review:
      "Zanzibar beaches were breathtaking. Highly recommended!",
  },
  {
    name: "David Brown",
    country: "Canada",
    review:
      "Professional guides and unforgettable wildlife encounters.",
  },
]

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold">
            Happy Travelers
          </span>

          <h2 className="text-5xl font-bold text-gray-800 mt-5">
            What Our Guests Say
          </h2>

        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          slidesPerView={1}
          className="mt-16"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="max-w-3xl mx-auto bg-gray-50 p-10 rounded-3xl shadow-lg text-center">

                <div className="text-amber-500 text-2xl">
                  ⭐⭐⭐⭐⭐
                </div>

                <p className="text-xl text-gray-600 mt-6 italic">
                  "{item.review}"
                </p>

                <h3 className="mt-6 text-2xl font-bold text-gray-800">
                  {item.name}
                </h3>

                <p className="text-gray-500">
                  {item.country}
                </p>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  )
}

export default Testimonials