import React, { useEffect, useState } from "react";
import { View ,Text,KeyboardAvoidingView,Platform, ScrollView,  TouchableOpacity} from "react-native";
import { Background,Container,Login_Button,Login_Icon,Login_Input,Login_Title,Login_Button_Text, Login_Icon2, Scrolled} from "./styles";

import { Layout } from "../../layout";

export const imagePaths = [
    require("../../../assets/login_calendar/Calendar1.png"),
    require("../../../assets/login_calendar/Calendar2.png"),
    require("../../../assets/login_calendar/Calendar3.png"),
    require("../../../assets/login_calendar/Calendar4.png"),
    require("../../../assets/login_calendar/Calendar5.png"),
  ];

export function Login(){

    const [Id, onChangeText1] = React.useState('');
    const [Password,onChangeText2] = React.useState('')
    const [DinamicImagePosition,SetDIP] = useState(1)
    
    useEffect(()=>{
        const interval = setInterval(() =>{
            SetDIP(Math.floor(Math.random() * 5)+1)
        },5000)
    return () => clearInterval(interval);   
    },[]);



    
    const randomIndex = Math.floor(Math.random() * 4) + 1; 
    const filterIdtoNumber = (text : string) =>{

        const stringtoNUMBER = text.replace(/\D/g, '');
        onChangeText1(stringtoNUMBER)
    }

    return(
            // <KeyboardAvoidingView style={{    background: Layout.backgroun}}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            // keyboardVerticalOffset={70}>
                <Scrolled>
            <Container>
                <Login_Icon source={require("../../../assets/logo/IFRN.png")}></Login_Icon>
                <Login_Title>Agenda IFRN</Login_Title>
                <Login_Input maxLength={13} placeholder={'suap id...'} placeholderTextColor={'gray'} onKeyPress={Number} keyboardType="numeric" onChangeText={filterIdtoNumber}/>
                <Login_Input maxLength={255} placeholder={'**********'} placeholderTextColor={'gray'} keyboardType="url" secureTextEntry={true} onChangeText={text=> onChangeText2(text)}/>
                <Login_Button>
                <Login_Button_Text>Confirme</Login_Button_Text>
                </Login_Button>
                {/* <Login_Icon2 source={imagePaths[DinamicImagePosition]}/> */}
            </Container>
                
                </Scrolled>
            // </KeyboardAvoidingView>
    )
}

