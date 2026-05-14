import React from 'react';
import { motion } from 'framer-motion';
import styles from './Page.module.css';

const Privacy = () => {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.title}
          >
            Política de <span className="text-gradient">Privacidade</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            Como protegemos seus dados e sua privacidade.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.content}
        >
          <h2>1. Coleta de Informações</h2>
          <p>Coletamos informações pessoais que você nos fornece voluntariamente ao entrar em contato conosco, preencher formulários no site ou contratar nossos serviços. Isso pode incluir seu nome, endereço de e-mail, número de telefone e detalhes da empresa.</p>

          <h2>2. Uso das Informações</h2>
          <p>As informações coletadas são utilizadas para:</p>
          <ul>
            <li>Fornecer e melhorar nossos serviços;</li>
            <li>Responder às suas solicitações e dúvidas;</li>
            <li>Enviar comunicações relacionadas aos projetos ou, com o seu consentimento, materiais de marketing;</li>
            <li>Cumprir obrigações legais.</li>
          </ul>

          <h2>3. Compartilhamento de Dados</h2>
          <p>A Automize não vende, aluga ou compartilha suas informações pessoais com terceiros para fins de marketing sem o seu consentimento explícito. Podemos compartilhar dados com parceiros de tecnologia (provedores de hospedagem, gateways de pagamento) estritamente necessários para a prestação dos serviços contratados.</p>

          <h2>4. Segurança dos Dados</h2>
          <p>Implementamos medidas de segurança técnicas e organizacionais padrão do setor para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>

          <h2>5. Seus Direitos (LGPD)</h2>
          <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de solicitar o acesso, a correção, a atualização ou a exclusão de suas informações pessoais. Para exercer esses direitos, entre em contato conosco através do e-mail <strong>privacidade@automize.tech</strong>.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
