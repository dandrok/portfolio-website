import styles from './ProjectPageContent.module.css'
import { FaLink, FaGithub } from 'react-icons/fa'

import { Link, useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'

const ProjectPageContent = () => {
  const { id } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch('http://localhost:8000/projects/' + id)
      .then(function (response) {
        console.log('hey' + response)
        return response.json()
      })
      .then(function (myJson) {
        console.log('hey2' + myJson)
        setData(myJson)
      })
  }

  return (
    <section className={styles.content}>
      <div className={styles.content__container}>
        <div className={styles.content__container_flex}>
          <article className={styles.content__containerLeft}>
            <h1 style={{ textTransform: 'uppercase' }}>{data.title}</h1>

            {console.log(data.title)}

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              voluptatum esse ratione, facilis quibusdam doloribus aut ad
              quisquam natus fugit corrupti tempore error minima fuga,
              cupiditate velit ea vero ab?
            </p>
            <div className={styles.content__containerLeftIcons}>
              <a href={data.github} target='_blank' rel='noopener noreferrer'>
                <FaGithub />
              </a>
              <a href={data.link} target='_blank' rel='noopener noreferrer'>
                <FaLink />
              </a>
            </div>
          </article>

          <Link to='/all-projects'>
            <button className={styles.btnTwo}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='57.713'
                height='31.02'
                viewBox='0 0 57.713 31.02'
              >
                <g
                  id='Group_1'
                  data-name='Group 1'
                  transform='translate(1054.213 -945.039) rotate(90)'
                >
                  <line
                    id='Line_1'
                    data-name='Line 1'
                    y2='57.713'
                    transform='translate(960.5 996.5)'
                    fill='none'
                    stroke='#0d0d0d'
                    strokeWidth='2'
                  />
                  <path
                    id='Path_1'
                    data-name='Path 1'
                    d='M945.158,1012s15.461,0,15.461,15'
                    transform='translate(-0.12 27.211)'
                    fill='none'
                    stroke='#0d0d0d'
                    strokeWidth='2'
                  />
                  <path
                    id='Path_2'
                    data-name='Path 2'
                    d='M976,1012s-15.548-.155-15.548,15.339'
                    transform='translate(0.048 26.874)'
                    fill='none'
                    stroke='#0d0d0d'
                    strokeWidth='2'
                  />
                </g>
              </svg>
            </button>
          </Link>
        </div>
        <div className={styles.content__containerRight}>
          <img src={data.img} alt='' />
        </div>
      </div>
    </section>
  )
}

export default ProjectPageContent
