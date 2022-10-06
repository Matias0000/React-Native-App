import { View, Text, FlatList, RefreshControl } from 'react-native'
import React,{useState,useEffect} from 'react'
import TaskItem from './TaskItem';
import { getTasks,deleteTask } from '../api'
import { useIsFocused } from '@react-navigation/native';




const TasksList = () => {

  const [refresing, setRefresing] = useState(false)

  const [tasks, setTasks] = useState([])

  const isFocused = useIsFocused()
  
  const renderItem =({item})=>{
        return <TaskItem task={item} handleDelete={handleDelete}/>;
    };

  const handleDelete = async(id)=>{
    await deleteTask(id)
    await loadTasks()
  }
      

  const loadTasks = async()=>{
      const data = await getTasks()
      //log para verificar llegada de datos
      // console.log('loaded');
      setTasks(data)
  }

  const onRefresh = React.useCallback(async() =>{
    setRefresing(true)
    await loadTasks();
    setRefresing(false)
  })

  useEffect(()=>{
    console.log(isFocused);
      loadTasks()
  },[isFocused])
  

  return (
    <FlatList
    style={{width:'100%'}}
      data={tasks}
      keyExtractor={(item) => item.id+''}
    //   se puede extraer las propiedades requeridas 
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
        refreshing={refresing}
        colors={["#78e08f"]}
        onRefresh={onRefresh}
        progressBackgroundColor="#000"/>
      }
      />
  )
}

export default TasksList