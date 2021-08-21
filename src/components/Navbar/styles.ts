import styled from "styled-components";
import { GiMoonOrbit } from 'react-icons/gi'
/*
.color1 {color: #000901;}
.color2 {color: #13383f;}
.color3 {color: #4d9b89;}
.color4 {color: #b0d7b4;}
.color5 {color: #d2d1ad;}
*/
export const Bar = styled.header`
    position: fixed;
    z-index: 2;
    top: 0;
    display: flex;
    align-items: center;
    height: 70px;
    width: 100vw;
    padding-left: 30px;
    background-color: #d2d1ad;
    box-shadow: 0 1px 0 #dadce0;
`
export const OptionDiv = styled.div`
height: 100%;
width: 150px;
display: flex;
justify-content: center;
cursor: pointer;
&:hover {
        background-color: #b5b58a;
    }
`
export const Option = styled.a`
    text-align: center;
    margin-top: 25px;
    user-select: none;
`
export const Vr = styled.span`
  height: 18px;
  width: 1px;
  margin: 25px 2px;
  padding-top: 2px;
  background-color: rgba(0, 0, 0, 0.3);
`
export const Logo = styled(GiMoonOrbit)`
    width: 30px;
    height: 30px;
    margin-right: 5px;
    margin-bottom: 5px;
`
export const Title = styled.h3`
    user-select: none;
    margin-left: 5px;
    margin-right: 10px;
    margin-bottom: 25px;
    font-family: DejaVu Sans Mono, monospace;
    padding: 5px 5px;
`
export const Text = styled.span`
`