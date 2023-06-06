import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import { DataContext } from '../context/useData';
import DetailTask from './addtaskpage';
import DeletedTask from './deletetaskpage';

const TodoModal = ({ closeModal, list }) => {
  const { data, setData } = useContext(DataContext);
  const [addTask, setAddTask] = useState(false);
  const [indexTask, setIndex] = useState(0);
  const [deletedTask, setDelTask] = useState(false);
  const [nameInd, setNameInd] = useState(0);

  const toggleAddTask = () => {
    setAddTask(!addTask);
  };

  const toggleDeletedTask = (index) => {
    const nameIndex = data.findIndex((element) => list.name === element.name);
    setNameInd(nameIndex);
    setDelTask(!deletedTask);
    setIndex(index);
  };

  const renderTodo = ({ item, index }) => {
    return (
      <View style={styles.listconst}>
        <TouchableOpacity onPress={() => toggleDeletedTask(index)}>
          <Text style={{ fontSize: 20 }}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const deletedTodoList = () => {
    const updatedData = [...data];
    const indexDelete = updatedData.findIndex((element) => list.name === element.name);
    updatedData.splice(indexDelete, 1);
    setData(updatedData);
    closeModal();
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={closeModal} style={{ position: 'absolute', top: 64, right: 32, zIndex: 10 }}>
        <Text>close</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deletedTodoList} style={{ position: 'absolute', top: 64, left: 32, zIndex: 10 }}>
        <Text>Delete</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>{list.name}</Text>

        <FlatList
          data={list.todos}
          renderItem={renderTodo}
          keyExtractor={(item) => item.title}
        />

        <TouchableOpacity onPress={toggleAddTask}>
          <Text>Add Detail</Text>
        </TouchableOpacity>

        <Modal animationType="slide" visible={addTask} onRequestClose={toggleAddTask}>
          <DetailTask list={list} closeModal={toggleAddTask} />
        </Modal>

        <Modal animationType="slide" visible={deletedTask} onRequestClose={toggleDeletedTask}>
          <DeletedTask list={list} index={indexTask} nameIndex={nameInd} closeModal={toggleDeletedTask} />
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default TodoModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: '#b0e0e6',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '400',
    color: '#000000',
    marginTop: 50,
    marginBottom: 30,
  },
  listconst: {
    paddingVertical: 24,
    fontWeight: '500'

  }})