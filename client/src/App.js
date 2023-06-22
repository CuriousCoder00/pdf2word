import { useState } from "react";
import FileUploadForm from "./components/FileUploadForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <FileUploadForm theme={theme}/>
      <Footer theme={theme}/>
    </>
  );
}

export default App;
