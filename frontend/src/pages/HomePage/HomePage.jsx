import './HomePage.css'
import heroImage from '../../assets/image_hero.jpg'
import platformInfoImage from '../../assets/platform_info.jpg'
import featureOcrImage from '../../assets/feature_ocr.jpg'
import featureAgentImage from '../../assets/feature_agent.jpg'
import featureDatabaseImage from '../../assets/feature_database.jpg'
import featureConfigurationImage from '../../assets/feature_configuration.jpg'

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
          <a href='#tech_stack'> Tech_stack </a>
          <a href='#features'> Features </a>
          <a href='#order_ext_module'> Order extraction module </a>
        </nav>
      </header>


      {/* Section 1 - Hero */}
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


      {/* Section 2 - About the platform */}
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


      {/* Section 3 - Tech stack */}
      <section id='tech_stack' className='tech_stack'>
        <div className = 'tech_stack__container container'>
          <h2> Tech Stack </h2>
          <div className='tech_stack__list'>
            <p>AI</p> 
            <p> · </p>
            <p>Computer Vision</p>
            <p> · </p>
            <p>OCR</p>
            <p> · </p>
            <p>LLM</p>
            <p> · </p>
            <p>PyTorch</p> 
            <p> · </p>
            <p>LangChain</p> 
            <p> · </p>
            <p>React</p>
            <p> · </p>
            <p>Python</p>
            <p> · </p>
            <p>FastAPI </p> 
            <p> · </p>
            <p>PostgreSQL</p>
          </div>
        </div>
      </section>

      {/* Section 4 - Features */}
      <section id='features' className='features'>
        <div className='features__container container'>
          <h2 className='features__title'>
              <span>Project</span>
              FEATURES
          </h2>

          <div className='features__list'>
            <div className='features__item features__item--light'>
              <div className='features__content'>
                <h3>
                  OCR & Document Processing
                </h3>

                <p>
                  Transport documents are processed using computer vision
                  and OCR. PyTorch-based models analyse document images
                  and extract the information required for further
                  logistics processing
                </p>
              </div>

              <div className='features__image'>
                <img src={featureOcrImage} alt='OCR and document processing' />
              </div>
            </div>

            <div className='features__item features__item--dark'>
              <div className='features__image'>
                <img src={featureAgentImage} alt='AI agent for transport search' />
              </div>

              <div className='features__content'>
                <h3>
                  AI Agent for Transport Search
                </h3>

                <p>
                  An AI agent uses the extracted document information
                  to identify suitable transports in the database.
                  LangChain helps coordinate the agent workflow and
                  interaction with the available data.
                </p>
              </div>
            </div>

            <div className='features__item features__item--light'>
              <div className='features__content'>
                <h3>
                  Structured Data & Database
                </h3>

                <p>
                  Information extracted from transport documents is
                  transformed into structured data and stored in
                  PostgreSQL, making processed information available
                  for further logistics operations.
                </p>
              </div>

              <div className='features__image'>
                  <img src={featureDatabaseImage} alt='Structured data and database' />
              </div>
            </div>

            <div className='features__item features__item--dark'>
              <div className='features__image'>
                <img src={featureConfigurationImage} alt='Configurable processing pipeline' />
              </div>

              <div className='features__content'>
                <h3>
                  Configurable Processing Pipeline
                </h3>

                <p>
                  The processing pipeline can be configured for different
                  document types and logistics scenarios, allowing the
                  system to adapt its processing workflow to specific
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id='order_ext_module' className='order_ext_module container'>
        {/* Platform features */}
      </section>

    </main>
  )
}

export default HomePage
