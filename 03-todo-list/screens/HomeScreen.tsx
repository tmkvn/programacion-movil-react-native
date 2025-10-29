import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useTasks } from "../state/useTasks";
import TaskInput from "../components/TaskInput";

export const HomeScreen = () => {
  const { tasks, addTask, deleteTask } = useTasks();
  return (
    <View style={styles.container} >
      <Text style={styles.title}>Mis Tareas</Text>
      <TaskInput onAdd={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskItem}>{item.title}</Text>
            <TouchableOpacity
              onPress={() => deleteTask(item.id)}
            >
              <Text style={styles.delete}>🗑</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay tareas todavía</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 40
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: 'black',
    textAlign: "center",
    marginBottom: 20
  },
  taskItem: {
    backgroundColor: 'white',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "#E5E7EB",
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  taskTest: {
    fontSize: 16,
    color: 'black'
  },
  delete: {
    fontSize: 18
  },
  emptyText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    marginTop: 40
  }
});
