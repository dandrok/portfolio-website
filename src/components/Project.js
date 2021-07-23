import styles from './Project.module.css'

import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <article className={styles.project}>
      <p>personal project</p>
      <h1>weather app</h1>
      <Link to='project-page'>
        <button>more</button>
      </Link>
      <div></div>
    </article>
  )
}

export default Project
