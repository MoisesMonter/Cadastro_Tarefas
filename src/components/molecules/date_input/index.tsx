import React,{useState,useEffect} from "react";
import { Body_Text } from "../../../screens/Home/styles";
import { Body_Date, Body_Date_Input, Local_Text } from "./style"
type DataProps ={
    Day : Number;
    Month: Number;
    Year: Number;
}
export function Input_Date(){
    const date = new Date();
    const [day, setDay] = useState(date.getDate().toString());
    const [month, setMonth] = useState((date.getMonth() + 1).toString());
    const [year, setYear] = useState(date.getFullYear().toString());

    const handleInputChange = (value: string, type: string) => {
        let formattedValue = value.replace(/\D/g, ''); // Remove caracteres não numéricos
    
        switch (type) {
          case "day":
            let last_day= new Date(year, month, 0).getDate()
            console.log(last_day)
            if (formattedValue.length > 2) {
              formattedValue = formattedValue.slice(0, 2);
            }
            
            if(parseInt(formattedValue) >last_day ){
                formattedValue = last_day
            }
            setDay(formattedValue);
            break;
          case "month":
            if (formattedValue.length > 2) {
              formattedValue = formattedValue.slice(0, 2);
            }
            if(parseInt(formattedValue)>12){
                formattedValue = '12'
            }
            setMonth(formattedValue)
            break;
          case "year":
            if (formattedValue.length > 4) {
              formattedValue = formattedValue.slice(0, 4);
            }
            setYear(formattedValue);
            break;
          default:
            break;
        }
      };

      useEffect(() => {
        const interval = setInterval(() => {
          let currentYear = date.getFullYear();
          let currentMonth = parseInt((date.getMonth() +1),10)
          let inputYear = parseInt(year, 10);
          let inputMonth = parseInt(month,10);

          if (inputYear < currentYear) {
            setYear(currentYear.toString());
          }     
          if (inputYear == currentYear && currentMonth > inputMonth){
            setMonth(currentMonth.toString());
          }
          
        }, 1000);
      
        return () => clearInterval(interval);
      }, [year,month]); 

    return(
        <>
        <Body_Date>
        <Body_Date_Input
        value={day}
        onChangeText={(text) => handleInputChange(text, "day")}
        maxLength={2}
        placeholder="Day"
        
        keyboardType="numeric"
      />
      <Local_Text>/</Local_Text>
      <Body_Date_Input
        value={month}
        onChangeText={(text) => handleInputChange(text, "month")}
        maxLength={2}
        placeholder="Month"
        keyboardType="numeric"
      />
      <Local_Text>/</Local_Text>
      <Body_Date_Input
        value={year}
        onChangeText={(text) => handleInputChange(text, "year")}
        maxLength={4}
        placeholder="Year"
        keyboardType="numeric"
      />
    </Body_Date>
        </>
        
    )
}