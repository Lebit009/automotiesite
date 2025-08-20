import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
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
      {/* <Login />  */}
    </div>
  )
}

export default App