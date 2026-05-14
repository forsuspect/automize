import React from 'react';
import { motion } from 'framer-motion';
import styles from './Page.module.css';

const Careers = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            Trabalhe <span className="text-gradient">Conosco</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            Faça parte de uma equipe apaixonada por tecnologia e inovação.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.content}
        >
          <h2>Por que a Automize?</h2>
          <p>Na Automize, valorizamos a criatividade, o aprendizado contínuo e a colaboração. Oferecemos um ambiente de trabalho flexível, desafios instigantes e a oportunidade de trabalhar com as tecnologias mais modernas do mercado (React, Next.js, IA, etc).</p>
          
          <h2>Vagas Abertas</h2>
          <p>Atualmente não temos vagas abertas, mas estamos sempre em busca de talentos excepcionais.</p>
          
          <h2>Banco de Talentos</h2>
          <p>Envie seu currículo ou portfólio para o nosso banco de talentos através do e-mail: <strong>vagas@automize.tech</strong>. Assim que uma oportunidade com o seu perfil surgir, entraremos em contato!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
