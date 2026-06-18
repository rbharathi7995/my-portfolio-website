import { HeroSection } from './pages/components/HeroSection';
import {Navbar} from './pages/components/Navbar'
import { AboutMe } from './pages/components/AboutMe';
import { Skills } from './pages/components/Skills';
import { Projects } from './pages/components/projects';
import {Contact} from './pages/components/Contact'
import './App.css'
 function App(){

  return(
    <>
    <div className='body-class'>
     <Navbar />
     <HeroSection />
     <AboutMe />
     <Skills />
     <Projects />
     <Contact />
    </div>

    </>
  )
}

export default App;