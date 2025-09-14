// src/components/Investment.js

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Investment.module.css';

const Investment = () => {
  return (
    <section id="investment" className={styles.investmentSection}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Image src="/images/logocrepes.jpg" alt="Logo Box Crepes" width={80} height={80} />
          <h1 className={styles.title}>Return Of Investment</h1>
        </header>

        <div className={styles.tableWrapper}>
          {/* DATA PENJUALAN */}
          <div className={styles.dataBlock}>
            <div className={styles.blockHeader}><h2>DATA PENJUALAN</h2></div>
            <div className={styles.tableHeaderRow}>
              <span></span> {/* Kolom kosong untuk deskripsi */}
              <span>REALISTIS</span>
              <span>OPTIMIS</span>
            </div>
            <div className={styles.tableBody}>
              <div className={styles.dataRow}><span className={styles.item}>Harga jual per porsi</span> <span className={styles.value}>Rp. 5000</span> <span className={styles.value}>Rp. 5000</span></div>
              <div className={styles.dataRow}><span className={styles.item}>Penjualan rata-rata harian</span> <span className={styles.value}>50 porsi</span> <span className={styles.value}>100 porsi</span></div>
              <div className={styles.dataRow}><span className={styles.item}>Hari berjualan</span> <span className={styles.value}>30 hari</span> <span className={styles.value}>30 hari</span></div>
            </div>
            <div className={styles.totalRow}><span className={styles.item}>TOTAL</span> <span className={styles.value}>Rp. 7.500.000</span> <span className={styles.value}>Rp. 15.000.000</span></div>
          </div>

          {/* DATA OPERASIONAL */}
          <div className={styles.dataBlock}>
            <div className={styles.blockHeader}><h2>DATA OPERASIONAL</h2></div>
            <div className={styles.tableHeaderRow}>
              <span></span>
              <span>REALISTIS</span>
              <span>OPTIMIS</span>
            </div>
            <div className={styles.tableBody}>
              <div className={styles.dataRow}><span className={styles.item}>Sewa tempat</span> <span className={styles.value}>Rp. 300.000</span> <span className={styles.value}>Rp. 300.000</span></div>
              <div className={styles.dataRow}><span className={styles.item}>Gaji karyawan</span> <span className={styles.value}>Rp. 1.500.000</span> <span className={styles.value}>Rp. 1.500.000</span></div>
              <div className={styles.dataRow}><span className={styles.item}>Biaya lainnya (gas, plastik, dll)</span> <span className={styles.value}>Rp. 300.000</span> <span className={styles.value}>Rp. 300.000</span></div>
            </div>
            <div className={styles.totalRow}><span className={styles.item}>TOTAL</span> <span className={styles.value}>Rp. 2.100.000</span> <span className={styles.value}>Rp. 2.100.000</span></div>
          </div>

          {/* KESIMPULAN */}
          <div className={styles.dataBlock}>
            <div className={styles.blockHeader}><h2>KESIMPULAN</h2></div>
            <div className={styles.tableHeaderRow}>
              <span></span>
              <span>REALISTIS</span>
              <span>OPTIMIS</span>
            </div>
            <div className={styles.tableBody}>
              <div className={styles.dataRow}><span className={styles.item}>Laba kotor total</span> <span className={styles.value}>Rp. 4.500.000</span> <span className={styles.value}>Rp. 9.000.000</span></div>
              <div className={styles.dataRow}><span className={styles.item}>Biaya operasional</span> <span className={styles.value}>Rp. 2.100.000</span> <span className={styles.value}>Rp. 2.100.000</span></div>
            </div>
            <div className={styles.totalRow}><span className={styles.item}>TOTAL</span> <span className={styles.value}>Rp. 2.400.000</span> <span className={styles.value}>Rp. 6.900.000</span></div>
          </div>
        </div>

        <div className={styles.profitBanner}>
          PROFIT BERSIH PENJUALAN MINIMAL <br />
          <span>Rp. 6.900.000</span> / bulan untuk 1 cabang
        </div>
      </div>
    </section>
  );
};

export default Investment;