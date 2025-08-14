// import { useState } from 'react'
import './App.css'
import BookingForm from './components/contactform'
// import ContactSection from './contactSection'
import ContactSection from "./components/contactSection"
import FooterSection from './components/footerSection'
import GallerySection from './components/gallery'
import HomePage from './components/homePage'
import Navbar from './components/navbar'
import ServicesPage from './components/servicePage'
import WhatsAppButton from './components/WhatsAppButton';
import TestimonialSlider from './components/TestimonialSlider';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className="text-3xl font-bold bg-blue-200 text-center">
      ANIL DJ & EVENTS
    </h1>   */}
    <Navbar/>
    <WhatsAppButton/>
  <HomePage/>
  <ServicesPage/>
    {/* <BookingForm/> */}
    <GallerySection/>
    <ContactSection/>
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 z-0" />
      
      <div className="relative z-10">
        <h2 className="text-5xl font-extrabold text-center text-indigo-700 mb-14 drop-shadow-lg">
          Client Testimonials
        </h2>
        <TestimonialSlider />
      </div>
    </section>

    <FooterSection/>

    </>
  )
}

export default App
