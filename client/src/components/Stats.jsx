const Stats = () => {
  return (
    <section className="py-20 bg-emerald-600  text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
        <div>
          <h2 className="text-5xl font-bold">500+</h2>
          <p className="mt-2">Tours</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">10k+</h2>
          <p className="mt-2">Travelers</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">100+</h2>
          <p className="mt-2">Destinations</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">4.9★</h2>
          <p className="mt-2">Ratings</p>
        </div>
      </div>
    </section>
  )
}

export default Stats