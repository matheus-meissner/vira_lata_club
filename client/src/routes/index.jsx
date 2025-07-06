import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Adoption from '../pages/Adoption';
import Pet from '../pages/Pet'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/adocao" element={<Adoption />} />
      <Route path="/pet/:name" element={< Pet/>}/>
    </Routes>
  );
}
