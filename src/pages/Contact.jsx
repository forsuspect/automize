import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Page.module.css';

const Contact = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            Fale <span className="text-gradient">Conosco</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            Estamos prontos para tirar seu projeto do papel.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.content}
        >
          <h2>Informações de Contato</h2>
          <p>Você pode entrar em contato conosco através dos seguintes canais:</p>
          
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <FaWhatsapp size={20} color="var(--color-primary)" />
              <a href="https://wa.me/5581999374666?text=Ol%C3%A1%2C%20equipe%20da%20Automize!%20Estive%20navegando%20pelo%20site%20de%20voc%C3%AAs%20e%20me%20interessei%20muito%20pelas%20solu%C3%A7%C3%B5es%20digitais.%20Gostaria%20de%20falar%20sobre%20um%20projeto%20e%20entender%20como%20podemos%20trabalhar%20juntos." target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>(81) 9 9937-4666 / (81) 9 9503-1114</a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
              <Mail size={20} color="var(--color-primary)" />
              <a href="mailto:contato@automize.tech" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>contato@automize.tech</a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={20} color="var(--color-primary)" />
              <span>Carpina, Pe - Brasil (Atendimento Global Remoto)</span>
            </li>
          </ul>

          <h2>Horário de Atendimento</h2>
          <p>Segunda a Sexta, das 09h às 18h (Horário de Brasília).</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
