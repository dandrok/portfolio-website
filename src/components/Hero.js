import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.bg__text}>
        <div className={styles.bg__text_main}>
          <div className={styles.text__700}>Patryk Stusik</div>
          <div className={styles.text__690}>Patryk</div>
          <div className={styles.text__690}>Stusik</div>

          <div>Frontend</div>
          <div>Developer</div>
        </div>
        <div className={styles.bg__text_scroll}>
          <div>
            <p className={styles.bg__text_down}>SCROLL DOWN</p>
          </div>
          <button className={styles.btnTwo}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='31.02'
              height='31'
              viewBox='0 0 31.02 31'
            >
              <g
                id='Group_1'
                data-name='Group 1'
                transform='translate(-945.039 -996.5)'
              >
                <line
                  id='Line_1'
                  data-name='Line 1'
                  y2='31'
                  transform='translate(960.5 996.5)'
                  fill='none'
                  stroke='#f2f2f2'
                  strokeWidth='2'
                />
                <path
                  id='Path_1'
                  data-name='Path 1'
                  d='M945.158,1012s15.461,0,15.461,15'
                  transform='translate(-0.12 0.497)'
                  fill='none'
                  stroke='#f2f2f2'
                  strokeWidth='2'
                />
                <path
                  id='Path_2'
                  data-name='Path 2'
                  d='M976,1012s-15.548-.155-15.548,15.339'
                  transform='translate(0.048 0.161)'
                  fill='none'
                  stroke='#f2f2f2'
                  strokeWidth='2'
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
