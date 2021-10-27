import React,{useState} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files


// or any pure javascript modules available in npm

const Numbers = () =>{
  const [getText, setText] = useState("")

const Display = (num) =>{
  setText(getText+num)

}
const Clear = () =>{
  setText("")

}
  return(
    
    
    
    <View style={styles.paragraph}>
    <View style = {{flexDirection:"row",justifyContent: 'space-between' ,padding: '10%' }}>
       <Button title ="-" onPress={()=>Display("1")}/>
       <Button title ="-" onPress={()=>Display("1")}/>
    </View>
    <View style = {{flexDirection:"row" ,width: '100%', justifyContent: 'space-between', margin: 10}}>
    <Button title ="-" onPress={()=>Display("1")}/>
    <Button title ="-" onPress={()=>Display("2")}/>
    <Button title ="-" onPress={()=>Display("3")}/>
    </View>
    <View style = {{flexDirection:"row" ,width: '100%', justifyContent: 'space-between',margin: 10}}>
    <Button title ="-" onPress={()=>Display("4")}/>
    <Button title ="-" onPress={()=>Display("5")}/>
    <Button title ="-" onPress={()=>Display("6")}/>
    </View>
    <View style = {{flexDirection:"row" ,width: '100%', justifyContent: 'space-between',margin: 10}}>
    <Button title ="-" onPress={()=>Display("7")}/>
    <Button title ="-" onPress={()=>Display("8")}/>
    <Button title ="-" onPress={()=>Display("9")}/>
    </View>
    <View >
    
    </View>
    </View>
  )
}

export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}> 
      </Text>
      <Numbers/>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
