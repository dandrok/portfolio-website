import styles from './Projects.module.css'
import Project from './Project'

const Projects = () => {
  return (
    <section className={styles.projects}>
      <Project />
      <Project />
      <Project />
      <Project />
    </section>
  )
}

export default Projects
