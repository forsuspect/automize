import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, Hexagon, Database, Zap } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      
      <div className={`container ${styles.container}`}>
        <div className={styles.contentLeft}>
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.title}
          >
            Sistemas Inteligentes para <br/>
            <span className="text-gradient-primary">Empresas do Futuro</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.subtitle}
          >
            Transformamos sua visão em realidade através de automação avançada, 
            sistemas SaaS escaláveis e inteligência artificial de ponta.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.ctaGroup}
          >
            <a href="/#cta" className={`btn btn-primary ${styles.primaryBtn}`}>
              Iniciar Transformação <ArrowRight size={18} />
            </a>
            <a href="/#projects" className={`btn btn-secondary ${styles.secondaryBtn}`}>
              Ver Portfólio
            </a>
          </motion.div>
        </div>

        <div className={styles.contentRight}>
          <motion.div 
            className={styles.visualWrapper}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.glowCircle}></div>
            
            <motion.div 
              className={`${styles.floatingCard} ${styles.card1}`}
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Code size={32} className={styles.cardIcon} />
              <span>Clean Code</span>
            </motion.div>

            <motion.div 
              className={`${styles.floatingCard} ${styles.card2}`}
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            >
              <Cpu size={32} className={styles.cardIcon} />
              <span>Alta Performance</span>
            </motion.div>
            
            <motion.div 
              className={`${styles.floatingCard} ${styles.card3}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
            >
              <Zap size={32} className={styles.cardIcon} />
              <span>Sistemas IA</span>
            </motion.div>

            <div className={styles.techReactor}>
              <div className={styles.reactorRing1}></div>
              <div className={styles.reactorRing2}></div>
              <div className={styles.reactorRing3}>
                <div className={styles.orbitNode}></div>
              </div>
              <div className={styles.reactorCore}>
                <Hexagon size={64} className={styles.coreHex} strokeWidth={1.5} />
                <Database size={24} className={styles.coreInnerIcon} strokeWidth={2} />
                <div className={styles.corePulse}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
