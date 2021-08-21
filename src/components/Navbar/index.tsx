import React from "react"
import { NextPage } from "next"
import * as Styles from "./styles"
import api from "../../service/api"
import { Link, useLocation } from "react-router-dom"
import FormDate from "./FormDate"

export interface NavBarProps {
  lastImage;
  setLastImage;
}
const NavBar: NextPage<NavBarProps> = ({ lastImage, setLastImage }) => {
  const [showForm, setShowForm] = React.useState<boolean>()
  const currentUrl = useLocation().pathname
  return (
    <Styles.Bar>
      <Styles.Logo />
      <Styles.Title>Imagens Astronômicas</Styles.Title>
      <Styles.Vr />
      <Styles.OptionDiv>
        <Styles.Option
          onClick={() => {
            if (currentUrl.includes('customDate')) {
              document.getElementById('link').click()
            }
          }}
        >
          <Styles.Text>Imagem de hoje</Styles.Text>
        </Styles.Option>
      </Styles.OptionDiv>
      <Styles.Vr />
      <Styles.OptionDiv>
        <Styles.Option
          onClick={() => {
            setShowForm(!showForm)
          }}
        >
          <Styles.Text>Escolha uma data</Styles.Text>
        </Styles.Option>
      </Styles.OptionDiv>
      <FormDate
        show={showForm}
        setShow={setShowForm}
        setLastImage={setLastImage}
      />
      <Link to={'/'} id='link'></Link>
    </Styles.Bar>
  )
}
export default NavBar
