import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.bg__text}>
        <div>Patryk Stusik</div>
        <div>Frontend</div>
        <div>Devloper</div>
      </div>
    </section>
  )
}

export default Hero
