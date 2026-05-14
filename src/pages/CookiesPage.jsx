import React from 'react';
import { motion } from 'framer-motion';
import styles from './Page.module.css';

const CookiesPage = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            Política de <span className="text-gradient">Cookies</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            Entenda como utilizamos cookies em nosso site.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.content}
        >
          <h2>O que são Cookies?</h2>
          <p>Cookies são pequenos arquivos de texto que um site, quando visitado, coloca no computador do usuário ou no seu dispositivo móvel através do navegador de internet (browser). A colocação de cookies ajudará o site a reconhecer o seu dispositivo na próxima vez que o visitar.</p>

          <h2>Como utilizamos os Cookies?</h2>
          <p>Utilizamos cookies pelas seguintes razões:</p>
          <ul>
            <li><strong>Cookies Estritamente Necessários:</strong> Essenciais para permitir que você navegue no site e use seus recursos.</li>
            <li><strong>Cookies de Desempenho e Análise:</strong> Coletam informações sobre como os visitantes usam o nosso site, como quais páginas são mais visitadas. Utilizamos ferramentas como o Google Analytics para este fim.</li>
            <li><strong>Cookies de Funcionalidade:</strong> Permitem que o site lembre das escolhas que você faz (como seu nome de usuário, idioma ou a região em que você se encontra) para proporcionar uma experiência mais personalizada.</li>
          </ul>

          <h2>Gerenciamento de Cookies</h2>
          <p>A maioria dos navegadores permite controle sobre os cookies através de suas configurações. Você pode configurar seu navegador para recusar cookies ou alertá-mo quando os cookies estiverem sendo enviados. Note que algumas partes do nosso site podem não funcionar corretamente se você desativar os cookies essenciais.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiesPage;
