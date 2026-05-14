import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';

export const projects = [
  {
    title: 'SaaS de Contabilidade',
    category: 'Sistema Web (SaaS)',
    desc: 'Plataforma em nuvem completa para gestão contábil, integrando área do cliente, fluxos automatizados e dashboards.',
    tech: ['React', 'Framer Motion', 'CSS Modules'],
    image: '/img/bv-saas.jpeg',
    color: '#0070f3'
  },
  {
    title: 'Landing Page Rhayane Designer',
    category: 'Landing Page',
    desc: 'Página de vendas premium, design focado em alta conversão com visual moderno, portfólio interativo e ultra-performance.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    image: '/img/web-rhay.jpeg',
    color: '#7928ca'
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.title}
          >
            Nossos <span className="text-gradient">Projetos</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={styles.subtitle}
          >
            Conheça alguns dos nossos trabalhos recentes e descubra o padrão de qualidade Automize.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={styles.projectCard}
            >
              <div className={styles.projectImageContainer}>
                <img src={project.image} alt={project.title} className={styles.projectImg} />
                <div className={styles.overlay}>
                  <button className={styles.actionBtn}><ExternalLink size={20} /></button>
                  <button className={styles.actionBtn}><FaGithub size={20} /></button>
                </div>
              </div>

              <div className={styles.projectInfo}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>
                <div className={styles.techList}>
                  {project.tech.map((t, i) => (
                    <span key={i} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.viewMore}>
          <Link to="/portfolio" className={`btn btn-secondary ${styles.viewMoreBtn}`}>
            Ver todos os projetos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
