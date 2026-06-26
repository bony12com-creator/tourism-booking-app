import { useState } from "react"

import Hero from "../components/Hero"
import SearchSection from "../components/SearchSection"
import Categories from "../components/Categories"
import FeaturedTours from "../components/FeaturedTours"
import WhyChooseUs from "../components/WhyChooseUs"
import Gallery from "../components/Gallery"
import Testimonials from "../components/Testimonials"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Home = () => {
const [selectedCategory, setSelectedCategory] =
useState("")

return (
<> <Hero />
  <SearchSection />

  <Categories
    onSelectCategory={
      setSelectedCategory
    }
  />

  <FeaturedTours
    selectedCategory={
      selectedCategory
    }
  />
  <WhyChooseUs />

  <Gallery />

  <Testimonials />

  <Newsletter />

  <Footer />
</>


)
}

export default Home
