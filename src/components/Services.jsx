import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cloud, Zap, BrainCircuit, Layout, MessageSquareCode } from 'lucide-react';
import styles from './Services.module.css';

const servicesData = [
  {
    icon: <Monitor />,
    title: 'Criação de Sites',
    description: 'Landing pages e institucionais de alta conversão com design premium e performance otimizada.'
  },
  {
    icon: <Cloud />,
    title: 'Sistemas SaaS',
    description: 'Aplicações web completas e escaláveis, desenvolvidas com as tecnologias mais modernas do mercado.'
  },
  {
    icon: <Zap />,
    title: 'Automação de Processos',
    description: 'Elimine tarefas manuais e aumente a produtividade da sua equipe com automações inteligentes.'
  },
  {
    icon: <BrainCircuit />,
    title: 'Inteligência Artificial',
    description: 'Integrações com IA para otimizar fluxos de trabalho e gerar insights valiosos para seu negócio.'
  },
  {
    icon: <Layout />,
    title: 'Landing Pages',
    description: 'Páginas focadas em conversão, perfeitas para lançamentos e campanhas de marketing digital.'
  },
  {
    icon: <MessageSquareCode />,
    title: 'Bots e Integrações',
    description: 'Chatbots inteligentes e integração entre diferentes plataformas para fluxo de dados perfeito.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.title}
          >
            Nossas <span className="text-gradient">Soluções</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            Tecnologia de ponta para impulsionar o crescimento do seu negócio
          </motion.p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.card}>
              <div className={styles.cardGlow}></div>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
