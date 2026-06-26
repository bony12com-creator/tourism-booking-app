import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa"

import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-emerald-400">
              TanzaniaTours
            </h2>

            <p className="text-gray-400 mt-4">
              Discover Tanzania's wildlife,
              beaches, culture and unforgettable
              adventures with trusted local experts.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-gray-400 hover:text-emerald-400"
              >
                Home
              </Link>

              <Link
                to="/tours"
                className="text-gray-400 hover:text-emerald-400"
              >
                Tours
              </Link>

              <Link
                to="/contact"
                className="text-gray-400 hover:text-emerald-400"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>
                📍 Dar es Salaam, Tanzania
              </p>

              <p>
                📞 +255 XXX XXX XXX
              </p>

              <p>
                ✉ info@tanzaniatours.com
              </p>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-bold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>

        <hr className="border-gray-800 my-10" />

        <div className="text-center text-gray-500">

          © {new Date().getFullYear()} TanzaniaTours.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  )
}

export default Footer