import './HomePage.css'
import heroImage from '../../assets/image_hero.jpg'

function HomePage() {
  return (
    <main>
      {/* Horizontal navigation */}
      <header className='navigation'>
        <a href='/' className='hero__nav-logo'>
          <i className='ti ti-truck-delivery hero__nav-logo--icon' aria-hidden='true'></i>
          <span className='hero__nav-logo--text'>LogiFlow</span>
        </a>
        
        <nav>
          {/* Navigation links will be added here */}
        </nav>
      </header>

      {/* Hero section */}
      <section className='hero'>
        {/* Main hero text */}
        <div className='hero__intro'>
          <h1>Computer Vision LogiFlow</h1>

          <p>
            Intelligent visual solutions for modern logistics.
          </p>
        </div>

        {/* Split hero image */}
        <div className='hero__grid' style={{ '--hero-image': `url(${heroImage})` }}>
          <div className='hero__column'>
            <div className='hero__image'>
            </div>

            <p className='hero__description'>
              Text under the first image block
            </p>
          </div>

          <div className='hero__column'>
            <div className='hero__image'>
            </div>
          </div>

          <div className='hero__column'>
            <div className='hero__image'>
            </div>

            <p className='hero__description'>
              Text under the third image block
            </p>
          </div>

          <div className='hero__column'>
            <div className='hero__image'>
            </div>
          </div>

        </div>
      </section>

      {/* Content after the hero section */}
      <section className='platform'>
        {/* Information about the platform */}
      </section>

      <section className='features'>
        {/* Platform features */}
      </section>
    </main>
  )
}

export default HomePage