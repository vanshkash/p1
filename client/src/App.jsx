import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LazyLoadSection from './components/LazyLoadSection';
import { Player } from '@lottiefiles/react-lottie-player';
import barLoader from '../bar-loader.json';

// Lazy-loaded components
const AdminLogin = lazy(() => import('./components/admin/AdminLogin'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const AdminDashboard = lazy(() => import('./components/admin/AdminDashboard'));
const BookingForm = lazy(() => import('./components/contactform'));
const ContactSection = lazy(() => import('./components/contactSection'));
const FooterSection = lazy(() => import('./components/footerSection'));
const GallerySection = lazy(() => import('./components/gallery'));
const HomePage = lazy(() => import('./components/homePage'));
const Navbar = lazy(() => import('./components/navbar'));
const ServicesPage = lazy(() => import('./components/servicePage'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));
const CallButton = lazy(() => import('./components/CallButton'));
const TestimonialSlider = lazy(() => import('./components/TestimonialSlider'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const CustomEventPackages = lazy(() => import("./components/CustomEventPackages"));
const DJOnWheels = lazy(() => import('./components/DJOnWheels'));
const WeddingBaraatPage = lazy(() => import('./components/WeddingBaraatPage'));
const LedDisplaySetup = lazy(() => import('./components/LedDisplaySetup'));
const DjSetup = lazy(() => import('./components/DjSetup'));
const StatsSection = lazy(() => import("./components/StatsSection"));
const AboutPage = lazy(() => import('./components/AboutPage'));

function App() {
  return (

    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <CallButton />
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={
          <>
            <Suspense
              fallback={
                <div className="flex flex-col items-center justify-center h-screen 
                    bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500
                    animate-gradient">
                  {/* Loader */}
                  <Player
                    autoplay
                    loop
                    src={barLoader}
                    style={{ height: "120px", width: "120px" }}
                  />

                  {/* Text */}
                  <span className="mt-6 text-white text-xl font-bold drop-shadow-lg animate-pulse">
                    Loading Page, please wait...
                  </span>
                </div>
              }
            >

              <HomePage />
            </Suspense>
            <LazyLoadSection><ServicesPage /></LazyLoadSection>
            <LazyLoadSection><GallerySection /></LazyLoadSection>
            <LazyLoadSection><ContactSection /></LazyLoadSection>
            <LazyLoadSection height="60vh"><TestimonialSlider /></LazyLoadSection>
            <LazyLoadSection height="50vh"><StatsSection /></LazyLoadSection>
            <LazyLoadSection><AboutPage /></LazyLoadSection>
            <FooterSection />
            {/* <LazyLoadSection height="220px"><FooterSection /></LazyLoadSection> */}
          </>
        } />

        {/* Route-level pages (no need for LazyLoadSection here) */}
        <Route path="/services" element={<><LazyLoadSection><ServicesPage showHelmet={true} /><FooterSection /></LazyLoadSection></>} />
        <Route path="/services/custom-event-packages" element={<><LazyLoadSection><CustomEventPackages /><FooterSection /></LazyLoadSection></>} />
        <Route path="/services/dj-on-wheels" element={<><LazyLoadSection><DJOnWheels /><FooterSection /></LazyLoadSection></>} />
        <Route path="/services/wedding-DJ-sound" element={<><LazyLoadSection><WeddingBaraatPage /><FooterSection /></LazyLoadSection></>} />
        <Route path="/services/led-display-setup" element={<><LazyLoadSection><LedDisplaySetup /><FooterSection /></LazyLoadSection></>} />
        <Route path="/services/Professional-DJ-Setup" element={<><LazyLoadSection><DjSetup /><FooterSection /></LazyLoadSection></>} />
        <Route path="/gallery" element={<><LazyLoadSection><GallerySection showHelmet={true} /><FooterSection /></LazyLoadSection></>} />
        <Route path="/contact" element={<><LazyLoadSection><ContactSection showHelmet={true} /><FooterSection /></LazyLoadSection></>} />
        <Route path="/about" element={<><LazyLoadSection><AboutPage showHelmet={true} /><FooterSection /></LazyLoadSection></>} />
        <Route path="/reviews" element={<><TestimonialSlider /><FooterSection /></>} />
        <Route path="/admin" element={<LazyLoadSection><AdminDashboard /></LazyLoadSection>} />
        <Route path="/admin/login" element={<LazyLoadSection><AdminLogin /></LazyLoadSection>} />
        <Route path="/privacy-policy" element={<><LazyLoadSection><PrivacyPolicy /></LazyLoadSection><FooterSection /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;