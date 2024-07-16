
import React,{ useState } from "react";
import { Body, Body_Input, Cadastrar, Cadastrar_Title, Container, Header_Container, Header_Title, Header_View,MobileContainer,WebContainer } from "./styles";
import { Input_Date} from "../../components/molecules/date_input/";
import { CategorySelector } from "../../components/molecules/category_input";
import { Foooter } from "../../components/molecules/footer";
import useOrientation from "../../../hooks/useOrientation";
import { orientation } from "../../../hooks/orientation";
import { Platform } from "react-native";

export function Registration(){
    // const [date, setDate] = useState(new Date())
    return (
       <>{Platform.OS == 'web'?
        <WebContainer>
            <MobileContainer>
                <Header_Container>
                </Header_Container>
                <Header_View>
                        <Header_Title>Cadastro de Tarefas</Header_Title>
                    </Header_View>
                <Body
                >
                    
                    <Body_Input maxLength={15} placeholder="Titulo"></Body_Input>
                    <Body_Input maxLength={255} placeholder="Descrição"></Body_Input>
                    <CategorySelector></CategorySelector>
                    <Input_Date />
                    <Cadastrar>
                        <Cadastrar_Title>Cadastrar</Cadastrar_Title>
                    </Cadastrar>
                </Body>
                <Foooter/>
            </MobileContainer>
        
        </WebContainer>
       :useOrientation() == orientation.LANDSCAPE?         <WebContainer>
       <Header_Container>
       </Header_Container>
       <Header_View>
           <Header_Title>Cadastro de Tarefas</Header_Title>
       </Header_View>
       <Body>
           <Body_Input maxLength={15} placeholder="Titulo"></Body_Input>
           <Body_Input maxLength={255} placeholder="Descrição"></Body_Input>
           <CategorySelector></CategorySelector>
           <Input_Date />
           <Cadastrar>
                <Cadastrar_Title>Cadastrar</Cadastrar_Title>
            </Cadastrar>
       </Body>
       <Foooter/>
       </WebContainer>:
     <MobileContainer>
        <Header_Container>
        </Header_Container>

        <Body>
        <Header_View>
            <Header_Title>Cadastro de Tarefas</Header_Title>
        </Header_View>
            <Body_Input maxLength={15} placeholder="Titulo"></Body_Input>
            <Body_Input maxLength={255} placeholder="Descrição"></Body_Input>
            <CategorySelector></CategorySelector>
            <Input_Date />
            <Cadastrar>
                <Cadastrar_Title>Cadastrar</Cadastrar_Title>
            </Cadastrar>
        </Body>
        <Foooter/>
        </MobileContainer>}</> 
        
    )
}