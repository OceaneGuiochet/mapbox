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

        <p className={styles.firstp}>Precise location data and powerful developer<br/> tools to change the way we navigate the world.</p>

        <div className={styles.firstbutton}>Start mapping for free</div>

        <p className={styles.whiteh2}>TRUSTED BY THE INDUSTRY LEADERS</p>



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

      <p className={styles.blueh2}>View customer stories </p>

      </div>
    </section>

    <section className={styles.secondsection}>
      <div className={styles.seconddiv}>


        <h2> Navigation</h2>

        <p className={styles.secondp}>Mapbox provides powerful routing engines, accurate,<br/> traffic-powered travel times, and intuitive turn-by-turn<br/> directions to help you build engaging navigation<br/> experiences.</p>

        <div className={styles.center}>

          <div className={styles.secondbutton}>Explore Navigation</div>

        </div>

        <div>
          <img className={styles.img1} src='https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6086c7182c233a558cb3629d_navigation-phone(home).png'/>
          <img className={styles.img2} src='https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6086da08c7b29d825e7f4d2e_navigation-tablet(home).png'/>
        </div>

      </div>  
    </section>

    <section className={styles.thirdsection}>
      <div className={styles.thirddiv}>

        <div className={styles.frmimg}>
          <img className={styles.img3} src='https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/60741d7bc7c1436cceffe9b2_studio(home).jpeg'/>
        </div>

        <div>
          <h2>MapboxStudio</h2>

          <p>Mapbox Studio is like Photoshop, for maps. We give<br/> designers control over everything from colors and fonts, to<br/> 3D features and camera angles, to the pitch of the map as a<br/> car enters a turn.</p>
        
          <div>
            <div className={styles.thirdbutton}>Learn about Studio</div>
          </div>

        </div>
      </div>
    </section>    


    </>
  )
}
