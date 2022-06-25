import styles from '../../styles/components/Header.module.css'
import Link from 'next/link'

export function Header() {
    return (
      <header className={styles.container}>
        <Link href="/">
          <div>
            <img src="/Logo.svg" alt="Logo"/>
          </div>
        </Link>
      </header>
    )
  }