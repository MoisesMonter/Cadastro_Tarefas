import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { orientation } from '../../../hooks/orientation'
import useOrientation from '../../../hooks/useOrientation'
import { Layout, Sizeof_Input } from '../../layout'


export const WebContainer = styled.ScrollView`
`;
export const MobileContainer = styled.View`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-between ;
    width: 100%;
    height: 100%;
`;



export const Header_Container = styled.View`

display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: ${Layout.background};
    justify-content: center;
    ${(props)=>(Platform.OS == 'web'?' border-radius: 0px 0px 10px 10px;   height: 50px;':  'height: 40px;')}


`
export const Header_View = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    width: 100%;
    
    margin: ${()=>Platform.OS == 'web'? '25px 0px 25px 0px':(__props)=>(useOrientation() == orientation.LANDSCAPE?'33px 0px 25px 0px':'-173px 0px 25px 0px')};

`

export const Header_Title = styled.Text`
    font-size: 24px;
    font-weight: 700;
    color:${Layout.background};
` 


export const Body = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap:15px;
    

`

export const Body_Input = styled.TextInput`
    ${()=>(Platform.OS == 'web'? '':'')}
    width: ${Sizeof_Input.small_w};
    height: ${Sizeof_Input.Height_1};
    outline-color: ${(props)=>(Layout.border_color)};
    border-width: 0.5px;
    border-radius: 5px;
    padding: 15px;
`

export const Cadastrar = styled.TouchableOpacity`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: ${Sizeof_Input.small_w};
height: ${Sizeof_Input.Height_1};
background-color: ${Layout.background};
border-radius: 5px;
margin-bottom: ${()=>useOrientation() == orientation.LANDSCAPE? '10px': '0px'};
`
export const Cadastrar_Title = styled.Text`
font-size: 15px;
font-style: italic;
font-weight: bold;
color: ${Layout.Text_w};
`
