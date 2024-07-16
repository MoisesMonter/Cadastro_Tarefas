import styled from "styled-components/native";
import { Layout } from "../../../layout";

export const Footer = styled.View`
display: flex;
flex-direction: row;
justify-content: space-around;

width: 100%;

`
export const FooterView = styled.TouchableOpacity`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:5px;
margin-bottom: 15px;
`
export const FooterText = styled.Text`
font-size: 14px;
font-weight: 500;
color:${Layout.Text_B};
`