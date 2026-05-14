import React from 'react';
import { motion } from 'framer-motion';
import styles from './Page.module.css';

const Terms = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            Termos de <span className="text-gradient">Uso</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.content}
        >
          <h2>1. Aceitação dos Termos</h2>
          <p>Ao acessar e usar os serviços e o site da Automize, você concorda em cumprir e se vincular a estes Termos de Uso. Se você não concordar com alguma parte destes termos, não deverá utilizar nossos serviços.</p>

          <h2>2. Serviços Oferecidos</h2>
          <p>A Automize atua no desenvolvimento de sistemas web (SaaS), criação de sites institucionais, landing pages, automação de processos e integração de soluções baseadas em Inteligência Artificial.</p>

          <h2>3. Propriedade Intelectual</h2>
          <p>Todo o conteúdo presente neste site, incluindo, mas não se limitando a, textos, gráficos, logotipos, ícones de botões, imagens, clipes de áudio, downloads digitais e compilações de dados, é de propriedade exclusiva da Automize ou de seus fornecedores de conteúdo, protegido pelas leis de direitos autorais brasileiras e internacionais.</p>

          <h2>4. Limitação de Responsabilidade</h2>
          <p>A Automize não será responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes resultantes do uso ou da incapacidade de usar nossos serviços ou site.</p>

          <h2>5. Alterações nos Termos</h2>
          <p>Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. Quaisquer alterações entrarão em vigor imediatamente após a publicação no site. É sua responsabilidade revisar os Termos de Uso periodicamente.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
