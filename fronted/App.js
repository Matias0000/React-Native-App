import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='HomeScreen' component={HomeScreen} 
        options={({navigation})=>(
          {
            title:'Tasks App',
            headerStyle:{backgroundColor:'#222f3e'},
            headerTitleStyle:{color:'#FFFFFF'},
          headerRight: () =>(
          <TouchableOpacity onPress={()=> navigation.navigate('TaskFormScreen') }>
            <Text style={{color:'#ffffff',marginRight:20,fontSize:15}}>New</Text>
          </TouchableOpacity>)
          })}/>

        <Stack.Screen name='TaskFormScreen' component={TaskFormScreen}
          options={{
            title:'Create a Tasks',
            headerStyle:{
              backgroundColor:'#222f3e'
            },
            headerTitleStyle:{color:'#ffffff'},
            headerTintColor:'#ffffff',

          }}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
