import React from 'react';
import Image from 'next/image';
import styles from '@/styles/AboutUs.module.css';

const AboutUs = () => {
  return (
    <section id="about" className={styles.aboutSection}>

      {/* 1. DIV UNGU */}
      <div className={styles.aboutHeader}>
        <div className={styles.headerContent}>
          <h2 className={styles.title}>TENTANG KAMI</h2>
          <div className={styles.brandInfo}>
            <span>BOX CREPES</span>
          </div>
        </div>
      </div>

      {/* 2. AREA KONTEN UTAMA */}
      <div className={styles.aboutContent}>
        <div className={styles.container}>
          <div className={styles.storyCard}>
            <div className={styles.crepesLogoAbsolute}>
              <Image 
                src="/images/logocrepes.jpg" 
                alt="Logo Box Crepes"
                width={80} 
                height={80}
              />
            </div>

            <p>
              Box crepes adalah brand street food yang menyajikan berbagai varian crepes lezat dengan harga terjangkau. Berdiri sejak tahun 2023, kami hadir di kawasan strategis untuk melayani mahasiswa, karyawan, dan masyarakat umum yang mencari camilan praktis, enak, dan ramah di kantong.
            </p>
            <p>
              Kami percaya bahwa makanan sederhana pun bisa memberikan kebahagiaan, selama dibuat dengan bahan berkualitas dan semangat pelayanan terbaik.
            </p>
          </div>

          <div className={styles.halalSection}>
            <div className={styles.halalLogo}>
              <Image
                src="/images/halal-seeklogo.png" 
                alt="Logo Halal Indonesia"
                width={200}
                height={200}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.halalInfo}>
              <p>
                Dengan ini, kami menyatakan bahwa <strong>PT. KREPS ISTIMEWA NUSANTARA</strong> telah memperoleh sertifikat halal dari Majelis Ulama Indonesia (MUI) atau lembaga sertifikasi halal yang diakui, yang berlaku untuk produk-produk kami.
              </p>
              <div className={styles.certificateDetails}>
                <p>
                  <strong>Nomor Sertifikat Halal:</strong> <span className={styles.highlight}>ID3311001234567890</span>
                </p>
                <p>
                  <strong>Tanggal Terbit Sertifikat:</strong> <span className={styles.highlight}>12 September 2025</span>
                </p>
              </div>
            </div>
          </div>

          <p className={styles.commitmentText}>
            Kami berkomitmen untuk terus menjaga kualitas produk kami dan memastikan bahwa semua produk yang kami tawarkan aman, berkualitas, dan sesuai dengan prinsip-prinsip halal.
          </p>

          <div className={styles.teamImageContainer}>
            <Image
              src="/images/team1.webp" 
              alt="Tim Kreps Istimewa"
              layout="fill"
              objectFit="cover"
              className={styles.teamImage}
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;