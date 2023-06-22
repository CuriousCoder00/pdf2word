import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  const [theme, setTheme] = useState('light');
  const themeButton = () => {
    if(theme==='light'){
      setTheme('dark');
      document.body.style.backgroundColor = "rgb(4 17 33)";
    } else {
      setTheme('light');
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Header theme={theme} toggleTheme={themeButton}/>
      
      <Home theme={theme}/>
      <Footer theme={theme}/>
    </>
  );
}

export default App;
