import React from 'react'
import ReactDOM from 'react-dom/client'
import {Navbar} from './componentes/Navbar.jsx'
import {Hero} from './componentes/Hero.jsx'
import {Brands} from './componentes/Brands.jsx'
import {Proyect} from './componentes/Project.jsx'
import {Description} from './componentes/Description.jsx'
import { InterestText } from './componentes/InterestText.jsx'
import { Footer } from './componentes/footer.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    <Brands/>
    <Proyect/>
    <Description/>
    <InterestText/>
    <Footer/>
  </React.StrictMode>,
)
