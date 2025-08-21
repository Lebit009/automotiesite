import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import Products from './components/Products';
import Title from './components/Title';
const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = React.useState(current_theme || 'light');
  React.useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
       <Home />
       <Title title="Our Products" subtitle="Explore our wide range of products" />
       <Products />
    </div>
  )
}

export default App