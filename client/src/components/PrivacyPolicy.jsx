import { FaShieldAlt, FaUserSecret, FaWhatsapp } from 'react-icons/fa';

export default function PrivacyPolicy() {
  return (
    <div className=" mx-auto px-6 py-12  text-gray-100 mt-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="mb-10 text-center">
        <FaShieldAlt className="text-blue-400 text-4xl mx-auto mb-2" />
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-gray-400 mt-2 text-sm">Last updated: September 2025</p>
      </div>

      <section className="mb-8">
        <p className="text-base leading-relaxed">
          At <strong className="text-blue-300">ANIL DJ & EVENTS</strong>, your privacy is our priority. This policy explains how we collect, use, and protect your personal data when you interact with our services.
        </p>
      </section>

      <hr className="border-gray-700 my-6" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-300">1. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Contact details (name, phone number, email)</li>
          <li>Booking preferences and event details</li>
          <li>Messages sent via WhatsApp or our website</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-300">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>To confirm and manage bookings</li>
          <li>To respond to inquiries and support requests</li>
          <li>To improve our services and customer experience</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-300">3. Data Protection</h2>
        <p className="text-gray-300 leading-relaxed">
          We use secure technologies and strict access controls to protect your data from unauthorized access, alteration, or misuse. Your information is never sold or shared without your consent.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-300">4. Your Rights</h2>
        <p className="text-gray-300 leading-relaxed">
          You may request access to, correction of, or deletion of your personal data at any time. We respect your rights and respond promptly to all privacy-related requests.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-300">5. Contact Us</h2>
        <p className="text-gray-300 leading-relaxed mb-2">
          For any questions or concerns about this Privacy Policy, feel free to reach out:
        </p>
        <a
          href="https://wa.me/918923426667?text=Hi%20ANIL%20DJ%20%26%20EVENTS%2C%20I%20have%20a%20question%20about%20your%20privacy%20policy."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
        >
          <FaWhatsapp className="text-xl" />
          +91 89234 26667
        </a>
      </section>
    </div>
  );
}