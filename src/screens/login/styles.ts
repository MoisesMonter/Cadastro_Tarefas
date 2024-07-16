import React from 'react';
import styled from 'styled-components/native'
import useOrientation from "../../../hooks/useOrientation";
import { orientation } from "../../../hooks/orientation";
import { Platform } from 'react-native';
import { Layout, Sizeof_Input} from "../../layout";

export const Background = styled.View`

    background: ${(_props)=>(Layout.background)};
`
export const Scrolled = styled.ScrollView`
width: 100%;
height: 100%;
 background: ${(_props)=>(Layout.background)};
`
export const Container = styled.View`

    display: flex;
    padding-top: ${Platform.OS== 'web'? '40px': '40px'};
    height: 100%;
    justify-content: center;
    align-items: center;

    padding-bottom: 70px;
`

export const Login_Icon = styled.Image`
    width: ${(props)=>(useOrientation() == orientation.LANDSCAPE?'49px':'78px')};
    height: ${(props)=>(useOrientation() == orientation.LANDSCAPE?'59px':'99px')};
    margin-top: 10%;
`
export const Login_Icon2 = styled.Image`
    width: ${(props)=>(Platform.OS === 'web'?'484px': useOrientation() == orientation.LANDSCAPE?'149px':'278px')};
    height: ${(props)=>(Platform.OS === 'web'?
     '440px' :useOrientation() == orientation.LANDSCAPE?'159px':'299px')};
`
export const Login_Title = styled.Text`
display:flex;
flex-wrap: ${(props)=>(useOrientation() == orientation.LANDSCAPE?'nowrap':'wrap')};
width: ${(props)=>(useOrientation() == orientation.LANDSCAPE?'250px':'150px')};
margin: ${(props)=>(useOrientation() == orientation.LANDSCAPE?'10px 0px 10px 0px':'0px')};
text-align: center;
font-weight: 900;
color:${(props)=>(Layout.Text_w)};
font-size: 36px;
`

export const Login_Input = styled.TextInput`
height: ${()=>(Sizeof_Input.Height_1)};
border-radius: 5px;
padding-left: 10px;
margin: 10px 0px 10px 0px;
font-size: 17px;
outline-color: ${(props)=>(Layout.border_color)};
background: white;
width: ${(prop)=>(Sizeof_Input.small_w)};
`

export const Login_Button = styled.TouchableOpacity`
height: ${()=>(Sizeof_Input.Height_1)};
background-color: ${()=>(Layout.button_color)};
width: ${(props)=>(Sizeof_Input.small_w)};
border-radius: 5px;
margin: 10px 0px 10px 0px;
align-items: center;
justify-content: center;

`

export const Login_Button_Text = styled.Text`
font-size:18px;
color:${()=>(Layout.Text_w)}
`

export const Body_Text = styled.Text`
font-size:18px;
color: ${Layout.Text_B};
`