import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"
  const images = [
  "/images/zanzibar.jpg",
  "/images/serengeti.jpg",
  "/images/kilimanjaro.jpg",
  "/images/ngorongoro.jpg",
  "/images/mikumi.jpg",
]


const Gallery = () => {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
            Travel Moments
          </span>

          <h2 className="text-5xl font-bold text-gray-800 mt-5">
            Our Gallery
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore unforgettable experiences captured
            across Tanzania and Zanzibar.
          </p>

        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-16"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt=""
                className="h-80 w-full object-cover rounded-3xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  )
}

export default Gallery