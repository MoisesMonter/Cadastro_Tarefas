import { Platform } from "react-native"
import { Footer,FooterView,FooterText } from "./styles"
import IconFooter from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFA from 'react-native-vector-icons/FontAwesome'

export function Foooter(){
    return(
    <Footer>
        <FooterView >
            {Platform.OS == 'web'?<IconFA size={75} name={'calendar-check-o'} style={{color:'black',}}/>:
                <IconFA size={30} name={'calendar-check-o'} style={{color:'black',}}/>}
            <FooterText>Registrar Tarefa</FooterText>
        </FooterView>   
        <FooterView>
            {Platform.OS == 'web'?<IconFooter size={75} name={'format-list-bulleted-triangle'} style={{color:'black',}}/>:
                <IconFooter size={30} name={'format-list-bulleted-triangle'} style={{color:'black',}}/>}           
        <FooterText>Listar Tarefa</FooterText>
        </FooterView>  
    </Footer>)
}
