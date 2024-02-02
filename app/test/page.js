import ModalImageFull from "@/components/ModalImageFull/ModalImageFull";
import React from 'react';
import styles from './page.module.css';

export const Page = () => {
  return (
    <section className={styles['test__section']}>
        <ModalImageFull />
    </section>
  );
}

export default Page;
