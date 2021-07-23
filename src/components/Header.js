import styles from './Header.module.css'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className={styles.header}>
      <nav className={styles.header__nav}>
        <Link to='/' className={styles.header__nav__logo}>
          <p className={styles.header__nav__logo_p}>P.S.</p>
        </Link>
        <Link to='/all-projects' className={styles.header__nav_underline}>
          projects
        </Link>
        <Link to='/about' className={styles.header__nav_underline}>
          about me
        </Link>
      </nav>
    </section>
  )
}

export default Header
