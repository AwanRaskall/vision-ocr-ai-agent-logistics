import './HomePage.css'
import heroImage from '../../assets/image_hero.jpg'
import platformInfoImage from '../../assets/platform_info.jpg'

function HomePage() {
  return (
    <main>

      {/* Navigation */}
      <header className='hero__nav container'>
        <a href='/' className='hero__nav-logo'>
          <i className='ti ti-truck-delivery hero__nav-logo--icon' aria-hidden='true'></i>
          <span className='hero__nav-logo--text'> LogiFlow </span>
        </a>

        <a href='#platform' className='hero__nav-platform'>
          Explore Platform
        </a>

        <nav className='hero__nav-links'>
          <a href='#platform_info'> About the platform </a>
          <a href='#skills_used'> Skills used</a>
          <a href='#features'> Features</a>
          <a href='#order_ext_module'> Order extraction module </a>
        </nav>
      </header>


      {/* Hero screen */}
      <section className='hero container'>
        <div className='hero__intro'>
          <h1> Intelligent Transport Document Processing with AI </h1>
          <p> Technology that understands complexity, so people can focus on what matters </p>
        </div>


        {/* Hero image grid */}
        <div className='hero__grid' style={{ '--hero-image': `url(${heroImage})` }}>
          <div className='hero__grid-image'></div>

          <div className='hero__column hero__column--1'>
            <div className='hero__image'></div>
            <p className='hero__description'>
              Less manual processing. Faster workflows. Smarter decisions.
              AI handles repetitive document tasks, so logistics teams can focus
              on exceptions, coordination, and what matters most.
            </p>
          </div>

          <div className='hero__column hero__column--2'>
            <div className='hero__image'></div>
          </div>

          <div className='hero__column hero__column--3'>
            <div className='hero__image'></div>
            <p className='hero__description'>
              Computer vision transforms transport documents into structured,
              machine-readable information.
            </p>
          </div>

          <div className='hero__column hero__column--4'>
            <div className='hero__image'></div>
          </div>
        </div>
      </section>


      <section id='platform_info' className='platform_info'>
        <div className='platform_info__container container'>

          <div className='platform_info__image'>
            <img src={platformInfoImage} alt='Platform info image'/>
          </div>

          <div className='platform_info__content'>
            <h2>Information about the platform</h2>

            <div className='platform_info__item'>
              <div className='platform_info__heading'>
                <span className='platform_info__number'>01</span>
                <h3>Read transport documents</h3>
              </div>

              <p>
                Process transport documents provided as images or image in PDFs and
                extract the information needed for further logistics processing.
              </p>
            </div>

            <div className='platform_info__item'>
              <div className='platform_info__heading'>
                <span className='platform_info__number'>02</span>
                <h3>Find suitable transports</h3>
              </div>

              <p>
                Use the extracted information to find suitable transportation file in
                the database and identify relevant options faster.
              </p>
            </div>

            <div className='platform_info__item'>
              <div className='platform_info__heading'>
                <span className='platform_info__number'>03</span>
                <h3>Store transport data</h3>
              </div>

              <p>
                Keep processed documents and transport information organized
                in a structured database, making them easier to access and manage.
              </p>
            </div>

            <div className='platform_info__item'>
              <div className='platform_info__heading'>
                <span className='platform_info__number'>04</span>
                <h3>Choose the configuration</h3>
              </div>

              <p>
                Select the appropriate processing configuration to adapt the
                workflow to different document processing and logistics scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section id='skills_used' className='skills_used container'>
        {/* Information about the platform */}
      </section>

      <section id='features' className='features container'>
        {/* Platform features */}
      </section>

      <section id='order_ext_module' className='order_ext_module container'>
        {/* Platform features */}
      </section>

    </main>
  )
}

export default HomePage
