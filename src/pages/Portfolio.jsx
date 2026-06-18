import Mail from '../components/Mail'
import Social from '../components/Social'
import About from '../components/About'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Experience from '../components/Experience'

const Portfolio = () => {
  return (
    <div className='min-h-screen'>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Mail />
      <Social />
    </div>
  )
}

export default Portfolio