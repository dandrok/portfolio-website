import styles from './Hero.module.css'

import Arrow from './images/arrow__custom.svg'

const Hero = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.bg__text}>
        <div>Patryk Stusik</div>
        <div>Frontend</div>
        <div>Developer</div>
        <div className={styles.bg__text_scroll}>
          <div>
            <p className={styles.bg__text_down}>SCROLL DOWN</p>
          </div>
          <button>
            <img src={Arrow} alt={Arrow} className={styles.icon} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
