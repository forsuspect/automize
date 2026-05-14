import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <a href="/#hero" className={styles.logo}>
              <div className={styles.logoIcon}>
                <div className={styles.logoDot}></div>
                <div className={styles.logoRing}></div>
              </div>
              <span className="text-gradient">Automize</span>
            </a>
            <p className={styles.brandDesc}>
              Especialistas em automação de sistemas, SaaS, IA e soluções digitais. 
              Transformamos ideias em tecnologia de alto impacto.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
              <a href="#" aria-label="Twitter"><FaTwitter size={20} /></a>
              <a href="#" aria-label="GitHub"><FaGithub size={20} /></a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.linksTitle}>Serviços</h4>
            <a href="/#services">Sistemas SaaS</a>
            <a href="/#services">Criação de Sites</a>
            <a href="/#services">Landing Pages</a>
            <a href="/#services">Inteligência Artificial</a>
            <a href="/#services">Automações</a>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.linksTitle}>Empresa</h4>
            <Link to="/sobre-nos">Sobre Nós</Link>
            <Link to="/portfolio">Portfólio</Link>
            <Link to="/carreiras">Carreiras</Link>
            <Link to="/contato">Contato</Link>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.linksTitle}>Legal</h4>
            <Link to="/termos-de-uso">Termos de Uso</Link>
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Automize. Todos os direitos reservados.</p>
          <div className={styles.bottomLinks}>
            <span>Feito com excelência para empresas do futuro.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
