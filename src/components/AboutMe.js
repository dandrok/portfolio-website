import styles from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <section className={styles.container}>
      <section className={styles.aboutMe}>
        <div className={styles.aboutMe__p1}>
          <h1>ABOUT</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo facere
            vero eaque, quo ex a sit beatae, autem animi eveniet expedita
            quibusdam dolorem id suscipit porro ad! Itaque, ipsam ut. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Fugiat porro
            quibusdam soluta possimus est a, ab, voluptatum illo vitae
            voluptatem reiciendis maxime animi eius accusantium voluptate
            quaerat, rerum officiis? Recusandae!
          </p>
        </div>
        <div className={styles.aboutMe__p2}>
          <h2>
            I'M TRAING TO STAY WITH CURRENT TRENDS DESIGN AND CONSTANTLY
            CHALLENGE MYSELF TO LEARN MORE.
          </h2>
          <svg
            className={styles.cls}
            id='Layer_1'
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 385.34 385.34'
          >
            <defs></defs>
            <ellipse
              class='cls-1'
              cx='160.71'
              cy='160.71'
              rx='140.91'
              ry='36.08'
              transform='translate(-123.9 103.38) rotate(-45)'
            />
            <ellipse
              class='cls-1'
              cx='186.22'
              cy='186.22'
              rx='140.91'
              ry='36.08'
              transform='translate(-134.47 128.89) rotate(-45)'
            />
            <ellipse
              class='cls-1'
              cx='211.73'
              cy='211.73'
              rx='140.91'
              ry='36.08'
              transform='translate(-145.03 154.4) rotate(-45)'
            />
            <ellipse
              class='cls-1'
              cx='237.24'
              cy='237.24'
              rx='140.91'
              ry='36.08'
              transform='translate(-155.6 179.91) rotate(-45)'
            />
            <ellipse
              class='cls-1'
              cx='262.76'
              cy='262.76'
              rx='140.91'
              ry='36.08'
              transform='translate(-166.17 205.43) rotate(-45)'
            />
            <ellipse
              class='cls-1'
              cx='288.27'
              cy='288.27'
              rx='140.91'
              ry='36.08'
              transform='translate(-176.74 230.94) rotate(-45)'
            />
            <ellipse
              class='cls-1'
              cx='313.78'
              cy='313.78'
              rx='140.91'
              ry='36.08'
              transform='translate(-187.3 256.45) rotate(-45)'
            />
            <ellipse
              class='cls-1'
              cx='339.29'
              cy='339.29'
              rx='140.91'
              ry='36.08'
              transform='translate(-197.87 281.96) rotate(-45)'
            />
          </svg>
        </div>
      </section>
      <div className={styles.partTwo}>
        <h1 className={styles.partTwo_skills}>WHAT ABOUT MY SKILL</h1>
        <section>
          <div className={styles.partTwo_container}>
            <p>REACT</p>

            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__expLess}></div>
            <div className={styles.partTwo__expLess}></div>
            <div className={styles.partTwo__expLess}></div>
          </div>
          <div className={styles.partTwo_container}>
            <p>REACT</p>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__expLess}></div>
          </div>
          <div className={styles.partTwo_container}>
            <p>REACT</p>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__expLess}></div>
            <div className={styles.partTwo__expLess}></div>
          </div>
          <div className={styles.partTwo_container}>
            <p>REACT</p>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__expLess}></div>
            <div className={styles.partTwo__expLess}></div>
          </div>
          <div className={styles.partTwo_container}>
            <p>REACT</p>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__exp}></div>
            <div className={styles.partTwo__expLess}></div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default AboutMe
