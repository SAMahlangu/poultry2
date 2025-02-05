import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import necessary router components
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import BroilerPage from './pages/Broiler.jsx';
import LayerPage from './pages/Layer.jsx';
import NutritionPage from './pages/Nutrition.jsx';
import IncubationPage from './pages/Incubation.jsx';
import ButcherPage from './pages/Butcher.jsx';
import RecipesPage from './pages/Recipes.jsx';



function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className="grid-container">
        {/* Always show Header and Sidebar */}
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/broiler" element={<BroilerPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/layer" element={<LayerPage />} />
          <Route path="/incubation" element={<IncubationPage />} />
          <Route path="/butcher" element={<ButcherPage />} />                  
          <Route path="/recipes" element={<RecipesPage />} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;