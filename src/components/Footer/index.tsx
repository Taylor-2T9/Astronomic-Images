import { NextPage } from "next"
import * as Styles from './styles'
import NasaIcon from '../../images/nasa_logo.ico'
export interface FooterProps {

}
const Footer: NextPage<FooterProps> = () => {
    return (
        <Styles.Footer>
            <a href={'https://www.nasa.gov'} target={'_blank'}>
            <Styles.NasaLogo src={NasaIcon} title={'Logo da Nasa'}/>
            </a>
            <Styles.FooterTitle><i>"Somos todos poeira das estrelas"</i></Styles.FooterTitle>
            <a href={'https://github.com/Taylor-2T9'} target={'_blank'}>
            <Styles.UserAstronaut title={'Criador do site'} />
            </a>
        </Styles.Footer>
    )
}
export default Footer