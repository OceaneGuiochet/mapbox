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


        <h2>Navigation</h2>

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

          <p className={styles.thirdp}>Mapbox Studio is like Photoshop, for maps. We give designers control over everything from colors and fonts, to 3D features and camera angles, to the pitch of the map as a car enters a turn.</p>
        
          <div>
            <div className={styles.thirdbutton}>Learn about Studio</div>
          </div>

        </div>
      </div>
    </section>    

    <section className={styles.fourthsection}>
      <div>

        <h2>Maps</h2>

        <p className={styles.secondp}>Our APIs, SDKs, and live updating map data give<br/> developers tools to build better mapping, navigation, and<br/> search experiences across platforms.</p>

        <div className={styles.center}>

          <div className={styles.fourthbutton}>Learn about Maps</div>

        </div>

        <img className={styles.img4} src='https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6087dab60ab31f1710916725_maps-1(home).png'/>

        <img className={styles.img5} src='https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6087fb8a4bbdad2cdfaf8dd3_maps-2(home).png'/>

      </div>
    </section>


    <section className={styles.fivesection}>
      <div className={styles.fivediv}>

        <div className={styles.frmimg}>
          <img className={styles.img6} src='https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6086db34abdf394fdb0c964c_search(home).png'/>
        </div>

        <div>
          <h2>Search</h2>

          <p className={styles.fivep}>Search and geocoding is tied to everything we build — maps, navigation, AR — and underlies every app that helps humans explore their world.</p>
        
          <div>
            <div className={styles.fivebutton}>Discover Search </div>
          </div>

        </div>
      </div>
    </section>    

    <section className={styles.sixsection}>

      <div className={styles.sixdiv}>
        <div className={styles.banner}>

          <div className={styles.frmtexte}>
            
            <h2 className={styles.secondwhiteh2}>CUSTOMER SHOWCASE</h2>

            <h2>Maps</h2>
          
            <p className={styles.sixp}>Our APIs, SDKs, and live updating map data give<br/> developers tools to build better mapping, navigation, and<br/> search experiences across platforms.</p>

            <div className={styles.sixbutton}>Learn about Maps</div>
            
          </div>

          <img className={styles.img7} src='https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6076f5a324729860787986cc_straightaway(home-banner).jpeg'/>

        </div>
      </div>
    </section>

    <section className={styles.sevensection}>
      <div className={styles.sevendiv}>

        <div className={styles.frmimg}>
          <img className={styles.img8} src='https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/621623f52c9bb327121cbdbc_vision(home).png'/>
        </div>

        <div>
          <h2>Vision</h2>

          <p className={styles.sevenp}>The Mapbox Vision SDK describes every curb, lane, street<br/> sign, and road hazard it sees as data. Developers use the<br/> SDK's AI-powered semantic segmentation, object<br/> detection, and classification to deliver precise navigation<br/> guidance, display driver assistance alerts, and<br/> detect and map road incidents.</p>
        
          <div>
            <div className={styles.sevenbutton}>Discover Vision </div>
          </div>

        </div>
      </div>
    </section>  



    <section className={styles.eightsection}>
      <div className={styles.eightdiv}>

        

        <div>
          <h2>MapboxStudio</h2>

          <p className={styles.eightp}>Mapbox Studio is like Photoshop, for maps. We give designers control over everything from colors and fonts, to 3D features and camera angles, to the pitch of the map as a car enters a turn.</p>
        
          <div>
            <div className={styles.eightbutton}>Learn about Studio</div>
          </div>

        </div>

        <div className={styles.frmimg}>
          <img className={styles.img9} src='https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/6076fd12ae76e59d68947232_data(home).jpeg'/>
        </div>

      </div>
    </section>    


    <section className={styles.ninesection}>
      <div className={styles.ninediv}>

        <div className={styles.frmimg}>
          <img className={styles.img10} src='https://assets-global.website-files.com/6050a76fa6a633d5d54ae714/60770114d539fa3def12c233_atlas(home).jpeg'/>
        </div>

        <div>
          <h2>Atlas</h2>

          <p className={styles.ninep}>With Atlas, you can self-host Mapbox maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Mapbox Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using Mapbox GL JS v2 and Mapbox Maps SDKs for iOS and Android.</p>
        
          <div>
            <div className={styles.ninebutton}>Self-host with Atlas </div>
          </div>

        </div>
      </div>
    </section> 
    </>
  )
}