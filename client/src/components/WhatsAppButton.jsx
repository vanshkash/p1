// WhatsAppButton.jsx
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918923426667?text=Hi%20ANIL%20DJ%20%26%20EVENTS%2C%20I%20want%20to%20book%20a%20Event!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-10 z-50"
    >
      <img
        src={"/images/WhatsApp.png"}
        alt="WhatsApp Chat"
        className="w-14 h-14 hover:scale-110 transition-transform"
      />
    </a>
  );
};

export default WhatsAppButton;