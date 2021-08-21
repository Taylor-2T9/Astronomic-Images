import { NextPage } from "next"
import { useEffect } from "react"
import api from "../../service/api"
import CurrentDayImage from "../CurrentImage"
import * as Styles from "./styles"
import { useLocation } from 'react-router-dom'

export interface ExplorerProps {
  lastImage
  setLastImage
}
export interface CardProps {
  url: string
  title: string
  description: string
  date: string
}
const Explorer: NextPage<ExplorerProps> = ({ lastImage, setLastImage }) => {
  const url = useLocation()
  useEffect(() => {
    if (url.pathname.includes('customDate')) {
      const customDate = url.search.slice(1).split('=')[1]
      api
        .get(`/apod?date=${customDate}&api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
          setLastImage({
            url: res.data.url,
            title: res.data.title,
            description: res.data.explanation,
            date: customDate,
          })
        })
    } else {
      const today = new Date()
      const currentDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
      api
        .get(`/apod?date=${currentDate}&api_key=${process.env.REACT_APP_API_KEY}`)
        .then((res) => {
          setLastImage({
            url: res.data.url,
            title: res.data.title,
            description: res.data.explanation,
            date: currentDate
          })
        })
    }
  }, [url])
  return (
    <Styles.Container>
      <CurrentDayImage lastImage={lastImage} />
    </Styles.Container>
  )
}
export default Explorer
