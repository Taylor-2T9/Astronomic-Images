import React from "react"
import Context, { ContextProps } from "./Context"
import Explorer from "./Explorer"
import Footer from "./Footer"
import api from "../service/api"
import NavBar from "./Navbar"
import { AppDiv } from "./styles"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
const context: ContextProps = {
  url: null,
  title: null,
  description: null,
  date: null,
}
function App() {
  interface CardProps {
    url: string
    title: string
    description: string
    date: string
  }
  const [lastImage, setLastImage] = React.useState(() => {
  })
  useEffect(() => {
    
  }, [])
  return (
    <Context.Provider value={context}>
      <AppDiv>
        <NavBar lastImage={lastImage} setLastImage={setLastImage} />
        <Explorer lastImage={lastImage} setLastImage={setLastImage} />
        <Footer />
      </AppDiv>
    </Context.Provider>
  )
}

export default App
