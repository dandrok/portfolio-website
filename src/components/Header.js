import styles from './Header.module.css'

const Header = () => {
  return (
    <section className={styles.header}>
      <nav className={styles.header__nav}>
        <div className={styles.header__nav__logo}>
          <p className={styles.header__nav__logo_p}>P.S.</p>
        </div>
        <div>projects</div>
        <div>about me</div>
      </nav>
    </section>
  )
}

export default Header
