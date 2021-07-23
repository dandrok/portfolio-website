import styles from './ProjectPageContent.module.css'
import { FaLink, FaGithub } from 'react-icons/fa'

import Arrow from './images/arrow__custom.svg'

import { Link } from 'react-router-dom'

const ProjectPageContent = () => {
  return (
    <section className={styles.content}>
      <div className={styles.content__container}>
        <div className={styles.content__container_flex}>
          <article className={styles.content__containerLeft}>
            <h1>NAME OF PROJECT</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
              optio, voluptatibus quidem iste ipsum aspernatur fuga voluptatem
              unde recusandae minima quibusdam ullam accusantium molestiae
              minus, explicabo beatae tempora totam autem?
            </p>
            <div className={styles.content__containerLeftIcons}>
              <FaGithub />
              <FaLink />
            </div>
          </article>

          <Link to='all-projects'>
            <button className={styles.btnTwo}>
              <img src={Arrow} alt={Arrow} className={styles.icon} />
            </button>
          </Link>
        </div>
        <div className={styles.content__containerRight}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            max-width='476.977'
            height='357.733'
            viewBox='0 0 476.977 357.733'
          >
            <path
              id='Icon_awesome-image'
              data-name='Icon awesome-image'
              d='M432.261,362.233H44.717A44.716,44.716,0,0,1,0,317.516V49.217A44.716,44.716,0,0,1,44.717,4.5H432.261a44.716,44.716,0,0,1,44.717,44.717v268.3A44.716,44.716,0,0,1,432.261,362.233ZM104.339,56.669a52.169,52.169,0,1,0,52.169,52.169A52.169,52.169,0,0,0,104.339,56.669ZM59.622,302.611H417.355V198.272l-81.529-81.529a11.18,11.18,0,0,0-15.81,0L193.772,242.989l-51.718-51.718a11.18,11.18,0,0,0-15.81,0L59.622,257.894Z'
              transform='translate(0 -4.5)'
              fill='#e3e3e3'
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default ProjectPageContent
