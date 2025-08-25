import Mail from '../components/Mail'
import Social from '../components/Social'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

const Portfolio = () => {
  return (
    <div className='min-h-screen'>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Mail />
      <Social />
    </div>
  )
}

export default Portfolio