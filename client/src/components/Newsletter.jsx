const Newsletter = () => {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div
          className="relative overflow-hidden rounded-[40px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/background.jpg')",
          }}
        >

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 p-12 md:p-20 text-center">

            <span className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Stay Updated
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-white mt-6">
              Get Travel Deals &
              Updates
            </h2>

            <p className="text-gray-200 mt-6 max-w-2xl mx-auto text-lg">
              Subscribe to receive exclusive
              safari offers, travel tips and
              updates from Tanzania & Zanzibar.
            </p>

            <div className="max-w-xl mx-auto mt-10 flex flex-col md:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-2xl outline-none"
              />

              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold transition">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Newsletter