import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Linking } from "react-native";
import styled from "styled-components/native";
import { Login } from "./src/screens/login";
import { Home } from "./src/screens/Home";
import { Registration } from "./src/screens/registration";
import { Background } from "./src/screens/login/styles";

const Apps = styled.View`
    display:'flex';
    width: 100%;
`;

export default function App() {
  // const [myList, setMyList] = useState<ListProps>([
  //   { title: 'Lavar a casa', is_active: true },
  //   { title: 'Estudar React 1 hora', is_active: false },
  //   { title: 'Estudar Django 1 hora', is_active: true },
  //   { title: 'Futebol as 5:50', is_active: false }
  // ]);

  const handleOpenWeb = () => {
    const url = 'https://www.localhost.com'; // URL que você deseja abrir
    Linking.openURL(url).catch((err) => console.error('Erro ao abrir URL:', err));
    };




  const myList=[
    { title: 'Lavar a casa', is_active: true },
    { title: 'Estudar React 1 hora', is_active: false },
    { title: 'Estudar Django 1 hora', is_active: true },
  ];
  return (
    <Apps>
        <Login/>
        {/* <Home tasks={myList} /> */}
        {/* <Registration/> */}

        
    </Apps>
  );
}

