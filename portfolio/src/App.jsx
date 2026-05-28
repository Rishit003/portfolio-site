import Cursor from './components/Cursor'
import Noise  from './components/Noise'
import Nav    from './components/Nav'
import Footer from './components/Footer'
import Hero     from './sections/Hero'
import Skills   from './sections/Skills'
import Projects from './sections/Projects'
import Timeline from './sections/Timeline'
import Contact  from './sections/Contact'

export default function App() {
  return (
    <>
      {/* Global overlays */}
      <Cursor />
      <Noise />

      {/* Layout */}
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
