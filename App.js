import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task  from './components/task';

export default function App() {
  return (
    <View style={styles.container}>
 
      {/* lista de tarefas de hoje */}

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tarefas de Hoje</Text>
          <View style={styles.items}>
            {/* pra onde as tarefas vão */}
            <Task Text={'Task 1'}/>
            <Task Text={'Task 2'}/>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
});
