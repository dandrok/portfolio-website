import styles from './Project.module.css'

import { Link } from 'react-router-dom'

const Project = ({ ...item }) => {
  return (
    <article className={styles.project}>
      <p>{item.type}</p>
      <h1>{item.title}</h1>
      <Link to={`/project-page/${item.id}`}>
        <button>more</button>
      </Link>
      <div></div>
    </article>
  )
}

export default Project
