import useOrientation from "../../../hooks/useOrientation";
import { orientation } from "../../../hooks/orientation";
import { Platform } from "react-native";

import styled from "styled-components/native";
import { Layout } from "../../layout";

export const Container = styled.View`
    flex-direction: column;
    align-items:flex-start;
    height: 150px;
    /* background: ${(_props)=>(Layout.background)}; */
`
export const Header = styled.View`
    display: flex;
    flex-direction: column;
    margin: 0px;
    background-color: ${Layout.background};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    flex-wrap: ${(props) => (Platform.OS == 'web'? 'wrap' : 'nowrap')}; 
    padding: ${Platform.OS == 'web'? '20px' : '31px 15px 55px 15px' };
`

export const Centralized_items = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`

export const Header_Title = styled.Text`
    font-size: 24px;
    font-weight: 700;
    color: ${Layout.Text_w};

`
export const Header_Text = styled.Text`
    font-size:15px;
    font-weight: 400;
    color: ${Layout.Text_w};
`
export const Header_Text_intern = styled.Text`
    font-size:15px;
    font-weight:bold;
    color: ${Layout.Text_w};
`

export const Body = styled.View`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: ${Platform.OS == 'web'? '20px' : '60px' };
width: 100%;
`

export const Body_View_Text = styled.View`
display: flex;
flex-direction: row;
flex-wrap: wrap;
 min-width:${Platform.OS =='web'? '110px' :'210px'};
max-width: ${Platform.OS =='web'? '820px' :'210px'};
/* width: ${Platform.OS =='web'? '820px' :'210px'}; */ 


`

export const Body_Text = styled.Text`
font-size: 14px;
font-weight: 400;
color:${Layout.Text_B};
background-color: #FFFFFF04;
`
export const Body_Text_o = styled.Text`
color:${Layout.background};
text-decoration: line-through;
text-decoration-color: ${Layout.background};
font-size: 14px;
font-weight: 400;
background-color: #FFFFFF04;
`


export const CheckList = styled.ScrollView`
height: ${Platform.OS == 'web'? '450px' : '900px' };;
background-color: ${Platform.OS == 'web'? Layout.background_50 : '' };
border-radius: 5px;
padding: ${Platform.OS == 'web'? '20px' : '30px 10px 30px 10px' };
margin: ${Platform.OS == 'web'? '20px' : '0px 30px 30px 30px' };;
gap:30px;
width: ${Platform.OS == 'web'? 'auto':'auto'};
`
export const ScrollViewed = styled.ScrollView`
`
export const Button_Icon = styled.TouchableOpacity`

`

export const Centralized_list = styled.View`
display: flex;
flex-direction: row;
flex-wrap: wrap;
background-color: ${Platform.OS == 'web'? Layout.background_10 : '' };
justify-content: space-between;
align-items: center;
flex-wrap: ${Platform.OS == 'web'?'nowrap':'wrap'};
gap:${Platform.OS == 'web'?'25px':'25px'};
margin: ${Platform.OS == 'web'?'15px 0px 15px 0px':'10px 0px 10px 0px'};
`

export const CheckBox_check = styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
width:${()=>(Platform.OS == 'web'?'25px':'16px')};
height:${()=>(Platform.OS == 'web'?'25px':'16px')};
border-radius: 3px;
border-color: ${Layout.CheckBox_on};
background-color: ${Layout.CheckBox_on};
border-width:1px;
`

export const CheckBox_discheck = styled.TouchableOpacity`
width:${()=>(Platform.OS == 'web'?'25px':'16px')};
height:${()=>(Platform.OS == 'web'?'25px':'16px')};
border-radius: 3px;
border-color: ${Layout.CheckBox_off};
border-width:1px;
background-color: ${Platform.OS == 'web'? Layout.Text_w : '' };
`