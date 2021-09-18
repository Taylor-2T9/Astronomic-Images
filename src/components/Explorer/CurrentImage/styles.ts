import styled from "styled-components"

export const Container = styled.section`
display:flex;
flex-direction: row;
justify-content: space-around;
margin-top: 71px;
max-height: 490px;
`
export const Informations = styled.div`
margin-top: 22px;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
max-height: 450px;
flex-direction: column;
`
export const Title = styled.h2`
padding-bottom: 25px;
color: whitesmoke;
`
export const Description = styled.span`
padding-top: 20px;
min-width: 400px;
max-width: 650px;
max-height: 400px;
padding-left: 20px;
font-size: 20px;
color: whitesmoke;
@media(max-width: 760px){
    font-size: 15px;
}
`
export const Date = styled.h4`
margin-top: 30px;
letter-spacing: 1px;
color: whitesmoke;
`
export const Card = styled.div`
padding: 30px 60px;
`
export const CardImage = styled.img`
user-select: none;
border-radius: 12px;
max-width: 700px;
max-height: 430px;
@media(max-width: 760px){
    max-width: 200px;
}
`
export const videoEmbed = styled.embed`
user-select: none;
border-radius: 12px;
width: 650px;
height: 430px;
@media(max-width: 760px){
    max-width: 200px;
    max-height: 200;
}
`