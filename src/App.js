import { createContext, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import {CgSun} from "react-icons/cg"
import {HiMoon} from "react-icons/hi";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const icon=theme==="light"?<CgSun size={40}/>:<HiMoon size={40}/>;
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Layout />
        <div className="switch">
           
          <button onClick={toggleTheme} id="bt">{icon}</button>
         
        </div>
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
