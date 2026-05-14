import React from 'react';
import { motion } from 'framer-motion';
import styles from './Page.module.css';

const About = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            Sobre a <span className="text-gradient">Automize</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            Conheça nossa história, nossa missão e o que nos move.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.content}
        >
          <h2>Nossa História</h2>
          <p>A Automize nasceu com um propósito claro: democratizar o acesso à tecnologia de ponta para empresas de todos os tamanhos. Desde nossa fundação, temos trabalhado incansavelmente para transformar ideias em soluções digitais que geram resultados reais.</p>
          
          <h2>Nossa Missão</h2>
          <p>Nossa missão é impulsionar a inovação digital, fornecendo sistemas SaaS, automações inteligentes e soluções em inteligência artificial que otimizam processos e escalam negócios.</p>
          
          <h2>Nossos Valores</h2>
          <ul>
            <li><strong>Inovação Constante:</strong> Estamos sempre na vanguarda das tecnologias.</li>
            <li><strong>Foco no Cliente:</strong> O sucesso dos nossos clientes é o nosso sucesso.</li>
            <li><strong>Excelência Técnica:</strong> Código limpo, sistemas robustos e design de alto impacto.</li>
            <li><strong>Transparência:</strong> Comunicação clara e honesta em todas as etapas do projeto.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
