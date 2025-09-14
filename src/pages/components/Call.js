import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Call.module.css';

const Call = () => {
  return (
    <section id="call" className={styles.callSection}>
      <div className={styles.container}>
        <div className={styles.productDisplay}>
          <div className={styles.brandLogoCircle}>
            <Image
              src="/images/logocrepes.jpg" 
              alt="Logo Box Crepes"
              width={100}
              height={100}
            />
          </div>
          <Image
            src="/images/anggur.png"
            alt="Matcha Crepes"
            width={400}
            height={500}
            style={{ objectFit: 'cover', borderRadius: '20px' }}
          />
        </div>

        <div className={styles.persuasionBlock}>
          <div className={styles.halalLogo}>
            <Image
              src="/images/halal-seeklogo.png"
              alt="Logo Halal"
              width={50}
              height={90}
            />
          </div>
          <h2 className={styles.headline}>
            GIMANA, TERTARIK ? <br /> ATAU MASIH MIKIR-MIKIR PENGEN <br /> USAHA TAPI MALES RIBET ?
          </h2>
          <h2 className={styles.headline}>
            MAU PUNYA USAHA <br /> YANG CEPET BALIK MODAL ?
          </h2>
          <h3 className={styles.subheading}>
            Segera Hubungi <br /> Admin Kami !!
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Call;