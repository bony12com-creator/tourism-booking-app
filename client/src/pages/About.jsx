const About = () => {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-5xl font-bold text-center text-emerald-600 mb-8">
          About Tanzania Tours
        </h1>

        <p className="text-lg text-gray-700 leading-8 text-center">
          Tanzania Tours is a tourism booking platform designed to help
          travelers discover the beauty of Tanzania. We provide an easy way
          to explore national parks, mountains, beaches, cultural sites,
          and adventure destinations while making tour booking simple and secure.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">
              Our Mission
            </h2>

            <p className="text-gray-600">
              To promote tourism in Tanzania by connecting visitors with
              unforgettable travel experiences.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">
              Our Vision
            </h2>

            <p className="text-gray-600">
              To become the leading online tourism booking platform in East Africa.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-emerald-600 mb-3">
              Why Choose Us
            </h2>

            <p className="text-gray-600">
              Easy booking, secure payments, trusted destinations and
              professional customer support.
            </p>
          </div>
          
        </div>
        {/* WHAT WE OFFER */}

<div className="mt-20">

  <div className="text-center mb-12">

    <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
      Our Services
    </span>

    <h2 className="text-4xl font-bold mt-4 text-gray-800">
      What We Offer
    </h2>

    <p className="text-gray-600 mt-3">
      We provide unforgettable travel experiences across Tanzania.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">

      <div className="text-5xl mb-4">
        🦁
      </div>

      <h3 className="text-xl font-bold mb-3">
        Safari Tours
      </h3>

      <p className="text-gray-600">
        Explore Serengeti, Ngorongoro and many famous national parks.
      </p>

    </div>

    <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">

      <div className="text-5xl mb-4">
        🏔️
      </div>

      <h3 className="text-xl font-bold mb-3">
        Mountain Climbing
      </h3>

      <p className="text-gray-600">
        Experience Mount Kilimanjaro and Mount Meru adventures.
      </p>

    </div>

    <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">

      <div className="text-5xl mb-4">
        🏝️
      </div>

      <h3 className="text-xl font-bold mb-3">
        Beach Holidays
      </h3>

      <p className="text-gray-600">
        Relax at Zanzibar, Pangani and beautiful coastal destinations.
      </p>

    </div>

    <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">

      <div className="text-5xl mb-4">
        🏛️
      </div>

      <h3 className="text-xl font-bold mb-3">
        Cultural Tours
      </h3>

      <p className="text-gray-600">
        Discover Tanzania's traditions, tribes and historical heritage.
      </p>

    </div>

  </div>
{/* TRAVEL PARTNERS */}

<div className="mt-20 bg-emerald-600 rounded-3xl p-10 text-white">

  <div className="max-w-4xl mx-auto">

    <h2 className="text-4xl font-bold mb-6">
      For Travel Partners & Agencies
    </h2>

    <p className="text-lg leading-8 text-emerald-100 mb-8">
      We welcome travel agencies, tour operators, corporate organizations,
      and international travel partners who wish to work with Tanzania Tours.
      Together, we provide unforgettable travel experiences across Tanzania
      while creating long-term business partnerships.
    </p>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-white/10 p-6 rounded-2xl">
        <h3 className="font-bold text-xl mb-3">
          ✔ Access to Our Tours
        </h3>

        <p>
          Get access to all our safari, mountain climbing,
          beach holidays and cultural tour packages.
        </p>
      </div>

      <div className="bg-white/10 p-6 rounded-2xl">
        <h3 className="font-bold text-xl mb-3">
          ✔ Competitive Partner Pricing
        </h3>

        <p>
          Enjoy attractive trade prices and commission
          opportunities for every successful booking.
        </p>
      </div>

      <div className="bg-white/10 p-6 rounded-2xl">
        <h3 className="font-bold text-xl mb-3">
          ✔ Dedicated Support
        </h3>

        <p>
          Our reservations team is available to assist with
          quotations, itinerary planning and customer support.
        </p>
      </div>

      <div className="bg-white/10 p-6 rounded-2xl">
        <h3 className="font-bold text-xl mb-3">
          ✔ Marketing Resources
        </h3>

        <p>
          Receive promotional materials, destination information
          and quick response for all partnership requests.
        </p>
      </div>

    </div>

    <div className="mt-10 bg-white text-emerald-700 rounded-2xl p-6 text-center">

      <h3 className="text-2xl font-bold mb-3">
        Become Our Travel Partner
      </h3>

      <p className="text-gray-700 mb-2">
        Interested in working with Tanzania Tours?
      </p>

      <p className="font-semibold">
        📧 Email: info@tanzaniatours.com
      </p>

      <p className="font-semibold mt-2">
        📞 Phone: +255 788 716 88
      </p>

    </div>

  </div>

</div>
</div>

      </div>
    </div>
  )
}

export default About