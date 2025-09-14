import React from 'react';
import Image from 'next/image';
import styles from '@/styles/InvestmentV2.module.css';

const InvestmentV2 = () => {
  return (
    <section id="investment-v2" className={styles.investmentSection}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/roi-table.jpeg"
            alt="Tabel Return of Investment Box Crepes"
            width={800} 
            height={1132} 
            layout="responsive" 
          />
        </div>
      </div>
    </section>
  );
};

export default InvestmentV2;