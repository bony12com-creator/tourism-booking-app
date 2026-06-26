import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/255788716882"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 transition duration-300"
    >
      <FaWhatsapp size={32} />
    </a>
  )
}

export default WhatsAppButton