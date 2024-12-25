import { useState } from 'react';
import styles from './Navbar.module.css';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className="-mt-4">
        <img
          src="https://cdn.prod.website-files.com/6678f9db71cce46bdf4a99d6/6678f9db71cce46bdf4a99f7_Align%20Logo.svg"
          alt="Logo"
        />
      </div>
      <span className={styles.line}></span>
      <div className={`${styles.nav}`} onClick={toggleMenu}>
        <div
          className={`${styles.hamContainer} ${
            isMenuOpen ? styles.cross : ''
          }`}
        >
          <span className={styles.ham}></span>
          <span className={styles.ham}></span>
          <span className={styles.ham}></span>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.menu}>
          <nav className={styles.navLinks}>
          <a href="#about">01. ABOUT</a>
    <a href="#portfolio">02. PORTFOLIO</a>
    <a href="#brand">03. BRAND</a>
    <a href="#tech">04. TECH</a>
    <a href="#media">05. MEDIA</a>
    <a href="#contact">06. CONTACT</a>
          </nav>
        </div>
      )}
    </header>
  );
}
