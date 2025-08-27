import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingForm from './components/contactform';
import ContactSection from './components/contactSection';
import FooterSection from './components/footerSection';
import GallerySection from './components/gallery';
import HomePage from './components/homePage';
import Navbar from './components/navbar';
import ServicesPage from './components/servicePage';
import WhatsAppButton from './components/WhatsAppButton';
import CallButton from './components/CallButton';
import TestimonialSlider from './components/TestimonialSlider';
import ScrollToTop from './components/ScrollToTop';
import CustomEventPackages from "./components/CustomEventPackages";
import DJOnWheels from './components/DJOnWheels';
import WeddingBaraatPage from './components/WeddingBaraatPage';
import LedDisplaySetup from './components/LedDisplaySetup';
import DjSetup from './components/DjSetup';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* ✅ Scroll to Top */}
      <Navbar />
      <CallButton />
      <WhatsAppButton />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <HomePage />
            <ServicesPage />
            <GallerySection />
            <ContactSection />
            <section className="relative py-24 px-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 z-0" />
              <div className="relative z-10">
                <h2 className="text-5xl font-extrabold text-center text-indigo-700 mb-14 drop-shadow-lg">
                  Client Reviews
                </h2>
                <TestimonialSlider />
              </div>
            </section>
            <FooterSection />
          </>
        } />

        {/* Service Page */}
        <Route path="/services" element={
          <>
            <ServicesPage showHelmet={true} />
            <FooterSection />
          </>
        } />
        <Route path="/services/custom-event-packages" element={
          <>
            <CustomEventPackages />
            <FooterSection />
          </>
        } />
        <Route path="/services/dj-on-wheels" element={
          <>
            <DJOnWheels />
            <FooterSection />
          </>
        } />
        <Route path="/services/wedding-DJ-sound" element={
          <>
            <WeddingBaraatPage />
            <FooterSection />
          </>
        } />
        <Route path="/services/led-display-setup" element={
          <>
            <LedDisplaySetup />
            <FooterSection />
          </>
        } />
        <Route path="/services/Professional-DJ-Setup" element={
          <>
            <DjSetup />
            <FooterSection />
          </>
            } />


        {/* Gallery Page */}
        <Route path="/gallery" element={
          <>
            <GallerySection showHelmet={true} />
            <FooterSection />
          </>
        } />

        {/* Contact Page */}
        <Route path="/contact" element={
          <>
            <ContactSection showHelmet={true} />
            <FooterSection />
          </>
        } />

        {/* Reviews Page */}
        <Route path="/reviews" element={
          <>
            <section className="relative py-24 px-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 z-0" />
              <div className="relative z-10">
                <h2 className="text-5xl font-extrabold text-center text-indigo-700 mb-14 drop-shadow-lg">
                  Client Reviews
                </h2>
                <TestimonialSlider />
              </div>
            </section>
            <FooterSection />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;