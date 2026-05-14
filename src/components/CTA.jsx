import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section id="cta" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.card}
        >
          <div className={styles.glowBg}></div>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Pronto para transformar sua <br/>
              <span className="text-gradient">presença digital?</span>
            </h2>
            <p className={styles.subtitle}>
              Vamos conversar sobre o seu projeto. Nossa equipe de especialistas está pronta 
              para criar a solução perfeita para o seu negócio.
            </p>
            
            <div className={styles.actions}>
              <a 
                href="https://wa.me/5581999374666?text=Ol%C3%A1%2C%20equipe%20da%20Automize!%20Estive%20navegando%20pelo%20site%20de%20voc%C3%AAs%20e%20me%20interessei%20muito%20pelas%20solu%C3%A7%C3%B5es%20digitais.%20Gostaria%20de%20falar%20sobre%20um%20projeto%20e%20entender%20como%20podemos%20trabalhar%20juntos." 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.whatsappBtn}
              >
                <FaWhatsapp size={24} />
                Falar no WhatsApp
              </a>
              <span className={styles.contactInfo}>
                Ou envie um email para <strong>contato@automize.tech</strong>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
