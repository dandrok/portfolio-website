import styles from './Footer.module.css'

import Layout from '../components/layout/Layout'

import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Layout>
        <section className={styles.footer__content}>
          <div className={styles.footer__icons}>
            <FaLinkedin />
            <FaGithub />
          </div>
          <div className={styles.footer__text}>
            made with&nbsp;
            <span>
              <FaCode />
            </span>
            &nbsp;by dandrok
          </div>
          <div></div>
        </section>
      </Layout>
    </footer>
  )
}

export default Footer
