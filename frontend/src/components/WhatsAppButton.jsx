import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppButton.css";


export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/03192761156"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-btn__icon">
        <FaWhatsapp />
      </span>
    </a>
  );
}