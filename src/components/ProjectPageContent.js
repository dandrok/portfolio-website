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
              <FaGithub />
              <FaLink />
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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            maxWidth='476.977'
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
