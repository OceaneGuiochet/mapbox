import styles from './page.module.css'

export default function Home() {
  return (
    <>
    <header>

      <nav className={styles.nav}>

        <img className={styles.firtimg} src='https://logodix.com/logo/1863652.png'/>

        <div className={styles.navitem}>
          
            <div>Products</div>
            <div>Solutions</div>
            <div>Developers</div>
            <div>Compagny</div>

            <div>Customers</div>
            <div>Pricing</div>
            <div>Blog</div>
        </div>

        <div className={styles.navitem2}>
          <div className={styles.login}>Log in</div>
          <div className={styles.signup}>Sign up</div>
        </div>

      </nav>

    </header>

    <main>

      <section className={styles.firstsection}>

        <h1 className={styles.firsth1}>Maps and location<br/> for developers</h1>

        <h2 className={styles.firsth2}>Precise location data and powerful developer<br/> tools to change the way we navigate the world.</h2>

        <div className={styles.firstbutton}>Start mapping for free</div>

      </section>

      <section className={styles.secondsection}>

        <p className={styles.paragraph}>TRUSTED BY THE INDUSTRY LEADERS</p>

        <div className={styles.logo}>

          <img src=''/>
          <img src='https://images.squarespace-cdn.com/content/v1/571fabf01d07c0a2bb977faa/1538177218604-EJR939BMIZ97E1Q3F0TV/cnn-logo-gray.png'/>
          <img src='https://orbitdesignstudio.com/cms/resources/clients/bmw.png'/>
          <img src=''/>
          <img src=''/>

          <img src=''/>
          <img src=''/>
          <img src=''/>
          <img src=''/>
          <img src=''/>

        </div>

        <p>View customer stories </p>

      </section>

          

    </main>

    </>
  )
}
