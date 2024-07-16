import React, { useState } from 'react';
import { Text } from 'react-native';
import { ButtonText, Container_Category, Modal_Category, Modal_View, Modal_Text_p, Modal_View_Intern, Select_Button, Modal_Scroll_View, Modal_Options ,Modal_Title, Modal_View_Title, Modal_Text_i} from "./style";
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';

export function CategorySelector(){
    const categories:string[] = ['Lazer', 'Estudo', 'Viagem', 'Economia','Lazer', 'Estudo', 'Viagem', 'Economia','Lazer', 'Estudo', 'Viagem', 'Economia'];
    const [selectedCategory,setSelectedCategory] = useState('')
    const [modalVisible,setModalVisible] = useState(false)

    const toggleModal = () =>{
      setModalVisible(!modalVisible)
    }

    const toggleSelect = (item: string) => {
      setSelectedCategory(item)
      toggleModal()
    }
    return(
        <Container_Category>
          <Select_Button onPress={() => setModalVisible(true)}>
            <ButtonText>
              {selectedCategory? selectedCategory: 'Categorias'}
            </ButtonText>
            {modalVisible? <Icon size={16}  name={"caretup"}/> : <Icon size={16} name={'caretdown'}/>}


          </Select_Button>
          
          <Modal_Category
          animationType='fade'
          transparent={true}
          visible={modalVisible}
          onRequestClose={()=>setModalVisible(!modalVisible)}

          >
            <Modal_View_Title>
              <Modal_Title>Categorias</Modal_Title>
            </Modal_View_Title>

          <Modal_View  activeOpacity={1} onPress={toggleModal}>
            <Modal_View_Intern>
              <Modal_Scroll_View>
                {
                  categories.map((item:string,index:Float)=>(
                    <Modal_Options onPress={() => toggleSelect(item)}>
                      {index % 2 ==0? <Modal_Text_p>{item}</Modal_Text_p>:<Modal_Text_i>{item}</Modal_Text_i>}
                    </Modal_Options>
                  ))
                }
                </Modal_Scroll_View>

            </Modal_View_Intern>

          </Modal_View>
          </Modal_Category>
         
        </Container_Category>
    )
} 