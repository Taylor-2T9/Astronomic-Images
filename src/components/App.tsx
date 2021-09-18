import React from "react"
import Context, { ContextProps } from "./Context"
import Explorer from "./Explorer"
import Footer from "./Footer"
import NavBar from "./Navbar"
import { AppDiv } from "./styles"
import GlobalStyle from './global'
const context: ContextProps = {
  url: null,
  title: null,
  description: null,
  date: null,
}
function App() {
  const [lastImage, setLastImage] = React.useState(() => {
  })
  return (
    <Context.Provider value={context}>
      <AppDiv>
        <NavBar lastImage={lastImage} setLastImage={setLastImage} />
        <Explorer lastImage={lastImage} setLastImage={setLastImage} />
        <GlobalStyle />
        <Footer />
      </AppDiv>
    </Context.Provider>
  )
}

export default App
