import { NextPage } from "next"
import React from "react"
import api from "../../../service/api"
import { Link, useLocation } from "react-router-dom"
import * as Styles from "./styles"
export interface FormProps {
  show: boolean
  setShow
  setLastImage
}
const FormDate: NextPage<FormProps> = ({
  show,
  setShow,
  setLastImage
}) => {
  const formRef = React.useRef<HTMLFormElement>()
  const currentUrl = useLocation().pathname
  const inputRef = React.useRef<HTMLInputElement>()
  const [date, setDate] = React.useState<String>()
  if (!show) return null
  return (
    <Styles.Form
      ref={formRef}
      onSubmit={(ev) => {
        ev.preventDefault()
        setDate(inputRef.current.value)
        api
          .get(`/apod?date=${date}&api_key=${process.env.REACT_APP_API_KEY}`)
          .then((res) => {
            if (!currentUrl.includes(date)) {
              document.getElementById('link').click()
            }
            setShow(false)
          })
      }}
    >
      <Styles.Input type={"date"} ref={inputRef}
        onInput={() => {
          setDate(inputRef.current.value)
        }} />
      <Styles.Button>Enviar</Styles.Button>
      <Link to={`/customDate?param=${date}`} id='link'></Link>
    </Styles.Form >
  )
}
export default FormDate
