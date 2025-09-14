// src/components/InvestmentV2.js

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/InvestmentV2.module.css';

const InvestmentV2 = () => {
  return (
    <section id="investment-v2" className={styles.investmentSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/roi-table.jpeg" // Pastikan nama file ini sesuai
            alt="Tabel Return of Investment Box Crepes"
            width={800} // Lebar asli gambar (bisa disesuaikan)
            height={1132} // Tinggi asli gambar (bisa disesuaikan)
            layout="responsive" // Membuat gambar menyesuaikan lebar kontainer
          />
        </div>
      </div>
    </section>
  );
};

export default InvestmentV2;