import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Rainbow is a app from mimi
        </p>
      </div>
    </main>
  )
}
