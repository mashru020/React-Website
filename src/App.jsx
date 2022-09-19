import { BrowserRouter, Routes, Toute } from 'react-router-dom';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Plans from './pages/plans/Plans';
import NotFound from './pages/notFound/Notfound';
import Trainers from './pages/trainers/Trainers';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Home/>
        <About />
        <Contact />
        <Gallery />
        <Plans />
        <Trainers />
        <NotFound />
      </BrowserRouter>
    </div>
  )
}

export default App