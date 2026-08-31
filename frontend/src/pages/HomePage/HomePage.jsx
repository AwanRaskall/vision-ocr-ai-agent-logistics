import './HomePage.css'
import heroImage from '../../assets/image_hero.jpg'

function HomePage() {
  return (
    <main>

      {/* Navigation */}
      <header className='hero__nav container'>
        <a href='/' className='hero__nav-logo'>
          <i className='ti ti-truck-delivery hero__nav-logo--icon' aria-hidden='true'></i>
          <span className='hero__nav-logo--text'>
            LogiFlow
          </span>
        </a>

        <a href='#platform' className='hero__nav-platform'>
          Explore Platform
        </a>

        <nav className='hero__nav-links'>
          <a href='#platform'> About the platform </a>
          <a href='#features'> Features </a>
        </nav>
      </header>


      {/* Hero screen */}
      <div className='hero-screen'>
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
      </div>


      {/* Platform */}
      <section id='platform' className='platform container'>
        {/* Information about the platform */}
      </section>


      {/* Features */}
      <section id='features' className='features container'>
        {/* Platform features */}
      </section>

    </main>
  )
}

export default HomePage
