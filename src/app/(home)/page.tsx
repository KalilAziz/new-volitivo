import { CtaSection } from './components/cta-section'
import { CtaSectionFooter } from './components/cta-section-footer'
import { HeaderSection } from './components/header-section'
import { HeroSection } from './components/hero-section'
import { Testimonials } from './components/testimonials'

const Home = () => {
  return (
    <>
      <HeroSection />
      <HeaderSection />
      <CtaSection />
      <CtaSectionFooter />
      <Testimonials />
    </>
  )
}

export default Home