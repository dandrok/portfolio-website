import styles from './Hero.module.css'
import { motion } from 'framer-motion'

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.5,
      },
    },
  }
  const containerTwo = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        staggerChildren: 1.5,
        delay: 1.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: 20 },
  }
  const itemTwo = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: 20 },
  }

  return (
    <section className={styles.bg}>
      <div className={styles.bg__text}>
        <motion.section
          variants={container}
          initial='hidden'
          animate='show'
          className={styles.bg__text_main}
        >
          <motion.div variants={item}>Frontend</motion.div>
          <motion.div variants={item}>Developer</motion.div>
          <motion.div variants={item} className={styles.text__700}>
            Patryk Stusik
          </motion.div>
          <motion.div className={styles.text__690} variants={item}>
            Patryk
          </motion.div>
          <motion.div className={styles.text__690} variants={item}>
            Stusik
          </motion.div>
        </motion.section>
        <motion.div
          className={styles.bg__text_scroll}
          variants={containerTwo}
          initial='hidden'
          animate='show'
        >
          <motion.div variants={itemTwo}>
            <p className={styles.bg__text_down}>SCROLL DOWN</p>
          </motion.div>
          <motion.button className={styles.btnTwo} variants={itemTwo}>
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
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
