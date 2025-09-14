import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Features.module.css';

const Features = () => {
  return (
    <div className={styles.featuresSectionWrapper}>
      <section id="features" className={styles.featuresSection}>
        <div className={styles.contentContainer}>

          <div className={styles.topBlock}>
            <div className={styles.bannerContainer}>
              <Image
                src="/images/daun.png" 
                alt="Varian Produk Box Crepes"
                width={700}
                height={300}
                style={{ objectFit: 'cover', borderRadius: '16px' }}
              />
              <div className={styles.halalLogo}>
                <Image 
                  src="/images/halal-seeklogo.png"
                  alt="Logo Halal"
                  width={80}
                  height={130}
                />
              </div>
            </div>

            <h2 className={styles.headline}>GABUNG SEKARANG</h2>
            <p className={styles.subheading}>
              Dapatkan berbagai benefit dan promo menarik yuk <br/> join bersama kami dan dapatkan free bahan baku diawal <br/>serta keuntungan 100% milik mitra.
            </p>
          </div>

          <div className={styles.bottomBlock}>
            <div className={styles.productImage}>
              <Image
                src="/images/anggur.png"
                alt="Produk Unggulan Box Crepes"
                width={350}
                height={350}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.textContent}>
              <h2 className={styles.headline}>DEDIKASI KAMI UNTUK MITRA</h2>
              <p className={styles.subheading}>
                Kami berdedikasi membuat usaha yang murah namun berkualitas, tersistem dapat dipantau dengan mudah oleh mitra dan tanpa ada pemotongan biaya apapun sepenuhnya milik mitra.
              </p>
            </div>
          </div>
          
        </div>
      </section>

      <div className={styles.lowerContentWrapper}>
        <div className={styles.royaltyBlock}>
          <div className={styles.textContent}>
            <h2 className={styles.headlineDark}>BEBAS ROYALTY</h2>
            <p className={styles.subheadingDark}>
              Cukup bayar di depan, selanjutnya usaha milik mitra.
            </p>
          </div>
          <div className={styles.halalLogoSide}>
            <Image src="/images/halal-seeklogo.png" alt="Logo Halal" width={80} height={130} />
          </div>
        </div>

        <div className={styles.productBlock}>
          <div className={styles.productImage}>
            <Image
              src="/images/strawbery.png" 
              alt="Produk Unggulan Box Crepes"
              width={350}
              height={450}
              style={{ objectFit: 'cover', borderRadius: '20px' }}
            />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.headlineDark}>OUR PRODUCT</h2>
            <p className={styles.subheadingDark}>
              Crêpes dengan adonan renyah, manis, dan gurih disajikan dengan berbagai topping premium pilihan Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;