import { StatusBar } from 'expo-status-bar';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [errMsg, setError] = useState('');

  const handleAddTask = () => {

    
    Keyboard.dismiss();
    task != null ? setTaskItems([...taskItems, task]) : setError('Task cannot be empty');
    setTask(null)
    setError('');
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
    
  }
  return (
    <View style={styles.container}>
   
      <View style={styles.taskWrapper}>
        <Text style={styles.selectionTitle}>Today's Task</Text>
       <Text style={styles.error}>{errMsg }</Text>
        <View style={styles.items}>
     
          {
            taskItems.map((task,index) => {
             return  (<TouchableOpacity  key={index} onPress={()=>completeTask(index)}>
                   <Task text={task} />
               </TouchableOpacity>
             )
            
            })
        }
          
        </View>
        
      
      </View>
     
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.inputText} placeholder={'Enter new task'}
onChangeText ={text => setTask(text) }   value={task}     >
          

        </TextInput>
        <TouchableOpacity onPress={()=>handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>
                +
              </Text>
            </View>
          </TouchableOpacity>
      </KeyboardAvoidingView>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  
  },
  selectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    left:20,
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between'
    
  },
  inputText: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
    , borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 0.5,
    height:50,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    marginRight: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems:'center',
  },
  addText: {
    // right: 40,
    alignItems: 'center',
    color: '#0fff',
    fontSize:20,
  },
  errMsg: {
    color: '#0f4',
    fontSize:10,
  }
  
});
