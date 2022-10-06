import { View, Text, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import Layout from '../components/Layout'
import { getTask, saveTask, updateTask } from '../api'

const TaskFormScreen = ({navigation,route}) => {

  const [task, setTask] = useState({
    title:'',
    description:''
  })
  const [editing, setEditing] = useState(false)
 
  const handleChange =(name,value)=> setTask({...task, [name]:value})
  
  const handleSubmit= async() =>{
    try {
      if(!editing){
        await saveTask(task)
        }else{
          await updateTask(route.params.id,task)
        }
        navigation.navigate('HomeScreen')
      
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if(route.params && route.params.id){
      navigation.setOptions({headerTitle:'Update a task'});
      setEditing(true);
      (async()=>{
        const task=await getTask(route.params.id)
        setTask({title:task.title, description:task.description})
        // console.log(task);
      })();
    }
  }, [])
  

  return (
    <Layout>
    
      <TextInput
        style={styles.input} 
        placeholder="Write a title" placeholderTextColor="#546574"
        onChangeText={(text)=> handleChange('title',text)}
        value={task.title}
      />
      <TextInput 
        style={styles.input} 
        placeholder="Write a Description" placeholderTextColor="#546574"
        onChangeText={(text)=> handleChange('description',text)}
        value={task.description}
      />

      {
        !editing ? (
        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit} >
          <Text style={styles.backgroundText}>Save Task</Text>
        </TouchableOpacity>
        ): (
        <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit} >
          <Text style={styles.backgroundText}>Update Task</Text>
        </TouchableOpacity>
        )
      }
    
    </Layout>
  )
}

const styles = StyleSheet.create({
  input:{
    width:'90%',
    marginBottom:10,
    // backgroundColor:'red',
    fontSize:14,
    borderWidth:1,
    borderBottomColor:'#10ac84',
    height:40,
    color:'#FFFFFF',
    textAlign:'center',
    padding:4,
    borderRadius:5
  },
  buttonSave:{
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:3,
    backgroundColor:'#10ac84',
    width:'90%',
  },
  backgroundText:{
    color:'#ffffff',
    textAlign:'center'
  },
  buttonUpdate:{
    padding:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:3,
    backgroundColor:'#2781FC',
    width:'90%'
  }
})

export default TaskFormScreen