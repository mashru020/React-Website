import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
        <Routes> 
          <Route index path='home' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='gallery' element={<Gallery/>} />
          <Route path='plans' element={<Plans/>} />
          <Route path='trainers' element={<Trainers/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App