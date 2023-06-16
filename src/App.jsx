import Header from "./components/Header"
import { useState } from "react"
import Hero from "./components/Hero"

import { Footer } from "./components/Footer"


function App() {

 const [darkMode,setDarkMode]=useState(false)
  return (  
        <div className={darkMode && "dark"}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
          <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"> 
            <Hero/>
            <Footer/>
          </main>
        </div> 
      )
    }
  


export default App
