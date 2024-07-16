import React, { useState } from "react";
import { FlatList } from "react-native";
import { Platform } from "react-native";
import { Container, Header, Centralized_items, Header_Text, Header_Text_intern, Header_Title, Footer, FooterView, FooterText, ScrollViewed} from './styles';
import { Body,Body_Text, CheckList, Centralized_list, CheckBox_check, CheckBox_discheck,Body_Text_o } from "./styles";
import { ListItems, ListProps} from './types';
import Icon from 'react-native-vector-icons/AntDesign'

import { Foooter } from "../../components/molecules/footer";
type HomeProps = {
    tasks: ListProps; // Definindo o tipo de prop tasks
};

export function Home(props: HomeProps) {
    const { tasks } = props; 
    const [myList, setMyList] = useState<ListItems>(tasks); 
    
    const toggleCheckbox = (index: number) => {
        setMyList(prevList =>
            prevList.map((item, i) =>
                i === index ? { ...item, is_active: !item.is_active } : item
            )
        );
    }
    const TheHeader = () =>{
        return(<Header>
        <Centralized_items>
            <Header_Title>Agenda.IFRN</Header_Title>
            <Header_Text>Você tem <Header_Text_intern>{myList.filter(item => item).length} </Header_Text_intern> <Header_Text_intern>tarefas</Header_Text_intern></Header_Text>
        </Centralized_items>
    </Header>)

    }
    const TheBody = () => {
        return(<Body>
        <CheckList>
            {myList.map((item, index) => (
                <Centralized_list key={index}>
                    {item.is_active ? (
                        <CheckBox_check onPress={() => toggleCheckbox(index)}>
                            {Platform.OS == 'web'?<Icon size={30} name={'check'} style={{color:'white',}}/>:
                            <Icon size={15} name={'check'} style={{color:'white',}}/>}
                        </CheckBox_check>
                    ) : (
                        <CheckBox_discheck onPress={() => toggleCheckbox(index)} />
                    )}
                     {item.is_active? <Body_Text_o>{item.title}</Body_Text_o>:<Body_Text>{item.title}</Body_Text>}
                </Centralized_list>
            ))}
        </CheckList>
    </Body>)
    }
    const TheFooter = () =>{
        return(<Foooter/>)
    }
    

    return (

        <>
            {Platform.OS == 'web'?<ScrollViewed><Container><TheHeader/>
            <TheBody/>
            <TheFooter/></Container></ScrollViewed>:<><Container><TheHeader/>
            <TheBody/>
            <TheFooter/></Container>
            </>}
            </>


        
    );
}
