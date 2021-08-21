
import { useState } from "react"
import Explorer, { CardProps } from "./Explorer"
import Footer from "./Footer"
import NavBar from "./Navbar"
import { AppDiv } from "./styles"
function CustomDate() {
    const [lastImage, setLastImage] = useState<CardProps>()
    return (
        <AppDiv>
            <NavBar lastImage={lastImage} setLastImage={setLastImage} />
            <Explorer lastImage={lastImage} setLastImage={setLastImage} />
            <Footer />
        </AppDiv>
    )
}

export default CustomDate