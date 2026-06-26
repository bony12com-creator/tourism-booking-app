const CTASection = () => {
  return (
    <section className="py-24 bg-cover bg-center text-white text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1974&auto=format&fit=crop')",
      }}
    >
      <div className="bg-black/50 py-20 px-6">
        <h2 className="text-6xl font-bold">
          Ready For Your Next Adventure?
        </h2>

        <p className="mt-6 text-xl">
          Book unforgettable experiences in Tanzania today.
        </p>

        <button className="bg-emerald-700 hover:bg-amber-600 px-10 py-4 rounded-xl text-xl font-semibold">
          Book Now
        </button>
      </div>
    </section>
  )
}

export default CTASection