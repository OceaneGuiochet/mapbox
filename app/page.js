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

    <section className={styles.firstsection}>

      <div className={styles.firstdiv}>

        <h1 className={styles.firsth1}>Maps and location<br/> for developers</h1>

        <h2 className={styles.firsth2}>Precise location data and powerful developer<br/> tools to change the way we navigate the world.</h2>

        <div className={styles.firstbutton}>Start mapping for free</div>

        <p className={styles.paragraph}>TRUSTED BY THE INDUSTRY LEADERS</p>





        <div className={styles.logoblock}>

          <div className={styles.logorow}>
            <img className={styles.imglogo} src='https://assets.stickpng.com/images/5847f598cef1014c0b5e4897.png'/>
          </div>
          <div className={styles.logorow}>
            <img className={styles.imglogo} src='https://assets.stickpng.com/images/5847f598cef1014c0b5e4897.png'/>
          </div>
          <div className={styles.logorow}>
            <img className={styles.imglogo} src='https://assets.stickpng.com/images/5847f598cef1014c0b5e4897.png'/>
          </div>
          <div className={styles.logorow}>
            <img className={styles.imglogo} src='https://assets.stickpng.com/images/5847f598cef1014c0b5e4897.png'/>
          </div>
          <div className={styles.logorow}>
            <img className={styles.imglogo} src='https://assets.stickpng.com/images/5847f598cef1014c0b5e4897.png'/>
          </div>

          <div className={styles.logorow}>
            <img className={styles.imglogo} src='https://assets.stickpng.com/images/5847f598cef1014c0b5e4897.png'/>
          </div>
          <div className={styles.logorow}>
            <img className={styles.imglogo} src='https://assets.stickpng.com/images/5847f598cef1014c0b5e4897.png'/>
          </div>
          <div className={styles.logorow}>
            <img className={styles.imglogo} src='https://assets.stickpng.com/images/5847f598cef1014c0b5e4897.png'/>
          </div>
          <div className={styles.logorow}>
            <img className={styles.imglogo} src='https://assets.stickpng.com/images/5847f598cef1014c0b5e4897.png'/>
          </div>
          <div className={styles.logorow}>
            <img className={styles.imglogo} src='https://assets.stickpng.com/images/5847f598cef1014c0b5e4897.png'/>
          </div>
           

      </div>

      <p className={styles.paragraph2}>View customer stories </p>
      </div>
    </section>

      <section className={styles.secondsection}>

         
          
      </section>    


    </>
  )
}
