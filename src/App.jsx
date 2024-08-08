import './App.css'
import Footer from './componants/Footer'
import Navbar from './componants/Navbar'
import Section2 from './componants/Section2'
import SectionExpert from './componants/SectionExpert'
import SectionFeatured from './componants/SectionFeatured'
import SectionInfo from './componants/SectionInfo'
import SectionWelcom from './componants/SectionWelcom'

function App() {

  return (
    <>
      <Navbar />
      <SectionWelcom />
      <SectionInfo/>
      <Section2 />
      <SectionExpert />
      <SectionFeatured />
      <Footer/>
    </>
  )
}

export default App
