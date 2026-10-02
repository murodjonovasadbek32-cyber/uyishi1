import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import SpecialDishes from './components/SpecialDishes'
import ChefTestimonials from './components/ChefTestimonials'
import StoryServices from './components/StoryServices'
import Footer from './components/Footer'

export default function App() {
  const [cart, setCart] = useState([])

  const addToCart = (title) => setCart((items) => [...items, title])

  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      <Navbar cartCount={cart.length} />
      <main>
        <Hero />
        <Categories />
        <SpecialDishes onAdd={addToCart} />
        <ChefTestimonials />
        <StoryServices />
      </main>
      <Footer />
    </div>
  )
}