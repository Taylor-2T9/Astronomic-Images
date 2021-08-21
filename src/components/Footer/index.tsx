import { NextPage } from "next"
import React from "react"
import * as Styles from './styles'

export interface FooterProps {

}
const Footer: NextPage<FooterProps> = () => {
    return (
        <Styles.Footer>
            <Styles.FooterTitle><i>"Somos todos poeira das estrelas"</i></Styles.FooterTitle>
        </Styles.Footer>
    )
}
export default Footer