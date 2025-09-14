import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Hero.module.css'; 

const Hero = () => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.imageAndLogoContainer}>
          <div className={styles.logoHexagon}>
            <Image
              src="/images/logocrepes.jpg"
              alt="Logo Kreps Istimewa"
              width={100} 
              height={100}
            />
          </div>

          <div className={styles.imageHexagonWrapper}>
            <Image
              src="/images/hero-crepes.webp"
              alt="Aneka Varian Crepes Lezat"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.headline}>
            Box Crepes, Lejat dan bergiji
          </h1>
          <p className={styles.slogan}>
            #ManisGurihSemuaSuka
            #KrepsIstimewa
          </p>
          <div className={styles.ctaBlock}>
            <h2>Pesan Crepes Favoritmu Sekarang!</h2>
            <button className={styles.ctaButton}>Lihat Menu</button>
            <div className={styles.socials}>
              <a href="https://instagram.com/krepsistimewa" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <i className="fab fa-instagram"></i> instagram.com/box_crepes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;