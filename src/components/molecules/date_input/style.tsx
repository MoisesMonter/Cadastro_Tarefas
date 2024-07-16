import styled from "styled-components/native";
import { Layout, Sizeof_Input} from "../../../layout"

export const Body_Date = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    height: ${Sizeof_Input.Height_1};
    width: ${Sizeof_Input.small_w};
    border-radius: 5px;
    border-width: 0.8px;
    border-color: ${Layout.Text_G};
    /* border-color: ${Layout.border_color}; */

`
export const Body_Date_Input = styled.TextInput`
    width: 30%;
    text-align:center;
    height: ${Sizeof_Input.Height_1};
    /* background-color: red; */
`
export const Local_Text = styled.Text`
align-items:center;`


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5fcff;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const SelectedDate = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
`;

export const OpenButton = styled.TouchableOpacity`

`