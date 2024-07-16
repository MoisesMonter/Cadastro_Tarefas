import styled from "styled-components/native";
import { Layout, Sizeof_Input } from "../../../layout";
import { Platform } from "react-native";
import useOrientation from "../../../../hooks/useOrientation";
import { orientation } from "../../../../hooks/orientation";

export const Container_Category = styled.ScrollView`

`

export const Label = styled.Text`
  font-size: 18px;
  margin-bottom: 8px;
  /* border-width: 0.5px; */
  color:${Layout.Text_B};
`;
export const ButtonText = styled.Text`
  font-size: 14px;
  color:${Layout.Text_G};
  font-weight: 300;
  text-align: center;
  
`
export const Select_Button = styled.TouchableOpacity`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding-left: 20px;
padding-right: 20px;
height: ${Sizeof_Input.Height_1};
width: ${Sizeof_Input.small_w};
/* border: 1.8px solid gray; */
border-width: 0.5px;
border-radius: 5px;
background-color: white;
color:${Layout.Text_B};
`

export const Modal_Category = styled.Modal`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Modal_View = styled.TouchableOpacity`
    display: flex;
    flex-direction: column;
    justify-Content: 'center';
    width: 100%;
    height: 100%;
    background-color: ${Layout.background_10};
    
`

export const Modal_View_Intern = styled.TouchableOpacity`

    display: flex;
    flex-direction: column;
    justify-Content: 'center';
    margin-top: ${()=>Platform.OS == 'web'?'10%':(__props)=>(useOrientation()== orientation.LANDSCAPE?'10%':'10%')};
    min-height: ${()=>Platform.OS =='web'? '60%': '50%'};
    max-height:${()=>Platform.OS =='web'? '60%': '50%'};
    width: ${()=>Platform.OS =='web'? '45%': '70%'};
    margin-left: ${()=>Platform.OS =='web'? '60vh': '15%'};
    background-color: ${Layout.background_50};

`

export const Modal_Scroll_View = styled.ScrollView`

`

export const Modal_Options = styled.TouchableOpacity`


background-color: ${Layout.background_50};

`

export const Modal_View_Title = styled.View`
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
background-color: ${Layout.background_10};
margin-top: ${Platform.OS == 'web'? '15px': (__props)=>(useOrientation() == orientation.LANDSCAPE?'20px':'25px')};

`

export const Modal_Title = styled.Text`
font-size:${()=>Platform.OS == 'web'? '20px':(__props)=>(useOrientation() == orientation.LANDSCAPE?'25px':'45px')};
text-align:center;
width: ${Platform.OS == 'web'? '25%':'75%'};
color: ${Layout.Text_w};

text-align: center;
background-color: ${Layout.background_70};
border-radius: 10px;
`


export const Modal_Text_i = styled.Text`
font-size:30px;
text-align: center;
background-color: ${Layout.background_70};
`

export const Modal_Text_p = styled.Text`
font-size:30px;
text-align: center;
background-color: ${Layout.background_25};
`