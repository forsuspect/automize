import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Carlos Mendes',
    role: 'CEO, TechFlow SaaS',
    content: 'A Automize transformou completamente nossa plataforma. A reestruturação da arquitetura e o novo design UI/UX aumentaram nossa retenção de clientes em 45% logo no primeiro mês.',
    image: 'https://i.pravatar.cc/150?img=11'
  },
  {
    name: 'Sarah Rodrigues',
    role: 'Diretora de Marketing, Elevate',
    content: 'A landing page que desenvolveram superou todas as expectativas. As animações fluidas e a otimização de conversão fizeram nosso custo de aquisição cair pela metade.',
    image: 'https://i.pravatar.cc/150?img=5'
  },
  {
    name: 'Ricardo Gomes',
    role: 'Fundador, DataSync',
    content: 'O nível de profissionalismo e entendimento técnico é absurdo. A integração de IA que propuseram automatizou tarefas que nos custavam dezenas de horas semanais.',
    image: 'https://i.pravatar.cc/150?img=33'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.section}>
      <div className={styles.bgElements}>
        <div className={styles.glowTop}></div>
        <div className={styles.glowBottom}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.title}
          >
            O que <span className="text-gradient">dizem sobre nós</span>
          </motion.h2>
        </div>

        <div className={styles.carouselWrapper}>
          <button onClick={prevTestimonial} className={`${styles.navBtn} ${styles.prevBtn}`}>
            <ChevronLeft size={24} />
          </button>

          <div className={styles.cardContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className={styles.testimonialCard}
              >
                <Quote className={styles.quoteIcon} size={40} />
                <p className={styles.content}>"{testimonials[currentIndex].content}"</p>
                <div className={styles.author}>
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className={styles.avatar} />
                  <div>
                    <h4 className={styles.authorName}>{testimonials[currentIndex].name}</h4>
                    <span className={styles.authorRole}>{testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={nextTestimonial} className={`${styles.navBtn} ${styles.nextBtn}`}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.indicators}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`${styles.indicator} ${idx === currentIndex ? styles.active : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
