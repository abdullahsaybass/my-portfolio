import Navbar from './componenet/navbar/Navbar'
import Hero from "./componenet/hero/Hero"
import About from './componenet/about/About'
import Service from './componenet/services/Service'
import Work from './componenet/mywork/Work'
import Contact from './componenet/contact/Contact'

function App() {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Contact />
        {/* <Work /> */}
    </>
  )
}

export default App
