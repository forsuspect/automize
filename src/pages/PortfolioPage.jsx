import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import pageStyles from './Page.module.css';
import projectStyles from '../components/Projects.module.css';
import { projects } from '../components/Projects';

const PortfolioPage = () => {
  return (
    <div className={pageStyles.page}>
      <div className="container">
        <div className={pageStyles.header}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={pageStyles.title}
          >
            Nosso <span className="text-gradient">Portfólio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={pageStyles.subtitle}
          >
            Explore nossos cases de sucesso e projetos de alto impacto criados sob medida para nossos clientes.
          </motion.p>
        </div>

        <div className={projectStyles.grid} style={{ marginTop: '4rem' }}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={projectStyles.projectCard}
            >
              <div className={projectStyles.projectImageContainer}>
                <img src={project.image} alt={project.title} className={projectStyles.projectImg} />
                <div className={projectStyles.overlay}>
                  <button className={projectStyles.actionBtn}><ExternalLink size={20} /></button>
                  <button className={projectStyles.actionBtn}><FaGithub size={20} /></button>
                </div>
              </div>

              <div className={projectStyles.projectInfo}>
                <span className={projectStyles.category}>{project.category}</span>
                <h3 className={projectStyles.projectTitle}>{project.title}</h3>
                <p className={projectStyles.projectDesc}>{project.desc}</p>
                <div className={projectStyles.techList}>
                  {project.tech.map((t, i) => (
                    <span key={i} className={projectStyles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
