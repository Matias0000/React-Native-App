import { View, Text } from 'react-native'
import React from 'react'
import TasksList from '../components/TaskList'
import Layout from '../components/Layout'


// rnte


const HomeScreen = () => {

  return (
    <Layout> 
      <TasksList />
    </Layout>
  )
}

export default HomeScreen