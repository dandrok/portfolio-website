import styles from './Projects.module.css'
import Project from './Project'

import { useState, useEffect } from 'react'

const Projects = () => {
  const [data, setData] = useState([])

  const getData = () => {
    fetch('http://localhost:8000/projects')
      .then(function (response) {
        console.log(response)
        return response.json()
      })
      .then(function (myJson) {
        console.log(myJson)
        setData(myJson)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <section className={styles.projects}>
      {data &&
        data.length > 0 &&
        data.map((item) => <Project key={item.id} {...item} />)}
    </section>
  )
}

export default Projects
