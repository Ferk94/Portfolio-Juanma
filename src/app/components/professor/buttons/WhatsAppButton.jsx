import styles from './WhatsAppButton.module.css';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5491128778436" // ← reemplazá por el número real
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
