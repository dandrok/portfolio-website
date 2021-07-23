import Header from '../Header'
import Footer from '../Footer'
import Layout from '../layout/Layout'
import ProjectPage__content from '../ProjectPageContent'

const ProjectPage = () => {
  return (
    <>
      <Layout>
        <Header />
      </Layout>
      <ProjectPage__content />
      <Footer />
    </>
  )
}

export default ProjectPage
