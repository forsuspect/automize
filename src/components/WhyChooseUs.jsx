import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, ShieldCheck, Clock } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const features = [
  {
    icon: <Target />,
    title: 'Foco em Conversão',
    desc: 'Design e copy otimizados para transformar visitantes em clientes.'
  },
  {
    icon: <TrendingUp />,
    title: 'Alta Performance',
    desc: 'Tempos de carregamento ultrarrápidos e código otimizado para SEO.'
  },
  {
    icon: <ShieldCheck />,
    title: 'Segurança Avançada',
    desc: 'Proteção de dados e infraestrutura robusta para sua tranquilidade.'
  },
  {
    icon: <Clock />,
    title: 'Entrega Ágil',
    desc: 'Metodologias modernas para garantir prazos sem perder a qualidade.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={styles.title}
            >
              Por que escolher a <span className="text-gradient">Automize?</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={styles.subtitle}
            >
              Não somos apenas uma agência, somos seu parceiro tecnológico estratégico. 
              Entregamos soluções de alto impacto que impulsionam o seu crescimento no mercado digital.
            </motion.p>

            <div className={styles.featuresList}>
              {features.map((feat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className={styles.featureItem}
                >
                  <div className={styles.iconBox}>{feat.icon}</div>
                  <div>
                    <h4 className={styles.featTitle}>{feat.title}</h4>
                    <p className={styles.featDesc}>{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={styles.statsWrapper}
          >
            <div className={styles.glassCard}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>+5</span>
                <span className={styles.statLabel}>Projetos Entregues</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>94%</span>
                <span className={styles.statLabel}>Clientes Satisfeitos</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNum}>24/7</span>
                <span className={styles.statLabel}>Suporte Especializado</span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
