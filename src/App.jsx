import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Layout from './components/layout/Layout';
import HomePage from './pages/home/HomePage';
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        {/* main layout */}
        <Route path="/" element={<Layout />}>
         {/* pages */}
          <Route index element={<HomePage/>} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;