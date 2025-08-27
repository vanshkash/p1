const CallButton = () => {
  return (
    <a
      href="tel:+918923426667"
      className="fixed bottom-36 right-10 z-50"
      rel="noopener noreferrer"
    >
      <img
        src="/images/callimage.png"
        alt="Call ANIL DJ & EVENTS"
        className="w-14 h-14 hover:scale-110 transition-transform"
      />
    </a>
  );
};

export default CallButton;